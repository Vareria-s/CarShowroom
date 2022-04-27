import './App.css';
import FirstMenu from "./сomponents/first-menu/FirstMenu";
import SecondMenu from "./сomponents/second-menu/SecondMenu";
import ButtonVector from "./img/button-vector.png"
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <div className="order-form-call">
                        <div className="header-form-order-call">Перезвоним в течении часа</div>
                        <form name="test" method="post" action="">
                            <input  className="form-control-one" name="user" required placeholder=""  maxlength="50">
                            </input>
                                <div className="placeholder">Ваше имя <span className="red">*</span></div>
                            <input className="form-control-two" type="tel" required placeholder="">
                            </input>
                                <div className="placeholder">Контактный телефон <span className="red">*</span></div>
                            <textarea placeholder="Комментарий" name="comment" maxlength="500" cols="40" rows="6">
                            </textarea>
                            <div className="submit-form">
                                <div className="data-processing">Нажимая кнопку «Отправить заявку» вы даете согласие на <span>Обработку персональных данных</span></div>
                                <button type="submit">Отправить заявку <img src={ButtonVector} alt=""/></button>
                            </div>
                        </form>
                    </div>
                    <div className="header">
                        <FirstMenu/>
                        {/*<SecondMenu/>*/}
                    </div>
                    <div className="content">

                    </div>
                    <div className="footer">

                    </div>
                </div>
            </BrowserRouter>
    );
}

export default App;