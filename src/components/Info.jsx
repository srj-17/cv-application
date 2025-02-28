import data from "./data";

function GeneralInfo() {
    const info = data[0].info;
    const type = data[0].type;
    const firstName = info[0].value;
    const lastName = info[1].value;
    const email = info[2].value;

    return (
        <section className={type + "-info"}>
            <div className="name">
                {firstName || "John"} {lastName || "Rai"}
            </div>
            <div className="mail">
                <svg
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <title>email</title>
                    <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                </svg>{" "}
                {email || "johnrai@gmail.com"}
            </div>
        </section>
    );
}

function ExperienceInfo() {
    const info = data[2].info;
    const type = data[2].type;
    const companyName = info[0].value;
    const position = info[1].value;
    const responsibilities = info[2].value;
    const startWorkingDate = info[3].value;
    const endWorkingDate = info[4].value;

    return (
        <section className={type + "-info"}>
            <div className="title">Experience</div>
            <div className="content">
                Worked as a <b>{position.shift() || "Managing Director"}</b> at{" "}
                <b>{companyName.shift() || "BerkShire Hathway"}</b> from{" "}
                <b>{startWorkingDate.shift() || "2070-01-15"}</b> to{" "}
                <b>{endWorkingDate.shift() || "2075-12-20"}</b> where I held the
                responsibilities of{" "}
                <b>{responsibilities.shift() || "Managing People"}</b>.
            </div>
        </section>
    );
}

function EducationInfo() {
    const info = data[1].info;
    const type = data[1].type;
    const school = info[0].value;
    const course = info[1].value;
    const date = info[2].value;
    let requiredData = [];
    for (let i = 0; i < school.length; i++) {
        requiredData.push([[school[i], course[i], date[i]]]);
    }

    return (
        <section className={type + "-info"}>
            <div className="title">Education</div>
            {requiredData.map((item, index) => {
                const school = item[0];
                const course = item[1];
                const date = item[2];
                console.log(school, course, date);
                if (!school && !course && !date) return null;
                else
                    return (
                        <div className="content" key={index}>
                            Completed <b>{course || "-"}</b> from{" "}
                            <b>{school || "-"}</b> at {date || "-"}.
                        </div>
                    );
            })}
        </section>
    );
}

function Info() {
    return (
        <>
            <div className="title">Cirriculum Vitae</div>
            <div className="content">
                <GeneralInfo />

                <EducationInfo />

                <ExperienceInfo />
            </div>
        </>
    );
}

export default Info;
