import data from "./data";
import "../styles/info.css";

function CustomInfo({ info, type }) {
    return (
        <section className={type + "-info"}>
            <div className="title">{type} Information</div>
            {info.map((i) => {
                return (
                    <div key={i.id} className="info-card">
                        <div className="info-name"> {i.info} </div>
                        <div className="info-value"> : {i.value} </div>
                    </div>
                );
            })}
        </section>
    );
}

function Info() {
    return (
        <>
            {data.map((info) => {
                return (
                    <CustomInfo
                        type={info.type}
                        info={info.info}
                        key={info.id}
                    />
                );
            })}
        </>
    );
}

export default Info;
