import React from "react";

const AboutProject = () => {
    return (
        <div className="py-5 container p-3">
            <div>
                <h1 className="fw-light text-center mb-4">О проекте</h1>
                <p>
                    Перед нами стояла задача разработать классный сайт на React,
                    который будет презентовать нашу команду, и креативно
                    рассказать о команде в целом и о каждом участнике отдельно.
                </p>
            </div>
            <div>
                <h1 className="fw-light text-center mb-4">Мы реализовали:</h1>
            </div>
            <div>
                <h3 className="mt-3">Страницы:</h3>
                <hr />
                <div
                    className="accordion accordion-flush"
                    id="accordionFlushExample1"
                >
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-heading">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapse1"
                                aria-expanded="false"
                                aria-controls="flush-collapse"
                            >
                                Главная
                            </button>
                        </h2>
                        <div
                            id="flush-collapse1"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-heading"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body">
                                <ul>
                                    <li>
                                        Слайдер дает краткую информацию о
                                        веб-технологиях
                                    </li>
                                    <li>
                                        Вкратце рассказываем о нашей команде
                                    </li>
                                    <li>Несколько слов о каждом из нас</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseTwo"
                                aria-expanded="false"
                                aria-controls="flush-collapseTwo"
                            >
                                Страница участника
                            </button>
                        </h2>
                        <div
                            id="flush-collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingTwo"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body">
                                <ul>
                                    <li>
                                        Представление каждого из участников
                                        команды
                                    </li>
                                    <ul>
                                        <li>Имя, фамилия</li>
                                        <li>Фотография</li>
                                        <li>Возраст</li>
                                        <li>Немного о себе</li>
                                        <li>Социальные сети</li>
                                        <li>
                                            Чем занимался в разработке данного
                                            проекта
                                        </li>
                                    </ul>
                                    <li>Использовались общие компоненты</li>
                                    <ul>
                                        <li className="fw-bold m-0">
                                            Progress Bar
                                        </li>
                                        <p>
                                            Отображает уровень знаний о каждой
                                            из технологий
                                        </p>
                                        <li className="fw-bold m-0">Badge</li>
                                        <p>
                                            Отображает роль человека в команде
                                        </p>
                                        <li className="fw-bold m-0">Button</li>
                                        <p>
                                            Переход по кнопке на страницу
                                            пользователя, а также добавление его
                                            в «Избранное»
                                        </p>
                                    </ul>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2
                            className="accordion-header"
                            id="flush-headingThree"
                        >
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseThree"
                                aria-expanded="false"
                                aria-controls="flush-collapseThree"
                            >
                                Избранное
                            </button>
                        </h2>
                        <div
                            id="flush-collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingThree"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body">
                                <ul>
                                    <li>
                                        Отображение участников, добавленных в
                                        «Избранное»
                                    </li>
                                    <li>
                                        Возможность удаления участников из
                                        «Избранного»
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <h3 className="mt-5">Компоненты:</h3>
                </div>
                <hr />
                <div
                    className="accordion accordion-flush"
                    id="accordionFlushExample2"
                >
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFour">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseFour"
                                aria-expanded="false"
                                aria-controls="flush-collapseFour"
                            >
                                Progress
                            </button>
                        </h2>
                        <div
                            id="flush-collapseFour"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingFour"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body">
                                <p>
                                    Разноцветный компонент с названием
                                    технологии, шкала которого заполнена в
                                    процентном соотношении
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFive">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseFive"
                                aria-expanded="false"
                                aria-controls="flush-collapseFive"
                            >
                                Button
                            </button>
                        </h2>
                        <div
                            id="flush-collapseFive"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingFive"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body">
                                <p>
                                    Кнопка, вариативная по цвету и названию,
                                    выполняющая определенную функцию
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingSix">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseSix"
                                aria-expanded="false"
                                aria-controls="flush-collapseSix"
                            >
                                Карточка участника
                            </button>
                        </h2>
                        <div
                            id="flush-collapseSix"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingSix"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body">
                                <p>
                                    Дает краткую информацию об участнике: имя,
                                    фамилия, возраст, фотография, несколько слов
                                    о себе. Внутри компонент имеет два вложенных
                                    компонента: кнопки «открыть» и «добавить в
                                    избранное»
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2
                            className="accordion-header"
                            id="flush-headingSeven"
                        >
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseSeven"
                                aria-expanded="false"
                                aria-controls="flush-collapseSeven"
                            >
                                Breadcrumbs
                            </button>
                        </h2>
                        <div
                            id="flush-collapseSeven"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingSeven"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body">
                                <p>
                                    «Хлебные крошки» – удобный путь до текущей
                                    страницы
                                </p>
                                <p className="fw-lighter">
                                    Home / Library / Data
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2
                            className="accordion-header"
                            id="flush-headingEight"
                        >
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseEight"
                                aria-expanded="false"
                                aria-controls="flush-collapseEight"
                            >
                                Badge
                            </button>
                        </h2>
                        <div
                            id="flush-collapseEight"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingEight"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body">
                                <p>
                                    Цветная табличка с отображением роли в
                                    команде
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingNine">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseNine"
                                aria-expanded="false"
                                aria-controls="flush-collapseNine"
                            >
                                Navbar
                            </button>
                        </h2>
                        <div
                            id="flush-collapseNine"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingNine"
                            data-bs-parent="#accordionFlushExample3"
                        >
                            <div className="accordion-body">
                                <li>
                                    Навигационное меню со всеми страницами сайта
                                </li>
                            </div>
                        </div>
                    </div>
                    <h3 className="mt-5">Дополнительно реализовано:</h3>
                    <hr />
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTen">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseTen"
                                aria-expanded="false"
                                aria-controls="flush-collapseTen"
                            >
                                Footer
                            </button>
                        </h2>
                        <div
                            id="flush-collapseTen"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingTen"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body">
                                <li>
                                    Выделяет нижний колонтитул (“подвал”) сайта
                                </li>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2
                            className="accordion-header"
                            id="flush-headingEleven"
                        >
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseEleven"
                                aria-expanded="false"
                                aria-controls="flush-collapseEleven"
                            >
                                Slider
                            </button>
                        </h2>
                        <div
                            id="flush-collapseEleven"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingEleven"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body">
                                <li>
                                    Слайдер, показывающий информацию о
                                    веб-технологиях
                                </li>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2
                            className="accordion-header"
                            id="flush-headingTwelve"
                        >
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseTwelve"
                                aria-expanded="false"
                                aria-controls="flush-collapseTwelve"
                            >
                                Loader
                            </button>
                        </h2>
                        <div
                            id="flush-collapseTwelve"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingTwelve"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body">
                                <p>
                                    Анимированная заставка, пока страница
                                    загружается
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <h5>Время затраченное на реализацию:</h5>
            <h2 className="bi bi-clock-history ">: 35 ч.</h2>
        </div>
    );
};

export default AboutProject;
