import '../../../style/Menu.css';
import vk from "../../../img/vk.png"
import instagram from "../../../img/instagram.png"
import twitter from "../../../img/twitter.png"
import youtube from "../../../img/youtube.png"
import personal from "../../../img/personal-area.png"
import {useContext} from "react";
import {MyContext} from "../../../App";

function SecondMenu() {
    const {state} = useContext(MyContext);

    return (
        <div className={state.burgerMenuWork ? "closed-second-menu" : "second-menu"}>
            <div className="first-block">
                <div className="contact-information">
                    <div className="telephone">+7 (999) 123-45-67</div>
                    <div className="e-mail">info@example.ru</div>
                    <div className="opening-hours">
                        Работаем для вас:<br>
                    </br>Ежедневно с 9:00 до 21:00</div>
                </div>
                <div className="addresses">
                    <div className="body-addresses">
                        <div className="header-addresses">Адрес автоцентра: </div>
                        <div className="text-addresses">Екатеринбург, ул. Московский тракт 7 км, 2<br></br>+7 (999) 123-45-67</div>
                    </div>
                    <div className="body-addresses">
                        <div className="header-addresses">Центр кузовного ремонта:</div>
                        <div className="text-addresses">Екатеринбург, ул. Московский тракт 7 км, 2<br></br>+7 (999) 123-45-67</div>
                    </div>
                </div>
                <div className="social-media">
                    <a href=""><img src={vk} alt=""/></a>
                    <a href=""><img src={instagram} alt=""/></a>
                    <a href=""><img src={twitter} alt=""/></a>
                    <a href=""><img src={youtube} alt=""/></a>
                </div>
            </div>
            <div className="second-block">
                <div className="auto-centers">
                    <div className="header-auto-centers">Автоцентры</div>
                    <ul className="list-auto-centers">
                        <li className="item">Автосервис VOLVO</li>
                        <li className="item">Автосервис Land Rover</li>
                        <li className="item">Автосервис VAG</li>
                        <li className="item">Автосервис BMW</li>
                        <li className="item">Автосервис Mercedes</li>
                        <li className="item">Кузовной ремонт и детейлинг</li>
                    </ul>
                </div>
                <div className="personal-area">Личный кабинет <img src={personal} alt=""/></div>
                <div className="confidentiality">Условия конфиденциальности</div>
            </div>
        </div>
    );
}

export default SecondMenu;