import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDeveloper } from "../../hooks/useDevelopers";
import Badge from "../common/badge";
import Loader from "../common/loader";
import Progress from "../common/progress";

const DeveloperPage = () => {
    const { devId } = useParams();
    const navigate = useNavigate();
    const { getDeveloperById, isLoading } = useDeveloper();
    useEffect(() => {
        if (!isLoading) {
            if (!getDeveloperById(devId)) {
                navigate("/");
            }
        }
    }, [isLoading]);
    if (!isLoading && getDeveloperById(devId)) {
        const developer = getDeveloperById(devId);
        return (
            <div className="container mt-3">
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center position-relative">
                                    <img
                                        src={developer.photo}
                                        className="rounded shadow-1-strong me-3"
                                        alt="avatar"
                                        width="150"
                                    />
                                    <div className="mt-3">
                                        <h4>
                                            {developer.firstName +
                                                " " +
                                                developer.lastName}
                                        </h4>
                                        <p className="text-secondary mb-1">
                                            <Badge
                                                color={"danger"}
                                                name={developer.birthday}
                                            />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mt-3">
                            <ul className="list-group list-group-flush">
                                {developer.contacts.map((c) => (
                                    <li
                                        key={c.url}
                                        className="list-group-item d-flex justify-content-between align-items-center flex-wrap"
                                    >
                                        <h6 className="mb-0">{c.name}</h6>
                                        <span className="text-secondary">
                                            {c.url}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="card mt-3">
                            <div className="card-body">
                                <h3>Выполнено:</h3>
                                <br />
                                <ul className="list-group list-group-flush">
                                    {developer.completed.map((c, i) => (
                                        <li
                                            key={i}
                                            className="list-group-item d-flex justify-content-between align-items-center flex-wrap"
                                        >
                                            <h6 className="mb-0">{c}</h6>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 mb-3">
                        <div className="card mb-3">
                            <div className="card-body ">
                                <h2>Обо мне</h2>
                                <hr />
                                <p> {developer.about}</p>
                            </div>
                        </div>
                        <div className="card mb-3">
                            <div className="card-body ">
                                <h2>Технологии</h2>
                                <hr />
                                {developer.technologies.map((t, i) => (
                                    <Progress key={i} {...t} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else return <Loader />;
};

export default DeveloperPage;
