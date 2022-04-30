import './../../../style/Content.css';
import Audi from "./../../../img/partners/Audi.png"
import BMW from "./../../../img/partners/BMW.png"
import Land from "./../../../img/partners/Land-Rover.png"
import Mercedes from "./../../../img/partners/Mercedes.png"
import Porsche from "./../../../img/partners/Porsche.png"
import Volvo from "./../../../img/partners/Volvo.png"


function Partners() {


    return (
        <div className="partners">
            <div className="header-partners">Обслуживаем и ремонтируем</div>
            <div className="body-partners">
                <img src={Volvo} alt="" className="logos-partners"/>
                <img src={Land} alt="" className="logos-partners"/>
                <img src={Mercedes} alt="" className="logos-partners"/>
                <img src={BMW} alt="" className="logos-partners"/>
                <img src={Porsche} alt="" className="logos-partners"/>
                <img src={Audi} alt="" className="logos-partners"/>
            </div>
        </div>
    );
}

export default Partners;


