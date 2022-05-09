import '../../../style/Content.css';
import information from "../../../img/vector/vector-information.png"
import CarouselCompound from './carousel-compound/index-compound'
import Images from './../../../img/Image.png'
import Images1 from './../../../img/Images-1.png'
import Images2 from './../../../img/Image-2.png'

function Introduction() {

    return (
        <div className="introduction">
            <div className="entry-information">
                <div className="header-entry-information">Специализированный Автосервис</div>
                <div className="phone-entry-information"><a href="tel:+79991234567">+7 (999) 123-45-67</a></div>
                <div className="address-entry-information">
                    <h3>Работаем для вас: </h3>
                    <p>Ежедневно с 9:00 до 21:00</p>
                </div>
                <div className="address-entry-information">
                    <h3>По адресу: </h3>
                    <p>Екатеринбург, ул. Московский тракт 7 км, 2</p>
                </div>
                <a className="new-button-information" href="#services">
                    <div className="button-information btn-1">
                        <p>Смотреть услуги</p>
                        <img src={information} alt=""/>
                    </div>
                </a>
            </div>
            <div className="entry-carousel">
                <CarouselCompound infinite>
                    <CarouselCompound.Page>
                        <img src={Images} alt=""/>
                            <div className="image-pagination-entry-carousel">
                                1/3
                            </div>
                    </CarouselCompound.Page>
                    <CarouselCompound.Page>
                        <img src={Images1} alt=""/>
                            <div className="image-pagination-entry-carousel">
                                2/3
                            </div>
                    </CarouselCompound.Page>
                    <CarouselCompound.Page>
                        <img src={Images2} alt=""/>
                            <div className="image-pagination-entry-carousel">
                                3/3
                            </div>
                    </CarouselCompound.Page>
                </CarouselCompound>
            </div>
        </div>
    );
}

export default Introduction;


