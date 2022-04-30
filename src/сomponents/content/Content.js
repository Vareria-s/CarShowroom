import './../../style/Content.css';
import Introduction from "./introduction/Introduction";
import Acquaintance from "./acquaintance/Acquaintance";
import Services from "./services/Services";
import Comfort from "./comfort/Comfort";
import Partners from "./partners/Partners";
import Stock from "./stock/Stock";


function Content() {


    return (
        <div className="content">
            <Introduction/>
            <Acquaintance/>
            <Services/>
            <Comfort/>
            <Partners/>
            <Stock/>
            {/*<div className="1">отзывы</div>*/}
            {/*<div className="1">карта</div>*/}
            {/*<div className="1">контакт (заявка + приложение)</div>*/}
        </div>
    );
}

export default Content;


