import CustomInput from "./CustomInput";
import CustomButtons from "./CustomButtons";

// Not changing cause state is not changing, inputs are
// being rendered the same as last time, and the vlaues
// of new data change to last time's data
function InfoForm({
    type,
    data,
    onSubmit,
    currentTurn,
    disabled,
    id,
    inputChangeHandler,
    onAdd,
}) {
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
                                    storedValue={info.value}
                                    placeholder={info.placeholder}
                                    onInputChange={inputChangeHandler}
                                />
                            );
                        })}
                    </div>
                    <CustomButtons id={id} onAdd={onAdd} />
                </form>
            </section>
        );
    } else {
        return null;
    }
}

export default InfoForm;
