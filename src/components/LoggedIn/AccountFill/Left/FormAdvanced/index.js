import React, {Component} from 'react'
import Form from '../Form'

const leftFields = [
    {
        type: "text",
        placeholder: "Логин",
        label: "Логин:",
        name: "login"
    },
    {
        type: "password",
        placeholder: "Пароль",
        label: "Пароль",
        name: "password"
    },
    {
        type: "text",
        placeholder: "Введите прокси",
        label: "Прокси:",
        name: "proxy",
    },
    {
        type: "phone",
        placeholder: "",
        label: "Номер телефона:",
        name: "phone"
    },
    {
        type: "text",
        placeholder: "Введите активацию",
        label: "SmsActivate",
        name: "smsActivate",
    },
    {
        type: "number",
        placeholder: "",
        label: "UserID",
        name: "userID",
    },
    {
        type: "textarea",
        placeholder: "Введите конурентов",
        label: "Списко конкурентов:",
        name: "rivalList",
        minHeight: 130
    },
    {
        type: "number",
        placeholder: "Введите число",
        label: "Кол-во постов:",
        name: "postNumber",
    },
    {
        type: "number",
        placeholder: "Введите число",
        label: "Коэфф. in-езности:",
        name: "INCoefficient",
    },

];

const rightFields = [
    {
        type: "textarea",
        placeholder: "Введите стоп-слова",
        label: "Стоп-слова",
        labelWidth: 115,
        minHeight: 130,
        name: "stopWords"
    },
    {
        type: "number",
        placeholder: "Введите число",
        label: "Максимум тегов:",
        labelWidth: 115,
        name: "tagNumber",
    },
    {
        type: "textarea",
        placeholder: "Введите теги",
        label: "Список тегов:",
        labelWidth: 115,
        name: "tagList",
        minHeight: 250
    },
    {
        type: "time",
        placeholder: "",
        label: "Время постинга:",
        labelWidth: 115,
        name: "tagMaximum"
    },
];

export default class FromAdvanced extends Component {
    render(){
        return(
            <Form
                leftFields={leftFields}
                rightFields={rightFields} />
        )
    }
}