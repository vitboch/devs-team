import React from "react";

const Slider = () => {
    return (
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                            className="active"
                            aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                            aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4"
                            aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="5000">
                        <img src="https://luxe-host.ru/wp-content/uploads/5/7/4/57431b4926e6ec2931726ca9d4e512c4.jpeg"
                             className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>HTML (HyperText Markup Language)</h5>
                            <p className="m-0">Cтандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере.</p>
                        </div>
                    </div>
                    <div className="carousel-item active" data-bs-interval="5000">
                        <img src="https://sun9-13.userapi.com/impf/c851520/v851520363/12e155/1hHUqzbS-xE.jpg?size=1280x720&quality=96&sign=ecef10666a89eb6d39b2badf1c5e90c6&type=album"
                             className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>CSS</h5>
                            <p className="m-0">Язык описания внешнего вида HTML-документа.</p>
                        </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="5000">
                        <img src="https://i09.fotocdn.net/s115/c5d34728f48f0c02/public_pin_l/2627484884.jpg"
                             className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>JavaScript</h5>
                            <p className="m-0">Это язык программирования, который используют разработчики для создания интерактивных веб-страниц.</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img src="https://i08.fotocdn.net/s113/868ffa9dc8a9ca7a/public_pin_l/2565227674.jpg"
                             className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>React</h5>
                            <p className="m-0">Это библиотека JavaScript с открытым кодом для создания внешних пользовательских интерфейсов.</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img src="https://img1.goodfon.ru/original/1280x720/6/e2/cat-mini-black.jpg"
                             className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>GitHub</h5>
                            <p className="m-0">Крупнейший веб-сервис для хостинга IT-проектов и их совместной разработки.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
    );
};

export default Slider;
