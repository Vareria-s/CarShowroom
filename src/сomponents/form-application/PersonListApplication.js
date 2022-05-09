import React, {useContext} from 'react';
import "../../style/Form.css"
import SubmissionFormApplication from "./submission-form/SubmissionFormApplication";
import {MyContext} from "../../App";


function PersonListApplication() {
    const {state, dispatch} = useContext(MyContext);

    return (
        <div className={state.formApplication ? "form-call" : "closed-form-call"} >
            <div className="bt-form"></div>
            <span className="button-order-form-call"  onClick={()=>dispatch({type: 'CLOSED_FORM_APPLICATION'})}>
                <div className="close">
                </div>
            </span>
            <div className="order-form-call">
                <div className="header-form-order-call">Запись на сервис</div>
                <SubmissionFormApplication/>
            </div>
        </div>
    );
}

export default PersonListApplication;


