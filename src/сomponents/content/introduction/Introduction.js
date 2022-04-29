import '../../../style/Content.css';
import information from "./../../../img/vector-information.png"

function Introduction() {

    return (
        <div className="introduction">
            <div className="entry-information">
                <div className="header-entry-information">Специализированный Автосервис</div>
                <div className="phone-entry-information">+7 (999) 123-45-67</div>
                <div className="address-entry-information">
                    <h3>Работаем для вас: </h3>
                    <p>Ежедневно с 9:00 до 21:00</p>
                </div>
                <div className="address-entry-information">
                    <h3>По адресу: </h3>
                    <p>Екатеринбург, ул. Московский тракт 7 км, 2</p>
                </div>
                <div className="button-information">
                    <p>Смотреть услуги</p>
                    <img src={information} alt=""/>
                </div>
            </div>
            <div className="entry-carousel">
                <div className="img-entry-carousel">
                    <div className="button-entry-carousel">
                        <div className="back-button-entry-carousel">

                        </div>
                        <div className="forward-button-entry-carousel">

                        </div>
                    </div>
                    <div className="image-pagination-entry-carousel">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;


