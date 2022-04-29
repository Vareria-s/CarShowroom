import '../../../style/Menu.css';
import {useContext} from "react";
import {MyContext} from "../../../App";

function FirstMenu() {
    const {state, dispatch} = useContext(MyContext);

    return (
            <div className="body-first-menu">
                <div className="logo">
                    <div className="logo-picture">

                    </div>
                    <div className="title">

                    </div>
                </div>
                <div className="menu-blocks">
                    <ul className="nav">
                        <li className="item-active">Услуги
                            <div className="arrow">
                            </div>
                            <ul className="dropdown-menu">
                                <li >Ремонт автомобиля</li>
                                <li>Плановое ТО</li>
                                <li>Диагностика и ремонт</li>
                                <li>Чип тюнинг</li>
                            </ul>
                        </li>
                        <li className="item">О компании</li>
                        <li className="item">Гарантии</li>
                        <li className="item">Новости</li>
                        <li className="item">Акции</li>
                        <li className="item">Контакты</li>
                    </ul>
                </div>
                <div className="burger-menu-icon">
                    <input id="menu__toggle" type="checkbox" defaultChecked={state.burgerMenuWork} onClick={()=>dispatch({type: 'BURGER_MENU_WORK',})}/>
                    <label className="menu__btn" htmlFor="menu__toggle">
                        <span>
                        </span>
                    </label>
                </div>
                <span className="sign-up-for-service-icon" onClick={()=>dispatch({type: 'FORM_CALL',})}>
                    <div className="record-button-text" >Запись на сервис</div>
                </span>
            </div>
    );
}

export default FirstMenu;