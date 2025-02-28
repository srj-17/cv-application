function CustomButtons({ id, onAdd }) {
    return (
        <div id={id} className="general-btn-container btn-container">
            <button type="submit" className="submit">
                Submit
            </button>
            {id !== 0 ? (
                <button type="button" className="add" onClick={onAdd}>
                    Add
                </button>
            ) : null}
        </div>
    );
}

export default CustomButtons;
