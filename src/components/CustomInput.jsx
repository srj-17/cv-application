import { useState } from "react";

function CustomInput({
    info,
    type = "text",
    requirement = false,
    placeholder,
}) {
    const [value, setValue] = useState("");

    return (
        <>
            <label>
                {info} :
                <input
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    required={requirement}
                    onChange={(event) => setValue(event.target.value)}
                />
            </label>
            <div className="seperator"></div>
        </>
    );
}

export default CustomInput;
