/**
 * Created by Алексей on 04.05.2017.
 */

import React, {Component} from 'react'

import Common from "../Common";

const pageName = "forgot_pass"
const inputFields = [
    {
        type: 'email',
        name: 'email',
        placeholder: 'Введите свой e-mail',
        id: 'email_forgot',
    }
]

const submitButton = {
    action: (e) => {
        e.preventDefault();
        console.log("forgot  action");
    },
    text: "восстановить доступ"
}
const links = [
]

class Login extends Component {

    render(){
        return(
            <Common
                pageName={pageName}
                inputFields={inputFields}
                submitButton={submitButton}
                links={links}
            />
        )
    };
}

export default Login;