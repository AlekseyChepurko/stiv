/**
 * Created by Алексей on 04.05.2017.
 */

import React, {Component} from 'react'

import Common from "../Common";

const pageName = "login"
const inputFields = [
    {
        type: 'email',
        name: 'email_login',
        placeholder: 'Введите e-mail',
        id: 'email_login',
    },
    {
        type: 'password',
        name: 'password_login',
        placeholder: 'Введите пароль',
        id: 'password_login',
    },
]

const submitButton = {
    action: (e) => {
        e.preventDefault();
        console.log("login action");
    },
    text: "войти в аккаунт"
}
const links = [
    {
        text: "нет учетной записи?",
        ref: "/registration",
        id: ""
    },
    {
        text: "забыли пароль?",
        ref: "/forgot_pass",
        id: ""
    }
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