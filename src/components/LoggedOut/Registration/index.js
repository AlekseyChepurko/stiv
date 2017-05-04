/**
 * Created by Алексей on 04.05.2017.
 */

import React, {Component} from 'react'

import Common from "../Common";

const pageName = "registration"
const inputFields = [
    {
        type: 'text',
        name: 'name',
        placeholder: 'Введите имя',
        id: 'name_register',
    },
    {
        type: 'email',
        name: 'email',
        placeholder: 'введите e-mail',
        id: 'email_login',
    },
    {
        type: 'password',
        name: 'password_login',
        placeholder: 'Введите пароль',
        id: 'password_login',
    },
    //TODO checking same password
    {
        type: 'password',
        name: 'password_repeated',
        placeholder: 'Введите пароль еще раз',
        id: 'password_login',
    },
]

const submitButton = {
    action: (e) => {
        e.preventDefault();
        console.log("register action");
    },
    text: "присоединиться"
}
const links = [
    {
        text: "войти",
        ref: "/login",
        id: "login_ref"
    }
]

export default class Registration extends Component {

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
