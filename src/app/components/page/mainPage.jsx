import React from "react";
import { useDeveloper } from "../../hooks/useDevelopers";
// import devs from "../../api/devs.api";
import Card from "../common/card";
import Slider from "../ui/slider";

const MainPage = () => {
    const { developers, isLoading } = useDeveloper();
    return (
        <>
            <div className="fw-light text-center mb-4">
                <Slider />
            </div>
            <main>
                <section className="py-5 container p-3">
                    <div className="row py-lg-5">
                        <div className="col-lg-5 col-md-10 mx-auto">
                            <h1 className="fw-light text-center mb-4">О нас</h1>
                            <p className="lead text-muted">
                                Мы – команда React-разработчиков.
                            </p>
                            <p className="lead text-muted">
                                Мы креативны, амбициозны, энергичны.
                            </p>
                            <p className="lead text-muted">
                                Наши приоритеты – качество и исполнительность.
                            </p>
                            <p className="lead text-muted">
                                Мы любим то, что мы делаем, и делаем это хорошо.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="pt-5 pb-3 text-center container">
                    <div className="col-lg-12 col-md-8 mx-auto">
                        <h1 className="fw-light">Наша команда</h1>
                    </div>
                </section>
                <div className="album py-5 bg-light p-3">
                    <div className="container">
                        <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-5">
                            {!isLoading
                                ? developers.map((dev) => (
                                      <Card key={dev._id} {...dev} />
                                  ))
                                : "Loader..."}
                        </div>
                    </div>
                </div>
                <section className="py-5 container p-3">
                    <div className="row py-lg-5">
                        <div className="col-lg-10 col-md-10 mx-auto">
                            <p className="fs-5 w-bold fst-italic text-end">
                                С наилучшими пожеланиями, команда
                                React-разработчиков!
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default MainPage;
