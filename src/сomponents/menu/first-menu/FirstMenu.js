import '../../../style/Menu.css';
import {useContext} from "react";
import {MyContext} from "../../../App";
import {NavLink} from "react-router-dom";

const dropdownMenu = [ {id: 1, text:'Ремонт автомобиля', href:'/services'},
    {id: 2, text:'Плановое ТО', href:'/'},
    {id: 3, text:'Диагностика и ремонт', href:'/services'},
    {id: 4, text:'Чип тюнинг', href:'/'}
];
const menu = [ {id: 1, text:'О компании', href:'/services'},
    {id: 2, text:'Гарантии', href:'/'},
    {id: 3, text:'Новости', href:'/services'},
    {id: 4, text:'Акции', href:'/'},
    {id: 5, text:'Контакты', href:'/services'}
];


function FirstMenu() {
    const {state, dispatch} = useContext(MyContext);


    return (
            <div className="body-first-menu">
                <NavLink to="/" ><div className="logo">
                    <div className="logo-picture">
                    </div>
                    <div className="title">
                    </div>
                </div>
                </NavLink>
                <div className="menu-blocks">
                    <ul className="nav">
                        <li className="item-active"><p>Услуги</p>
                            <div className="arrow">
                            </div>
                            <ul className="dropdown-menu">
                                {dropdownMenu.map((number) =>
                                    <NavLink to={number.href}>
                                        <li key={number.id}>{number.text}</li>
                                    </NavLink>
                                )}
                            </ul>
                        </li>
                        {menu.map((menus) =>
                            <NavLink to={menus.href}>
                                <li className="item" key={menus.id}>{menus.text}</li>
                            </NavLink>
                        )}
                    </ul>
                </div>
                <div className="burger-menu-icon">
                    <input id="menu__toggle" type="checkbox" defaultChecked={state.burgerMenuWork} onClick={()=>dispatch({type: 'BURGER_MENU_WORK',})}/>
                    <label className="menu__btn" htmlFor="menu__toggle">
                        <span>
                        </span>
                    </label>
                </div>
                <span className="sign-up-for-service-icon" onClick={()=>dispatch({type: 'FORM_APPLICATION',})}>
                    <div className="record-button-text" >Запись на сервис</div>
                </span>
            </div>
    );
}

export default FirstMenu;