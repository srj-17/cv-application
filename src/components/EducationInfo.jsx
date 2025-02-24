import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

const generalInfo = [
    {
        id: 0,
        info: "Name of the Institution (School / Collage)",
        type: "text",
        placeholder: "ex: Harvard Collage",
        value: "",
    },
    {
        id: 1,
        info: "Title of Study",
        type: "text",
        placeholder: "ex: Computer Science",
        value: "",
    },
    {
        id: 2,
        info: "Date of Study",
        type: "date",
        placeholder: "ex: 2020/20/20",
        value: "",
    },
];

function EducationInfo() {
    return (
        <section className="education-info">
            <h1> Educational Information </h1>
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

export default EducationInfo;
