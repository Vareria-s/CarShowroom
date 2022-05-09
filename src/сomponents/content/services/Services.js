import './../../../style/Content.css';
import image1 from "./../../../img/image1.png"
import image2 from "./../../../img/image2.png"
import image3 from "./../../../img/image3.png"
import image4 from "./../../../img/image4.png"
import {NavLink} from "react-router-dom";
import React from "react";



function Services() {

    return (
        <div className="services" id="services">
            <div className="header-services">Услуги автосервиса</div>
            <div className="body-card-services">
                <div className="card-services">
                    <img className="img-card-services" src={image1} alt=""/>
                    <NavLink to="/services">
                        <div className="footer-card-services btn-4">
                            <div className="text-card-services">
                                <h3>Ремонт автомобиля</h3>
                                <p>01</p>
                            </div>
                            <div className="button-card-services">
                                <div className="img-button-card-services"></div>
                            </div>
                        </div>
                    </NavLink>
                </div>
                <div className="card-services">
                    <img className="img-card-services" src={image2} alt=""/>
                    <NavLink to="/services">
                        <div className="footer-card-services btn-4">
                            <div className="text-card-services">
                                <h3>Плановое ТО</h3>
                                <p>02</p>
                            </div>
                            <div className="button-card-services">
                                <div className="img-button-card-services"></div>
                            </div>
                        </div>
                    </NavLink>
                </div>
                <div className="card-services">
                    <img className="img-card-services" src={image3} alt=""/>
                    <NavLink to="/services">
                        <div className="footer-card-services btn-4">
                            <div className="text-card-services">
                                <h3>Диагностика и ремонт</h3>
                                <p>03</p>
                            </div>
                            <div className="button-card-services">
                                <div className="img-button-card-services"></div>
                            </div>
                        </div>
                    </NavLink>
                </div>
                <div className="card-services">
                    <img className="img-card-services" src={image4} alt=""/>
                    <NavLink to="/services">
                        <div className="footer-card-services btn-4">
                            <div className="text-card-services">
                                <h3>Чип тюнинг</h3>
                                <p>04</p>
                            </div>
                            <div className="button-card-services">
                                <div className="img-button-card-services"></div>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Services;


