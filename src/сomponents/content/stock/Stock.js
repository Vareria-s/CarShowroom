import './../../../style/Content.css';
import Prew from "./../../../img/Prew.png"
import Prew1 from "./../../../img/Prew1.png"
import button from "./../../../img/vector/button-vector.png"
import CarouselCompound from "./carousel-compound/index-stock";
import {NavLink} from "react-router-dom";
import React from "react";




function Stock() {


    return (
        <div className="stock">
            <div className="header-stock">Наши акции</div>
            <div className="body-stock">
                <CarouselCompound infinite>
                    <CarouselCompound.Page>
                        <div className="one-block-stock">
                            <img src={Prew} alt=""/>
                        </div>
                        <div className="two-block-stock">
                            <h2>Дарим 1000 бонусов за шиномонтаж<br/>и хранение</h2>
                            <div className="data">11 апреля</div>
                            <NavLink to="/services">
                                <div className="body-more">
                                    <div className="button-more btn-5">
                                        <img src={button} alt=""/>
                                    </div>
                                    <p>Подробнее</p>
                                </div>
                            </NavLink>
                        </div>
                    </CarouselCompound.Page>
                    <CarouselCompound.Page>
                        <div className="one-block-stock">
                            <img src={Prew1} alt=""/>
                        </div>
                        <div className="two-block-stock">
                            <h2>Специальное <br/>
                                предложение <br/>для владельцев <br/>
                                VOLVO XC 90</h2>
                            <div className="data">18 ноября</div>
                            <NavLink to="/services">
                                <div className="body-more">
                                    <div className="button-more btn-5">
                                        <img src={button} alt=""/>
                                    </div>
                                    <p>Подробнее</p>
                                </div>
                            </NavLink>
                        </div>
                    </CarouselCompound.Page>
                </CarouselCompound>
            </div>
        </div>
    );
}

export default Stock;


