import './../../style/Content.css';
import Introduction from "./introduction/Introduction";
import Acquaintance from "./acquaintance/Acquaintance";
import image1 from "./../../img/image1.png"
import image2 from "./../../img/image2.png"
import image3 from "./../../img/image3.png"
import image4 from "./../../img/image4.png"
import services from "./../../img/vector/card-services.png"



function Content() {

    return (
        <div className="content">
            <Introduction/>
            <Acquaintance/>
            <div className="services">
                <div className="header-services">Услуги автосервиса</div>
                <div className="body-card-services">
                    <div className="card-services">
                        <img className="img-card-services" src={image1} alt=""/>
                        <div className="footer-card-services">
                            <div className="text-card-services">
                                <h3>Ремонт автомобиля</h3>
                                <p>01</p>
                            </div>
                            <div className="button-card-services">
                                <img src={services} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="card-services">
                        <img className="img-card-services" src={image2} alt=""/>
                        <div className="footer-card-services">
                            <div className="text-card-services">
                                <h3>Плановое ТО</h3>
                                <p>02</p>
                            </div>
                            <div className="button-card-services">
                                <img src={services} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="card-services">
                        <img className="img-card-services" src={image3} alt=""/>
                        <div className="footer-card-services">
                            <div className="text-card-services">
                                <h3>Диагностика и ремонт</h3>
                                <p>03</p>
                            </div>
                            <div className="button-card-services">
                                <img src={services} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="card-services">
                        <img className="img-card-services" src={image4} alt=""/>
                        <div className="footer-card-services">
                            <div className="text-card-services">
                                <h3>Чип тюнинг</h3>
                                <p>04</p>
                            </div>
                            <div className="button-card-services">
                                <img src={services} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/*<div className="1">что ты получиш</div>*/}
            {/*<div className="1">партнеры</div>*/}
            {/*<div className="1">наши акции</div>*/}
            {/*<div className="1">отзывы</div>*/}
            {/*<div className="1">карта</div>*/}
            {/*<div className="1">контакт (заявка + приложение)</div>*/}
        </div>
    );
}

export default Content;


