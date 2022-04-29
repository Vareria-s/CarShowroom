import React, {useContext} from 'react';
import "../../style/Form.css"
import SubmissionForm from "./submission-form/SubmissionForm";
import {MyContext} from "../../App";


function PersonList() {
    const {state, dispatch} = useContext(MyContext);

    return (
        <div className={state.formCall ? "form-call" : "closed-form-call"} >
            <span className="button-order-form-call"  onClick={()=>dispatch({type: 'CLOSED_FORM_CALL'})}>
                <div className="close">

                </div>
            </span>
            <div className="order-form-call">
                <div className="header-form-order-call">Перезвоним в течении часа</div>
                <SubmissionForm/>
            </div>
        </div>
    );
}

export default PersonList;


