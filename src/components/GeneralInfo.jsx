import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

const generalInfo = [
    {
        id: 0,
        info: "First Name",
        type: "text",
        placeholder: "ex: John",
        value: "John",
    },
    {
        id: 1,
        info: "Last Name",
        type: "text",
        placeholder: "ex: Lama",
        value: "Lama",
    },
    {
        id: 2,
        info: "Email",
        type: "email",
        placeholder: "ex: johnlama123@gmail.com",
        value: "johnlama123@gmail.com",
    },
];

function GeneralInfo() {
    return (
        <section className="general-info">
            <h1> General Information </h1>
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

export default GeneralInfo;
