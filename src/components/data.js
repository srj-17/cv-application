export default [
    {
        id: 0,
        type: "General",
        info: [
            {
                id: crypto.randomUUID(),
                info: "First Name",
                type: "text",
                placeholder: "ex: John",
                value: "John",
            },
            {
                id: crypto.randomUUID(),
                info: "Last Name",
                type: "text",
                placeholder: "ex: Lama",
                value: "Lama",
            },
            {
                id: crypto.randomUUID(),
                info: "Email",
                type: "email",
                placeholder: "ex: johnlama123@gmail.com",
                value: "johnlama123@gmail.com",
            },
        ],
    },
    {
        id: 1,
        type: "Experience",
        info: [
            {
                id: crypto.randomUUID(),
                info: "Company Name",
                type: "text",
                placeholder: "ex: Berkshire Hathway",
                value: "Berkshire Hathway",
            },
            {
                id: crypto.randomUUID(),
                info: "Position Name",
                type: "text",
                placeholder: "ex: Managing Director",
                value: "Managing Director",
            },
            {
                id: crypto.randomUUID(),
                info: "Responsibilities",
                type: "text",
                placeholder: "ex: Managing people, business operations, etc.",
                value: "Managing People",
            },
            {
                id: crypto.randomUUID(),
                info: "Date when you started working here",
                type: "date",
                placeholder: "ex: 2020/12/06",
                value: "2020-12-06",
            },
            {
                id: crypto.randomUUID(),
                info: "Date till which you worked here",
                type: "date",
                placeholder: "ex: 2024/10/06",
                value: "2024-10-06",
            },
        ],
    },
    {
        id: 2,
        type: "Education",
        info: [
            {
                id: crypto.randomUUID(),
                info: "Name of the Institution (School / Collage)",
                type: "text",
                placeholder: "ex: Harvard Collage",
                value: "Harvard",
            },
            {
                id: crypto.randomUUID(),
                info: "Title of Study",
                type: "text",
                placeholder: "ex: Computer Science",
                value: "CS",
            },
            {
                id: crypto.randomUUID(),
                info: "Date of Study",
                type: "date",
                placeholder: "ex: 2020/20/20",
                value: "2020-20-20",
            },
        ],
    },
];
