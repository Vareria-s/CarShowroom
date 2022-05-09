import './../../../style/Content.css';
import image from "./../../../img/Image.png"
import services from "./../../../img/vector/card-services.png"
import map from "./../../../img/vector/map.png"
import plus from "../../../img/vector/plus.png";
import minus from "../../../img/vector/minus.png";
import {Map, Placemark, YMaps} from "react-yandex-maps";
import myIcon from "../../../img/vector/map.png";
import {NavLink} from "react-router-dom";
import React from "react";

const mapData = {
    center: [56.815690, 60.524639],
    zoom: 17,
    behaviors: ['drag', 'multiTouch'],
    controls: ['zoomControl']
};
const optionData={
    iconLayout: 'default#image',
    iconImageHref: myIcon,
    iconImageSize: [80, 80],
}
const modules = [
    ['control.ZoomControl']
]
const coordinates = [
    [56.815690, 60.524639]
];


function AddressMap() {
    return (
        <div className="address-map">
            <div className="body-address-map">
                <div className="one-block-address-map">
                    <img className="img-one-block-address-map" src={image} alt=""/>
                    <div className="footer-one-block-address-map">
                        <p>Екатеринбург, Московский тракт 7 км, 2
                            Телефон: <a href="tel:+79991234567">+7 (999) 123-45-67</a></p>
                        <p>Cервис: <span><a href="mailto:service@example.ru">service@example.ru</a></span><br/>
                            Отдел запасных частей: <span><a href="mailto:parts@example.ru">parts@example.ru</a></span></p>
                        <a href="https://yandex.ru/maps/54/yekaterinburg/?ll=60.515965%2C56.809656&mode=usermaps&source=constructorLink&um=constructor%3A5bcc700879a9a586ad05715e2dee5f6be61be4f7c747ef4791578b71c81179b9&z=15">
                            <div className="button-footer-one-block-address-map btn-10">
                                <p>Построить маршрут</p>
                                <img src={services} alt=""/>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="two-block-address-map">

                    <div className="ymap-two-block-address-map">
                        <YMaps>
                            <Map width='100%' height='600px' defaultState={mapData} modules={modules}>
                                {coordinates.map(coordinates =>
                                    <Placemark geometry={coordinates}
                                        properties={{
                                            hintContent: 'Собственный значок метки',
                                            balloonContent: 'Это красивая метка',
                                            }}
                                        options={optionData}/>)}
                            </Map>
                        </YMaps>
                    </div>
                    <div className="plus-and-minus-address-map">
                        <div className="plus-address-map">
                            <img src={plus} alt=""/>
                        </div>
                        <div className="minus-address-map">
                            <img src={minus} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddressMap;


