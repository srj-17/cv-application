import { useState } from "react";

function CustomInput({
    info,
    type = "text",
    id,
    requirement = false,
    placeholder,
    onInputChange,
    disabled,
    storedValue,
}) {
    const [value, setValue] = useState(storedValue);

    return (
        <>
            <label>
                {info} :
                <input
                    disabled={disabled}
                    id={id}
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    required={requirement}
                    onChange={(e) => {
                        setValue(e.target.value);
                        onInputChange(e);
                    }}
                />
            </label>
            <div className="seperator"></div>
        </>
    );
}

export default CustomInput;
