import './style/App.css';
import FirstMenu from "./сomponents/menu/first-menu/FirstMenu";
import SecondMenu from "./сomponents/menu/second-menu/SecondMenu";
import Content from "./сomponents/content/Content";
import {BrowserRouter} from "react-router-dom";
import PersonList from "./сomponents/form-call/PersonList";
import {createContext, useReducer} from "react";
import Footer from "./сomponents/footer/Footer";

export const MyContext= createContext();



export const initialState= {
    burgerMenuWork: false,
    formCall: true
}
export const BURGER_MENU_WORK = 'BURGER_MENU_WORK';
export const FORM_CALL = 'FORM_CALL';
export const CLOSED_FORM_CALL = 'CLOSED_FORM_CALL';

function App() {


    const menuReducer = (state, action) => {
        switch (action.type) {
            case BURGER_MENU_WORK:
                return {...state, burgerMenuWork: !state.burgerMenuWork};
            case FORM_CALL:
                return {...state, formCall: false};
            case CLOSED_FORM_CALL:
                return {...state, formCall: !state.formCall};
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(menuReducer, initialState);

    return (
        <MyContext.Provider value={{state, dispatch}}>
            <BrowserRouter>
                <div className="app-wrapper">
                    <PersonList/>
                    <div className="header">
                        <FirstMenu/>
                        <SecondMenu/>
                    </div>
                    <Content/>
                    <Footer/>
                    <Carousel/>
                </div>
            </BrowserRouter>
        </MyContext.Provider>
    );
}

export default App;


