import '../../../style/Menu.css';
import vk from "../../../img/vector/vk.png"
import instagram from "../../../img/vector/instagram.png"
import twitter from "../../../img/vector/twitter.png"
import youtube from "../../../img/vector/youtube.png"
import personal from "../../../img/vector/personal-area.png"
import React, {useContext} from "react";
import {MyContext} from "../../../App";
import {NavLink} from "react-router-dom";

function SecondMenu() {
    const {state} = useContext(MyContext);

    return (
        <div className={state.burgerMenuWork ? "closed-second-menu" : "second-menu"}>
            <div className="bt-second-menu">
            </div>
            <div className="first-block">
                <div className="contact-information">
                    <div className="telephone"><a href="tel:+79991234567">+7 (999) 123-45-67</a></div>
                    <div className="e-mail"><a href="mailto:info@example.ru">info@example.ru</a></div>
                    <div className="opening-hours">
                        Работаем для вас:<br>
                    </br>Ежедневно с 9:00 до 21:00</div>
                </div>
                <div className="addresses">
                    <div className="body-addresses">
                        <div className="header-addresses">Адрес автоцентра: </div>
                        <div className="text-addresses">Екатеринбург, ул. Московский тракт 7 км, 2<br/><a href="tel:+79991234567">+7 (999) 123-45-67</a></div>
                    </div>
                    <div className="body-addresses">
                        <div className="header-addresses">Центр кузовного ремонта:</div>
                        <div className="text-addresses">Екатеринбург, ул. Московский тракт 7 км, 2<br/><a href="tel:+79991234567">+7 (999) 123-45-67</a></div>
                    </div>
                </div>
                <div className="social-media">
                    <a href="https://vk.com/"><img src={vk} alt=""/></a>
                    <a href="https://www.instagram.com/"><img src={instagram} alt=""/></a>
                    <a href="https://twitter.com/"><img src={twitter} alt=""/></a>
                    <a href="https://www.youtube.com/?hl=RU"><img src={youtube} alt=""/></a>
                </div>
            </div>
            <div className="second-block">
                <div className="auto-centers">
                    <div className="header-auto-centers">Автоцентры</div>
                    <ul className="list-auto-centers">
                        <NavLink to="/services"><li className="item">Автосервис VOLVO</li></NavLink>
                        <NavLink to="/services"><li className="item">Автосервис Land Rover</li></NavLink>
                        <NavLink to="/services"><li className="item">Автосервис VAG</li></NavLink>
                        <NavLink to="/services"><li className="item">Автосервис BMW</li></NavLink>
                        <NavLink to="/services"><li className="item">Автосервис Mercedes</li></NavLink>
                        <NavLink to="/services"><li className="item">Кузовной ремонт и детейлинг</li></NavLink>

                    </ul>
                </div>
                <div className="personal-area"><NavLink to="/services">Личный кабинет <img src={personal} alt=""/></NavLink></div>
                <div className="confidentiality"><NavLink to="/services">Условия конфиденциальности</NavLink></div>
            </div>
        </div>
    );
}

export default SecondMenu;