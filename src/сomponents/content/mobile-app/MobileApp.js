import './../../../style/Content.css';
import iphone from "./../../../img/iphone.png"
import check from "./../../../img/vector/check.png"
import app from "./../../../img/app.png"
import google from "./../../../img/google.png"

function MobileApp() {


    return (
        <div className="mobile-app">
            <div className="body-mobile-app">
                <img src={iphone} alt="" className="iphone-mobile-app"/>
                <div className="text-mobile-app">
                    <h3>Скачивайте наше мобильное приложение</h3>
                    <ul>
                        <li><img src={check} alt=""/>записаться на ремонт</li>
                        <li><img src={check} alt=""/>просмотреть историю обслуживания</li>
                        <li><img src={check} alt=""/>Получать постоянные акции и бонусы</li>
                    </ul>
                </div>
                <div className="button-app-store">
                    <img src={app} alt=""/>
                </div>
                <div className="button-google-play">
                    <img src={google} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default MobileApp;


