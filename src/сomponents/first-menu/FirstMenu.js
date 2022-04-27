import './../../App.css';

function FirstMenu() {
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
                        </li>
                        <li className="item">О компании</li>
                        <li className="item">Гарантии</li>
                        <li className="item">Новости</li>
                        <li className="item">Акции</li>
                        <li className="item">Контакты</li>
                    </ul>
                </div>
                <div className="burger-menu-icon">
                    <input id="menu__toggle" type="checkbox" />
                    <label className="menu__btn" htmlFor="menu__toggle">
                                        <span>
                                        </span>
                    </label>
                </div>
                <div className="sign-up-for-service-icon">
                    <div className="record-button-text">Запись на сервис</div>
                </div>
            </div>
    );
}

export default FirstMenu;