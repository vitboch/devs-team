import vitaly from "../../assets/images/vitaly.jpeg";
import dima from "../../assets/images/dima.jpeg";
import andrey from "../../assets/images/andrey.jpg";
import svyat from "../../assets/images/svyat.jpeg";
import nikita from "../../assets/images/nikita.jpg";

const devs = [
    {
        _id: "12345",
        firstName: "Виталий",
        lastName: "Бочкарев",
        birthday: "1981-10-29",
        photo: vitaly,
        about: "С удовольствием обучаюсь новым технологиям, эксперементирую в JavaScript, имею опыт работы в команде разработчиков, умею объяснить сложное на простых примерах. Хобби: испанская гитара, горный велосипед и беговые лыжи.",
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
            discord: "https://discordapp.com/users/989563164041551912/"
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
        birthday: "1997-09-29",
        photo: svyat,
        about: "Быстро обучаюсь новому, достигаю поставленых целей. Люблю пешие прогулки, фотографировать и стильно одеваться. Праактикую осознаный подход к жизни. ",
        technologies: {
            react: { name: "React", percents: "60", color: "info" },
            javascript: {
                name: "JavaScript",
                percents: "70",
                color: "warning"
            },
            git: { name: "GIT", percents: "60", color: "dark" },
            html: { name: "HTML", percents: "80", color: "danger" },
            css: { name: "CSS", percents: "80", color: "primary" }
        },
        contacts: {
            github: "https://github.com/orlov11",
            email: "svyatoslav.orlov11@gmail.com",
            telegram: "https://t.me/ProductL22",
            discord: "https://discordapp.com/users/827158247675920414/"
        },
        completed: ["Страница участника"]
    },
    {
        _id: "34512",
        firstName: "Никита",
        lastName: "Лукиных",
        birthday: "2000-01-26",
        photo: nikita,
        about: "Я Frontend разработчик. Люблю работать в команде, интересуюсь Гейм-дизайном.  Также, хочу развиваться, как руководитель. Моя цель - создать свою собственную студию по разработки.",
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
            github: "https://github.com/NikaLuki",
            email: "nikita.lukinykh.s@gmail.com",
            telegram: "https://t.me/NikaLuki",
            discord: "https://discordapp.com/users/297374377866035211/"
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

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(devs);
        }, 1000);
    });

export default {
    fetchAll
};
