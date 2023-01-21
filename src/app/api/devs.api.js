import avatar from "../../assets/images/avatar.jpeg";
import vitaly from "../../assets/images/vitaly.jpeg";
import andrey from "../../assets/images/andrey.jpg";

const devs = [
    {
        _id: "12345",
        firstName: "Виталий",
        lastName: "Бочкарев",
        birthday: "1981-10-29",
        photo: vitaly,
        about: "О себе",
        technologies: {
            react: { name: "React", percents: "55", color: "info" },
            javascript: {
                name: "JavaScript",
                percents: "75",
                color: "warning"
            },
            git: { name: "GIT", percents: "65", color: "dark" },
            html: { name: "HTML", percents: "85", color: "danger" },
            css: { name: "CSS", percents: "75", color: "primary" }
        },
        contacts: {
            github: "https://github.com/vitboch",
            email: "boch.vitaly@gmail.com",
            telegram: "https://t.me/Vitaly_Bochkarev",
            discord: "https://discordapp.com/users/хххххххххххххххххх/"
        },
        completed: [
            "Настройка начального проекта",
            "Качество кода",
            "Архитектура"
        ]
    },
    {
        _id: "23451",
        firstName: "Святослав",
        lastName: "Орлов",
        birthday: "2000-01-01",
        photo: avatar,
        about: "О себе",
        technologies: {
            react: { name: "React", percents: "100", color: "info" },
            javascript: {
                name: "JavaScript",
                percents: "100",
                color: "warning"
            },
            git: { name: "GIT", percents: "100", color: "dark" },
            html: { name: "HTML", percents: "100", color: "danger" },
            css: { name: "CSS", percents: "100", color: "primary" }
        },
        contacts: {
            github: "https://github.com/",
            email: "dev@develop.dev",
            telegram: "https://t.me/",
            discord: "https://discordapp.com/users/хххххххххххххххххх/"
        },
        completed: ["Карточка человека"]
    },
    {
        _id: "34512",
        firstName: "Никита",
        lastName: "Лукиных",
        birthday: "2000-01-01",
        photo: avatar,
        about: "О себе",
        technologies: {
            react: { name: "React", percents: "100", color: "info" },
            javascript: {
                name: "JavaScript",
                percents: "100",
                color: "warning"
            },
            git: { name: "GIT", percents: "100", color: "dark" },
            html: { name: "HTML", percents: "100", color: "danger" },
            css: { name: "CSS", percents: "100", color: "primary" }
        },
        contacts: {
            github: "https://github.com/",
            email: "dev@develop.dev",
            telegram: "https://t.me/",
            discord: "https://discordapp.com/users/хххххххххххххххххх/"
        },
        completed: ["Структура сайта", "Роутинг", "Navbar", "Breadcrumbs"]
    },
    {
        _id: "45123",
        firstName: "Дмитрий",
        lastName: "Баулин",
        birthday: "2000-01-01",
        photo: avatar,
        about: "О себе",
        technologies: {
            react: { name: "React", percents: "100", color: "info" },
            javascript: {
                name: "JavaScript",
                percents: "100",
                color: "warning"
            },
            git: { name: "GIT", percents: "100", color: "dark" },
            html: { name: "HTML", percents: "100", color: "danger" },
            css: { name: "CSS", percents: "100", color: "primary" }
        },
        contacts: {
            github: "https://github.com/",
            email: "dev@develop.dev",
            telegram: "https://t.me/",
            discord: "https://discordapp.com/users/хххххххххххххххххх/"
        },
        completed: ["Progress"]
    },
    {
        _id: "51234",
        firstName: "Андрей",
        lastName: "Диденко",
        birthday: "1991-07-14",
        photo: andrey,
        about: "О себе",
        technologies: {
            react: { name: "React", percents: "50", color: "info" },
            javascript: {
                name: "JavaScript",
                percents: "70",
                color: "warning"
            },
            git: { name: "GIT", percents: "60", color: "dark" },
            html: { name: "HTML", percents: "75", color: "danger" },
            css: { name: "CSS", percents: "60", color: "primary" }
        },
        contacts: {
            github: "https://github.com/AndreyDid",
            email: "https://andreydidenk0@yandex.ru",
            telegram: "https://t.me/AndreyDidenk0",
            discord: "https://discordapp.com/users/514663030567731213/"
        },
        completed: ["Button", "Badge", "Slider"]
    }
];

export default devs;
