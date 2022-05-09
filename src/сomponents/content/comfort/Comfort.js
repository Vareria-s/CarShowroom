import './../../../style/Content.css';
import comfort from "./../../../img/vector/comfort/comfort.png"
import comfort1 from "./../../../img/vector/comfort/comfort1.png"
import comfort2 from "./../../../img/vector/comfort/comfort2.png"
import comfort3 from "./../../../img/vector/comfort/comfort3.png"

function Comfort() {

    return (
        <div className="comfort">
            <div className="one-body-comfort">
                <h4>Обратившись к нам, в автоцентр, вы окажетесь <br></br>
                    в надёжных руках специалистов послегарантийного <br></br>
                    ремонта и технического обслуживания <br></br>
                    автомобилей.</h4>
                <p>Чтобы автомобиль всегда оставался в отличной форме,<br></br>необходимо выполнять регулярное ТО по программе<br></br>рекомендованной производителем.</p>
                <p>Подразделение нашей компании<br></br>СЕРТИФИЦИРОВАННО - это позволяет производить<br></br>обслуживание вашего автомобиля С СОХРАНЕНИЕМ<br></br>ГАРАНТИИ.</p>
            </div>
            <div className="two-body-comfort">
                <div className="card-body-comfort">
                    <img className="img-card-body-comfort" src={comfort} alt=""/>
                    <div className="text-card-body-comfort">
                        <p>Гарантия работы <br></br>1 год</p>
                    </div>
                </div>
                <div className="card-body-comfort">
                    <img className="img-card-body-comfort" src={comfort1} alt=""/>
                    <div className="text-card-body-comfort">
                        <p>Квалифицированные <br></br>сотрудники</p>
                    </div>
                </div>
                <div className="card-body-comfort">
                    <img className="img-card-body-comfort" src={comfort2} alt=""/>
                    <div className="text-card-body-comfort">
                        <p>Комфортные <br></br>зоны ожидания</p>
                    </div>
                </div>
                <div className="card-body-comfort">
                    <img className="img-card-body-comfort" src={comfort3} alt=""/>
                    <div className="text-card-body-comfort">
                        <p>Современное <br></br>оборудование</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comfort;


