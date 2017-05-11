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

export default class SimpleForm extends Component {
    render(){
        return(
            <InputForm fields={fields} themes={themes}/>
        )
    }
}