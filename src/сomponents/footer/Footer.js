import './../../style/Footer.css';
import vk from "../../img/vector/vk-white.png";
import instagram from "../../img/vector/instagram-white.png";
import twitter from "../../img/vector/twitter-white.png";
import youtube from "../../img/vector/youtube-white.png";
import personal from "../../img/vector/personal.png";

function Content() {


    return (
        <div className="footer">
            <div className="one-block-footer">
                <div className="contact-one-block-footer">
                    <div className="email-footer">info@example.ru</div>
                    <div className="opening-hours-footer">Работаем для вас: <br/>
                        Ежедневно с 9:00 до 21:00</div>
                    <div className="button-back-call">
                        <p>Оставить заявку</p>
                    </div>
                    <div className="button-quality-control">
                        <p>Контроль качества</p>
                    </div>
                    <div className="social-media-footer">
                        <a href=""><img src={vk} alt=""/></a>
                        <a href=""><img src={instagram} alt=""/></a>
                        <a href=""><img src={twitter} alt=""/></a>
                        <a href=""><img src={youtube} alt=""/></a>
                    </div>
                </div>
                <div className="informational-one-block-footer">
                    <div className="header-block-footer">
                        <div className="menu-header-block-footer">
                            <ul>
                                <li>О компании</li>
                                <li>Гарантии</li>
                                <li>Новости</li>
                                <li>Акции</li>
                                <li>Контакты</li>
                            </ul>
                        </div>
                        <div className="personal-area-block-footer">
                            <p>Личный кабинет</p>
                            <img src={personal} alt=""/>
                        </div>
                    </div>
                    <div className="three-block-footer">
                        <div className="auto-centers-block-footer">
                            <h3>Автоцентры</h3>
                            <ul>
                                <li>Автосервис VOLVO</li>
                                <li>Автосервис Land Rover</li>
                                <li>Автосервис VAG</li>
                                <li>Автосервис BMW</li>
                                <li>Автосервис Mercedes</li>
                                <li>Автосервис Mercedes</li>
                            </ul>
                            <div className="address-auto-centers-block-footer">
                                <h4>Адрес автоцентра:Адрес автоцентра:</h4>
                                <p>Екатеринбург, ул. Московский тракт 7 км, 2<br/>
                                    +7 (999) 123-45-67</p>
                            </div>
                        </div>
                        <div className="services-block-footer">
                            <h3>Услуги</h3>
                            <ul>
                                <li>Ремонт автомобиля</li>
                                <li>Плановое ТО</li>
                                <li>Диагностика</li>
                                <li>Кузовной ремонт и детейлинг</li>
                                <li>Чип тюнинг</li>
                            </ul>
                            <div className="address-services-block-footer">
                                <h4>Центр кузовного ремонта:</h4>
                                <p>Екатеринбург, ул. Московский тракт 7 км, 2<br/>
                                    +7 (999) 123-45-67</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="two-block-footer">
                <p>© 2022 Специализированный автоцентр</p>
                <p>Дизайн и разработка - <span>Media Army</span></p>
            </div>
        </div>
    );
}

export default Content;


