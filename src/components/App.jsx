import { useState } from "react";
import "../styles/App.css";
import Info from "./Info";
import data from "./data";
import InfoForm from "./InfoForm";

// 0 general info, 1 education info, 2 experience info
const generalInfoData = data[0].info;
const educationInfoData = data[1].info;
const experienceInfoData = data[2].info;

function getDataValues(data) {
    const infoValues = data.reduce((values, currentInfo) => {
        const id = currentInfo.id;
        const value = currentInfo.value;
        values[id] = value;
        return values;
    }, {});
    return infoValues;
}

const getRequiredInfo = (infoId) => {
    return data.find((info) => {
        return info.id === infoId;
    });
};

// for the inner info
// TODO: change naming
const getInfo = (dataId, infoId) => {
    const targetData = data[dataId];
    const dataInfo = targetData.info;
    for (const info of dataInfo) {
        if (info.id === infoId) return info;
    }
};

function App() {
    const [currentInfoId, setCurrentInfoId] = useState(0);
    const [generalInfoValues, setGeneralInfoValues] = useState(
        getDataValues(generalInfoData),
    );
    const [educationInfoValues, setEducationInfoValues] = useState(
        getDataValues(educationInfoData),
    );
    const [experienceInfoValues, setExperienceInfoValues] = useState(
        getDataValues(experienceInfoData),
    );

    function onSubmit(e) {
        e.preventDefault();

        // change the currently displayed form
        setCurrentInfoId(currentInfoId + 1);
        if (currentInfoId === 2) setCurrentInfoId(2);
    }

    function onClickHeader(e) {
        const clickedFormId = e.target.closest(".info-subform").id;
        setCurrentInfoId(+clickedFormId);
    }

    function onAddHandler() {
        // save the values to data
        if (currentInfoId === 0) {
            for (const id in generalInfoValues) {
                getInfo(0, id).value = generalInfoValues[id];
            }
        } else if (currentInfoId === 1) {
            for (const id in educationInfoValues) {
                getInfo(1, id).value = [...educationInfoValues[id]];
                const nextEduInfoValuesForId = [...educationInfoValues[id]];
                nextEduInfoValuesForId.push(educationInfoValues[id].at(-1));
                setEducationInfoValues((prevValue) => ({
                    ...prevValue,
                    [id]: [...nextEduInfoValuesForId],
                }));
            }
        } else {
            for (const id in experienceInfoValues) {
                const nextExpInfoValuesForId = [...experienceInfoValues[id]];
                nextExpInfoValuesForId.push(experienceInfoValues[id].at(-1));
                getInfo(2, id).value = [...experienceInfoValues[id]];
                setExperienceInfoValues((prevValue) => ({
                    ...prevValue,
                    [id]: [...nextExpInfoValuesForId],
                }));
            }
        }
    }

    function inputChangeHandler(e) {
        const dataId = e.target.id;
        if (currentInfoId === 0) {
            setGeneralInfoValues({
                ...generalInfoValues,
                [dataId]: e.target.value,
            });
        } else if (currentInfoId === 1) {
            const currentValues = educationInfoValues[dataId];
            const nextValues = [...currentValues];
            nextValues.pop();
            nextValues.push(e.target.value || "");

            setEducationInfoValues({
                ...educationInfoValues,
                [dataId]: [...nextValues],
            });
        } else if (currentInfoId === 2) {
            const currentValues = experienceInfoValues[dataId];
            const nextValues = [...currentValues];
            nextValues.pop();
            nextValues.push(e.target.value || "");

            setExperienceInfoValues({
                ...experienceInfoValues,
                [dataId]: [...nextValues],
            });
        }
    }

    const currentInfo = getRequiredInfo(currentInfoId);

    return (
        <>
            <div className="app-title">Create Your CV</div>
            <div className="container">
                <div className="form-container">
                    {data.map((info) => {
                        return (
                            <div
                                key={info.id}
                                id={info.id}
                                className="info-subform"
                            >
                                <h1
                                    className={info.type + "-info"}
                                    onClick={onClickHeader}
                                >
                                    {info.type} Information
                                </h1>
                                <InfoForm
                                    currentTurn={currentInfoId === info.id}
                                    data={currentInfo.info}
                                    type={currentInfo.type}
                                    onSubmit={onSubmit}
                                    onAdd={onAddHandler}
                                    id={currentInfoId}
                                    inputChangeHandler={inputChangeHandler}
                                />
                            </div>
                        );
                    })}
                </div>
                <div className="resume-container">
                    <Info />
                </div>
            </div>
        </>
    );
}

export default App;
