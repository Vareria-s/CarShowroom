import './../../style/Content.css';
import Introduction from "./introduction/Introduction";
import Acquaintance from "./acquaintance/Acquaintance";
import Services from "./services/Services";
import Comfort from "./comfort/Comfort";
import Partners from "./partners/Partners";
import Stock from "./stock/Stock";
import Reviews from "./reviews/Reviews";
import AddressMap from "./address-map/AddressMap";
import Application from "./application/Application";
import MobileApp from "./mobile-app/MobileApp";

function Content() {


    return (
        <div className="content">
            <Introduction/>
            <Acquaintance/>
            <Services/>
            <Comfort/>
            <Partners/>
            <Stock/>
            <Reviews/>
            <AddressMap/>
            <Application/>
            <MobileApp/>
        </div>
    );
}

export default Content;


