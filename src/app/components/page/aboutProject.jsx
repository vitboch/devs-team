import React from "react";

const AboutProject = () => {
    return (
        <div className="py-5 container p-3">
            <div>
                <h1 className="fw-light text-center mb-4">О проекте</h1>
                <p>Перед нами стояла задача разработать классный сайт на React, который будет презентовать нашу команду,
                    и креативно рассказать о команде в целом и о каждом участнике отдельно.</p>
            </div>
            <div>
                <h1 className="fw-light text-center mb-4">Мы реализовали:</h1>
            </div>
            <div>
                <h3 className="mt-3">Страницы:</h3>
                <hr/>
                <div className="accordion accordion-flush" id="accordionFlushExample1">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-heading">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapse1" aria-expanded="false"
                                    aria-controls="flush-collapse">
                                Главная
                            </button>
                        </h2>
                        <div id="flush-collapse1" className="accordion-collapse collapse"
                             aria-labelledby="flush-heading" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <ul>
                                    <li>Отображается слайдер показывающий информацию о веб-технологиях</li>
                                    <li>Отображается информацию о команде</li>
                                    <li>Представлен каждый участник команды</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                    aria-controls="flush-collapseTwo">
                                Страница участника
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse"
                             aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <ul>
                                    <li>Отображется информаця о человеке</li>
                                    <ul>
                                        <li>Имя, фамилия</li>
                                        <li>Возраст</li>
                                        <li>О себе</li>
                                        <li>Фото</li>
                                        <li>Социальные сети</li>
                                        <li>Чем занимался в разработке данного проекта</li>
                                    </ul>
                                    <li>Использовались общие компоненты</li>
                                    <ul>
                                        <li className="fw-bold m-0">Progress</li>
                                        <p>Указывает какие технологии знает человек и на сколько процентов</p>
                                        <li className="fw-bold m-0">Badge</li>
                                        <p>Отображает роль человека в комманде</p>
                                        <li className="fw-bold m-0">Button</li>
                                        <p>Дает возможность перейти на страницу пользователя и добавления в закладки</p>
                                    </ul>
                                    <li>Реализованна возможность добавления в избранное.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseThree" aria-expanded="false"
                                    aria-controls="flush-collapseThree">
                                Избранные
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse"
                             aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <ul>
                                    <li>Отображает избранных участников из localStorage</li>
                                    <li>Возможность удаления участников из избранного</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <h3 className="mt-5">Компоненты:</h3>
                </div>
                <hr/>
                <div className="accordion accordion-flush" id="accordionFlushExample2">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseFour" aria-expanded="false"
                                    aria-controls="flush-collapseFour">
                                Progress
                            </button>
                        </h2>
                        <div id="flush-collapseFour" className="accordion-collapse collapse"
                             aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <p className="fw-bold">Компонент принимает:</p>
                                <ul>
                                    <li>Процент, на который будет заполнена шкала</li>
                                    <li>Название шкалы</li>
                                    <li>Цвет</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFive">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseFive" aria-expanded="false"
                                    aria-controls="flush-collapseFive">
                                Button
                            </button>
                        </h2>
                        <div id="flush-collapseFive" className="accordion-collapse collapse"
                             aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <p className="fw-bold">Компонент принимает:</p>
                                <ul>
                                    <li>Цвет</li>
                                    <li>Функцию, при клике</li>
                                    <li>Название кнопки</li>
                                    <li>Тип (скругленные углы или квадратные)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingSix">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseSix" aria-expanded="false"
                                    aria-controls="flush-collapseSix">
                                Карточка человека
                            </button>
                        </h2>
                        <div id="flush-collapseSix" className="accordion-collapse collapse"
                             aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <p className="fw-bold">Отображает:</p>
                                <ul>
                                    <li>Имя, фамилия</li>
                                    <li>Возраст</li>
                                    <li>Фотография</li>
                                    <li>Краткую информацию о человеке</li>
                                    <li>Кнопка &quot;открыть&quot;</li>
                                    <li>Кнопка &quot;добавить в избранное&quot;</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingSeven">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseSeven" aria-expanded="false"
                                    aria-controls="flush-collapseSeven">
                                Breadcrumbs
                            </button>
                        </h2>
                        <div id="flush-collapseSeven" className="accordion-collapse collapse"
                             aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <li>Хлебные крошки до текущей страницы</li>
                                <p className="fw-lighter">Home / Library / Data</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingEight">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseEight" aria-expanded="false"
                                    aria-controls="flush-collapseEight">
                                Badge
                            </button>
                        </h2>
                        <div id="flush-collapseEight" className="accordion-collapse collapse"
                             aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <p className="fw-bold">Компонент принимает:</p>
                                <ul>
                                    <li>Цвет</li>
                                    <li>Контент</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingNine">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseNine" aria-expanded="false"
                                    aria-controls="flush-collapseNine">
                                Navbar
                            </button>
                        </h2>
                        <div id="flush-collapseNine" className="accordion-collapse collapse"
                             aria-labelledby="flush-headingNine" data-bs-parent="#accordionFlushExample3">
                            <div className="accordion-body">
                                <li>Навигационное меню со всеми страницами сайта</li>
                            </div>
                        </div>
                    </div>
                    <h3 className="mt-5">Дополнительно реализовано:</h3>
                    <hr/>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTen">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseTen" aria-expanded="false"
                                    aria-controls="flush-collapseTen">
                                Footer
                            </button>
                        </h2>
                        <div id="flush-collapseTen" className="accordion-collapse collapse"
                             aria-labelledby="flush-headingTen" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <li>Выделяет нижний колонтитул (“подвал”) веб-сайта</li>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingEleven">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseEleven" aria-expanded="false"
                                    aria-controls="flush-collapseEleven">
                                Slider
                            </button>
                        </h2>
                        <div id="flush-collapseEleven" className="accordion-collapse collapse"
                             aria-labelledby="flush-headingEleven" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <li>Слайдер показывающий информацию о веб-технологиях</li>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwelve">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseTwelve" aria-expanded="false"
                                    aria-controls="flush-collapseTwelve">
                                Loader
                            </button>
                        </h2>
                        <div id="flush-collapseTwelve" className="accordion-collapse collapse"
                             aria-labelledby="flush-headingTwelve" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <li>Отображается пока страница загружается</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
                <h5>Время затраченное на реализацию:</h5>
                <h2 className="bi bi-clock-history ">: 35 ч.</h2>
        </div>
    );
};

export default AboutProject;
