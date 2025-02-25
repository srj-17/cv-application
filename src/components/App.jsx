import { useState } from "react";
import "../styles/App.css";
import Info from "./Info";
import data from "./data";
import InfoForm from "./InfoForm";

// 0 general info, 1 education info, 2 experience info

const getRequiredInfo = (infoId) => {
    return data.find((info) => {
        return info.id === infoId;
    });
};

function App() {
    const [currentInfoId, setCurrentInfoId] = useState(0);

    function onSubmit(e) {
        e.preventDefault();
        setCurrentInfoId(currentInfoId + 1);
        if (currentInfoId === 2) setCurrentInfoId(2);
    }

    function onClickHeader(e) {
        const clickedFormId = e.target.closest(".info-subform").id;
        setCurrentInfoId(+clickedFormId);
    }

    const currentInfo = getRequiredInfo(currentInfoId);

    return (
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
                                disabled={currentInfoId !== info.id}
                            />
                        </div>
                    );
                })}
            </div>
            <div className="resume-container">
                <Info />
            </div>
        </div>
    );
}

export default App;
