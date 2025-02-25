import { useState } from "react";
import "../styles/App.css";
import InfoForm from "./InfoForm";
import Info from "./Info";
import requiredInfo from "./data";

// 0 general info, 1 education info, 2 experience info

const getRequiredInfo = (infoId) => {
    return requiredInfo.find((info) => {
        return info.id === infoId;
    });
};

function App() {
    const [requiredInfoId, setRequiredInfoId] = useState(0);

    function onSubmit(e) {
        e.preventDefault();
        setRequiredInfoId(requiredInfoId + 1);
        if (requiredInfoId === 2) setRequiredInfoId(2);
    }

    const requiredInfo = getRequiredInfo(requiredInfoId);

    return (
        <div className="container">
            <div className="form-container">
                <InfoForm
                    data={requiredInfo.info}
                    type={requiredInfo.type}
                    onSubmit={onSubmit}
                />
            </div>
            <div className="form-resume-divider-line"></div>
            <div className="resume-container">
                <Info />
            </div>
        </div>
    );
}

export default App;
