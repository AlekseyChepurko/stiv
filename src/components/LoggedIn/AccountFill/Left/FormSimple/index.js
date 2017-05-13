/**
 * Created by Алексей on 13.05.2017.
 */
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
        type: "textarea",
        placeholder: "Введите конкурентов",
        label: "Список конкурентов:",
        name: "rivalList",
        minHeight: 140
    },
    {
        type: "number",
        placeholder: "",
        label: "Макс. постов в день",
        name: "postsMax"
    },
    {
        type: "textarea",
        placeholder: "Стоп-слово",
        label: "Стоп-слова",
        name: "stopWords",
        minHeight: 130
    },

];

const rightFields = [
    {
        type: "textarea",
        placeholder: "Введите теги",
        label: "Список тегов:",
        labelWidth: 115,
        name: "tagList",
        minHeight: 255
    },
    {
        type: "number",
        placeholder: "",
        label: "Максимум тегов",
        labelWidth: 115,
        name: "tagMaximum"
    },
];

export default class FromSimple extends Component {
    render(){
        return(
            <Form
                leftFields={leftFields}
                rightFields={rightFields} />
        )
    }
}