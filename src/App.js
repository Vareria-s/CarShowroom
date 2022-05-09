import './style/App.css';
import './style/Animation.css'
import FirstMenu from "./сomponents/menu/first-menu/FirstMenu";
import SecondMenu from "./сomponents/menu/second-menu/SecondMenu";
import Content from "./сomponents/content/Content";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PersonList from "./сomponents/form-call/PersonList";
import {createContext, useReducer} from "react";
import Footer from "./сomponents/footer/Footer";
import PersonListApplication from "./сomponents/form-application/PersonListApplication";
import Services from "./сomponents/content/services/Services";



export const MyContext= createContext();

export const initialState= {
    burgerMenuWork: false,
    formCall: true,
    formApplication: true
}
export const BURGER_MENU_WORK = 'BURGER_MENU_WORK';
export const FORM_CALL = 'FORM_CALL';
export const CLOSED_FORM_CALL = 'CLOSED_FORM_CALL';
export const FORM_APPLICATION = 'FORM_APPLICATION';
export const CLOSED_FORM_APPLICATION = 'CLOSED_FORM_APPLICATION';


function App() {


    const menuReducer = (state, action) => {
        switch (action.type) {
            case BURGER_MENU_WORK:
                return {...state, burgerMenuWork: !state.burgerMenuWork};
            case FORM_CALL:
                return {...state, formCall: false};
            case CLOSED_FORM_CALL:
                return {...state, formCall: !state.formCall};
            case FORM_APPLICATION:
                return {...state, formApplication: false};
            case CLOSED_FORM_APPLICATION:
                return {...state, formApplication: !state.formApplication};
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
                    <PersonListApplication/>
                    <div className="header">
                        <FirstMenu/>
                        <SecondMenu/>
                    </div>
                    <Routes>
                        <Route path="/" element={<Content />}/>
                        <Route path="/services" element={<Services />}/>
                    </Routes>
                    <Footer/>
                </div>
            </BrowserRouter>
        </MyContext.Provider>
    );
}

export default App;


