import React from 'react';
import axios from 'axios';
import "../../../style/Form.css"
import ButtonVector from "../../../img/button-vector.png";

export default class SubmissionForm extends React.Component{
    state = {
        name: '',
        phone: '',
    }

    handleChange = event => {
        this.setState({ name: event.target.value });
        this.setState({ phone: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            name: this.state.name,
            phone: this.state.name
        };

        axios.post(`https://jsonplaceholder.typicode.com/users`, {user})
            .then(function (response) {
                console.log("окей");
            })
            .catch(function (error) {
                console.log(error);
            });
    }

        render() {
            return (
                <form onSubmit={this.handleSubmit}>
                    <input className="form-control-one" name="user" required placeholder="" onChange={this.handleChange}>
                    </input>
                    <div className="placeholder">Ваше имя <span className="red">*</span></div>
                    <input className="form-control-two" type="tel" required placeholder="" onChange={this.handleChange}>
                    </input>
                    <div className="placeholder">Контактный телефон <span className="red">*</span></div>
                    <textarea placeholder="Комментарий" name="comment" cols="40" rows="6">
                            </textarea>
                    <div className="submit-form">
                        <div className="data-processing">Нажимая кнопку «Отправить заявку» вы даете согласие на <span>Обработку персональных данных</span>
                        </div>
                        <button type="submit">Отправить заявку <img src={ButtonVector} alt=""/></button>
                    </div>
                </form>
            )
        }
}




