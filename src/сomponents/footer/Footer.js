import './../../style/Footer.css';
import vk from "../../img/vector/vk-white.png";
import instagram from "../../img/vector/instagram-white.png";
import twitter from "../../img/vector/twitter-white.png";
import youtube from "../../img/vector/youtube-white.png";
import personal from "../../img/vector/personal.png";
import {NavLink} from "react-router-dom";
import React, {useContext} from "react";
import {MyContext} from "../../App";

function Content() {
    const {state, dispatch} = useContext(MyContext);

    return (
        <div className="footer">
            <div className="one-block-footer">
                <div className="contact-one-block-footer">
                    <div className="email-footer"><a href="mailto:info@example.ru">info@example.ru</a></div>
                    <div className="opening-hours-footer">Работаем для вас: <br/>
                        Ежедневно с 9:00 до 21:00</div>
                    <div className="button-back-call btn-12" onClick={()=>dispatch({type: 'CLOSED_FORM_CALL'})}>
                        <p>Оставить заявку</p>
                    </div>
                    <NavLink to="/services">
                        <div className="button-quality-control btn-13">
                            <p>Контроль качества</p>
                        </div>
                    </NavLink>
                    <div className="social-media-footer">
                        <a href="https://vk.com/"><img src={vk} alt=""/></a>
                        <a href="https://www.instagram.com/"><img src={instagram} alt=""/></a>
                        <a href="https://twitter.com/"><img src={twitter} alt=""/></a>
                        <a href="https://www.youtube.com/?hl=RU"><img src={youtube} alt=""/></a>
                    </div>
                </div>
                <div className="informational-one-block-footer">
                    <div className="header-block-footer">
                        <div className="menu-header-block-footer">
                            <ul>
                                <NavLink to="/services"><li>О компании</li></NavLink>
                                <NavLink to="/services"><li>Гарантии</li></NavLink>
                                <NavLink to="/services"><li>Новости</li></NavLink>
                                <NavLink to="/services"><li>Акции</li></NavLink>
                                <NavLink to="/services"><li>Контакты</li></NavLink>
                            </ul>
                        </div>
                        <NavLink to="/services">
                            <div className="personal-area-block-footer">
                                <p>Личный кабинет</p>
                                <img src={personal} alt=""/>
                            </div>
                        </NavLink>
                    </div>
                    <div className="three-block-footer">
                        <div className="auto-centers-block-footer">
                            <h3>Автоцентры</h3>
                            <ul>
                                <NavLink to="/services"><li>Автосервис VOLVO</li></NavLink>
                                <NavLink to="/services"><li>Автосервис Land Rover</li></NavLink>
                                <NavLink to="/services"><li>Автосервис VAG</li></NavLink>
                                <NavLink to="/services"><li>Автосервис BMW</li></NavLink>
                                <NavLink to="/services"><li>Автосервис Mercedes</li></NavLink>
                                <NavLink to="/services"><li>Автосервис Mercedes</li></NavLink>
                            </ul>
                            <div className="address-auto-centers-block-footer">
                                <h4>Адрес автоцентра:Адрес автоцентра:</h4>
                                <p>Екатеринбург, ул. Московский тракт 7 км, 2<br/>
                                    <a href="tel:+79991234567">+7 (999) 123-45-67</a></p>
                            </div>
                        </div>
                        <div className="services-block-footer">
                            <h3>Услуги</h3>
                            <ul>
                                <NavLink to="/services"><li>Ремонт автомобиля</li></NavLink>
                                <NavLink to="/services"><li>Плановое ТО</li></NavLink>
                                <NavLink to="/services"><li>Диагностика</li></NavLink>
                                <NavLink to="/services"><li>Кузовной ремонт и детейлинг</li></NavLink>
                                <NavLink to="/services"><li>Чип тюнинг</li></NavLink>
                            </ul>
                            <div className="address-services-block-footer">
                                <h4>Центр кузовного ремонта:</h4>
                                <p>Екатеринбург, ул. Московский тракт 7 км, 2<br/>
                                    <a href="tel:+79991234567">+7 (999) 123-45-67</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="two-block-footer">
                <p>© 2022 Специализированный автоцентр</p>
                <p>Дизайн и разработка - <span><a href="">Media Army</a></span></p>
            </div>
        </div>
    );
}

export default Content;


