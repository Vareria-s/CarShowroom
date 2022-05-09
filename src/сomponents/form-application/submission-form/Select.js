import  '../../../style/Select.css';
import React from "react";




function Select() {

    return (
        <div className="new-select">
            <div className="custom-select">
                <div className="radios">
                    <input type="radio" />
                    <input type="radio" name="item" id="item1" title="Volvo"/>
                    <input type="radio" name="item" id="item2" title="BMW"/>
                    <input type="radio" name="item" id="item3" title="AUDI"/>
                    <input type="radio" name="item" id="item4" title="Volkswagen"/>
                    <input type="radio" name="item" id="item5" title="Skoda"/>
                    <input type="radio" name="item" id="item6" title="Другой"/>
                    <span className="bar"></span>
                    <label>Марка автомобиля <span>*</span></label>
                </div>
                <div className="body-list">
                    <ul className="list">
                        <li><label htmlFor="item1">Volvo</label></li>
                        <li><label htmlFor="item2">BMW</label></li>
                        <li><label htmlFor="item3">AUDI</label></li>
                        <li><label htmlFor="item4">Volkswagen</label></li>
                        <li><label htmlFor="item5">Skoda</label></li>
                        <li><label htmlFor="item6">Другой</label></li>
                    </ul>
                </div>
            </div>


        </div>
    );
}

export default Select;


