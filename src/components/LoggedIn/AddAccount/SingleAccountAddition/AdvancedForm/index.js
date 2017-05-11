/**
 * Created by chep on 10.05.17.
 */
import React, {Component} from 'react'
import InputForm from '../InputForm'

const fields = [
    {
        type: "text",
        placeholder: "Введите логин",
        name: "login"
    },
    {
        type: "password",
        placeholder: "Введите пароль",
        name: "password"
    },
    {
        type: "text",
        placeholder: "Прокси",
        name: "proxy"
    },
    {
        type: "phone",
        placeholder: "Номер телефона",
        name: "phone"
    },
    {
        type: "text",
        placeholder: "SmsActicate",
        name: "SmsActicate"
    },
    {
        type: "text",
        placeholder: "UserID",
        name: "UserID"
    }
];

const themes = [
    {
        value: "Тематика1",
        label:"Тематика аккаунта"},
    {
        value: "Тематика2",
        label:"Тематика аккаунта"},
    {
        value: "Тематика3",
        label:"Тематика аккаунта"},
    {
        value: "Тематика4",
        label:"Тематика аккаунта"},
    {
        value: "Тематика5",
        label:"Тематика аккаунта"},
    {
        value: "Тематика6",
        label:"Тематика аккаунта"},
];

export default class AdvancedForm extends Component {
    render(){
        return(
            <InputForm fields={fields} themes={themes}/>
        )
    }
}