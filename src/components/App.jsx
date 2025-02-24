import "../styles/App.css";
import EducationInfo from "./EducationInfo";
import ExperienceInfo from "./ExperienceInfo";
import GeneralInfo from "./GeneralInfo";

function App() {
    return (
        <div className="container">
            <GeneralInfo />
            <EducationInfo />
            <ExperienceInfo />
        </div>
    );
}

export default App;
