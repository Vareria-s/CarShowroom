import './../../../style/Content.css';
import image from "./../../../img/Image.png"
import services from "./../../../img/vector/card-services.png"
import map from "./../../../img/vector/map.png"
import map_body from "./../../../img/body-map.png"
import plus from "../../../img/vector/plus.png";
import minus from "../../../img/vector/minus.png";
import {Map, Placemark, YMaps} from "react-yandex-maps";

const mapData = {
    center: [56.815690, 60.524639],
    zoom: 17,
    controls: ['zoomControl']
};
const optionData={
    iconLayout: 'default#image',
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
                            Телефон: +7 (999) 123-45-67</p>
                        <p>Cервис: <span>service@example.ru</span><br/>
                            Отдел запасных частей: <span>parts@example.ru</span></p>
                        <div className="button-footer-one-block-address-map">
                            <p>Построить маршрут</p>
                            <img src={services} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="two-block-address-map">

                    <div className="ymap-two-block-address-map">
                        <YMaps>
                            <Map width='100%' height='600px' defaultState={mapData} modules={modules}>
                                {coordinates.map(coordinates => <Placemark geometry={coordinates} options={optionData}/>)}
                            </Map>
                        </YMaps>
                    </div>

                    <div className="button-two-block-address-map">
                        <img src={map} alt=""/>
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


