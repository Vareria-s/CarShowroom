import React from 'react';
import axios from 'axios';
import "../../../style/Form.css"
import "../../../style/Select.css"
import ButtonVector from "../../../img/vector/button-vector.png";
import Select from "./Select";

export default class SubmissionFormApplication extends React.Component{
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
                <form className="ui-form" onSubmit={this.handleSubmit}>
                    <div className="form-row">

                        <div className="group">
                            <input type="text" id="user" required onChange={this.handleChange}/>
                            <span className="bar"></span>
                            <label>Имя <span>*</span></label>
                            <label className="form-label-one" htmlFor="user">Обязательное поле</label>
                        </div>

                        <div className="group">
                            <input type="text" id="tel" required onChange={this.handleChange}/>
                            <span className="bar"></span>
                            <label>Имя <span>*</span></label>
                            <label className="form-label-two" htmlFor="tel">Обязательное поле</label>
                        </div>

                        <Select/>


                        <textarea placeholder="Комментарий" name="comment" cols="40" rows="5"/>
                    </div>

                    <div className="submit-form">
                        <div className="data-processing">Нажимая кнопку «Отправить заявку» вы даете согласие на
                            <span>Обработку персональных данных</span>
                        </div>
                        <button className="button-submit-form btn-14" type="submit btn-14">Отправить заявку
                            <div className="img-button-submit-form"></div>
                        </button>
                    </div>
                </form>
            )
        }
}




