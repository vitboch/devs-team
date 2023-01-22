import avatar from "../../assets/images/avatar.jpeg";
import vitaly from "../../assets/images/vitaly.jpeg";
import dima from "../../assets/images/dima.jpg";
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
            "Архитектура",
            "Карточка человека"
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
        completed: ["Страница участника"]
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
        birthday: "1975-09-10",
        photo: dima,
        about: "Требователен к себе. Нравится постоянно расти и развиваться. Люблю грамотность, как в русском и английском, так и в написании кода. Ценю в людях открытость и легкость. Играю в бильярд. Пишу электронную музыку.",
        technologies: {
            react: { name: "React", percents: "75", color: "info" },
            javascript: {
                name: "JavaScript",
                percents: "90",
                color: "warning"
            },
            git: { name: "GIT", percents: "50", color: "dark" },
            html: { name: "HTML", percents: "100", color: "danger" },
            css: { name: "CSS", percents: "95", color: "primary" }
        },
        contacts: {
            github: "https://github.com/nonfermata",
            email: "nonfermata@gmail.com",
            telegram: "https://t.me/febrecords",
            discord: "https://discordapp.com/users/990199120285302815/"
        },
        completed: ["Progress", "Footer"]
    },
    {
        _id: "51234",
        firstName: "Андрей",
        lastName: "Диденко",
        birthday: "1991-07-14",
        photo: andrey,
        about: "Ответственный, честный. Интерисуюсь 3D моделированием, видео-монтажом, программированием. Летом люблю кататься на мотоцикле.",
        technologies: {
            react: { name: "React", percents: "50", color: "info" },
            javascript: {
                name: "JavaScript",
                percents: "70",
                color: "warning"
            },
            git: { name: "GIT", percents: "60", color: "dark" },
            html: { name: "HTML", percents: "75", color: "danger" },
            css: { name: "CSS", percents: "50", color: "primary" }
        },
        contacts: {
            github: "https://github.com/AndreyDid",
            email: "https://andreydidenk0@yandex.ru",
            telegram: "https://t.me/AndreyDidenk0",
            discord: "https://discordapp.com/users/514663030567731213/"
        },
        completed: ["Button", "Badge", "Slider", "AboutProject"]
    }
];

export default devs;
