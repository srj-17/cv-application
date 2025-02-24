import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

const generalInfo = [
    {
        id: 0,
        info: "Company Name",
        type: "text",
        placeholder: "ex: Berkshire Hathway",
        value: "",
    },
    {
        id: 1,
        info: "Position Name",
        type: "text",
        placeholder: "ex: Managing Director",
        value: "",
    },
    {
        id: 2,
        info: "Responsibilities",
        type: "text",
        placeholder: "ex: Managing people, business operations, etc.",
        value: "",
    },
    {
        id: 3,
        info: "Date when you started working here",
        type: "date",
        placeholder: "ex: 2020/12/06",
        value: "",
    },
    {
        id: 4,
        info: "Date till which you worked here.",
        type: "date",
        placeholder: "ex: 2024/10/06",
        value: "",
    },
];

function ExperienceInfo() {
    return (
        <section className="experience-info">
            <h1> Experience Information </h1>
            <div className="info">
                {generalInfo.map((info) => {
                    return (
                        <CustomInput
                            key={info.id}
                            info={info.info}
                            type={info.type}
                            placeholder={info.placeholder}
                        />
                    );
                })}
            </div>
            <div className="general-btn-container btn-container">
                <CustomButton type="submit" name="Submit" className="submit" />
                <CustomButton type="button" name="Edit" className="submit" />
            </div>
        </section>
    );
}

export default ExperienceInfo;
