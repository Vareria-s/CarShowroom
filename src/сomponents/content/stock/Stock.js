import './../../../style/Content.css';
import Prew from "./../../../img/Prew.png"
import button from "./../../../img/vector/button-vector.png"
import back from "./../../../img/vector/back-button.png"
import forward from "./../../../img/vector/forward-button.png"


function Stock() {


    return (
        <div className="stock">
            <div className="header-stock">Наши акции</div>
            <div className="body-stock">
                <div className="one-block-stock">
                    <img src={Prew} alt=""/>
                </div>
                <div className="two-block-stock">
                    <h2>Дарим 1000 бонусов за шиномонтаж<br></br>и хранение</h2>
                    <div className="data">11 апреля</div>
                    <div className="body-more">
                        <div className="button-more">
                            <img src={button} alt=""/>
                        </div>
                        <p>Подробнее</p>
                    </div>
                    <div className="back-and-forward">
                        <div className="back-button-stock">
                            <img src={back} alt=""/>
                        </div>
                        <div className="forward-button-stock">
                            <img src={forward} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stock;


