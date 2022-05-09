import './../../../style/Content.css';
import services from "./../../../img/vector/card-services.png";
import {useContext} from "react";
import {MyContext} from "../../../App";


function Application() {
    const {dispatch} = useContext(MyContext);

    return (
        <div className="application">
            <div className="body-application">
                <div className="block-application">
                    <p className="text-block-application">Получить консультацию</p>
                    <div className="two-block-application">
                        <p className="text-two-block-application">Оставьте заявку, и наш мастер перезвонит вам, <br/>
                            произведет предварительную оценку стоимости <br/>
                            услуг и запчастей, и подберет удобное время для<br/>
                            визита.</p>
                        <div className="button-two-block-application btn-11" onClick={()=>dispatch({type: 'FORM_CALL',})}>
                            <p>Оставить заявку</p>
                            <img src={services} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Application;


