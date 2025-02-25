import CustomInput from "./CustomInput";

// Not changing cause state is not changing, inputs are
// being rendered the same as last time, and the vlaues
// of new data change to last time's data
function InfoForm({ type, data, onSubmit, currentTurn, disabled }) {
    function inputChangeHandler(e) {
        const dataId = e.target.id;
        const toChange = data.find((info) => info.id === dataId);
        toChange.value = e.target.value;
    }

    if (currentTurn) {
        return (
            <section className={type}>
                <form onSubmit={onSubmit}>
                    <div className="info">
                        {data.map((info) => {
                            return (
                                <CustomInput
                                    disabled={disabled}
                                    key={info.id}
                                    id={info.id}
                                    info={info.info}
                                    type={info.type}
                                    placeholder={info.placeholder}
                                    onInputChange={inputChangeHandler}
                                />
                            );
                        })}
                    </div>
                    <div className="general-btn-container btn-container">
                        <button type="submit" className="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        );
    } else {
        return null;
    }
}

export default InfoForm;
