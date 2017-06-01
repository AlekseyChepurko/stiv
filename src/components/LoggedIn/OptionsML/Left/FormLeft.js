/**
 * Created by Алексей on 11.05.2017.
 */
import React, {Component} from 'react'
import FormItem from './FormItem'

const FormItems = [
    {
        title: "Список ID:",
        name: "IDList",
        placeholder: "Введите ID",
        uploadable: true,
        type: "textarea"
    },
    {
        title: "Стоп-слово:",
        name: "stopWord",
        placeholder: "Введите стоп-слова",
        uploadable: true,
        type: "textarea"
    },
    {
        title: "Кол-во подписчиков в сутки:",
        name: "folowers",
        placeholder: "Введите кол-во",
        type: "number"
    },
    {
        title: "Кол-во лайков в сутки:",
        name: "likes",
        placeholder: "Введите кол-во",
        type: "number"
    },

];

const style= {
    display: "flex",
    flexDirection: "column",
    marginBottom: 65,
    marginRight: 60
};
const submitStyle = {
    backgroundColor: "#00a2fb",
    color: "white",
    minWidth: 425,
    minHeight: 40,
    alignSelf: "flex-end"
};
export default class FormLeft extends Component {
    render(){
        const formItems = [];
        FormItems.forEach((item, iter) => {
           formItems.push(
               React.createElement(FormItem, {
                   key: iter,
                   item: item,
               })
           );
        });
        return(
            <section style={style}>
                {formItems}
                <button type="submit" style={submitStyle}>Запустить</button>
            </section>
        )
    }
}