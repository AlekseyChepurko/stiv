/**
 * Created by Алексей on 01.06.2017.
 */

import React, {Component} from 'react'
import Table from 'Table'

const style ={};
const headerStyle = {};
const actions = {
    head: "Действия",
    actions: [
        {title: "Редактировать", link: ""},
        {title: "Удалить аккаунт", link: ""},
        {title: "Проверить", link: ""},
        {title: "Добавить пост", link: ""},
        {title: "Добавить задание", link: ""},
        {title: "Открыть в браузере", link: ""},
        {title: "Открыть лог работы", link: ""},
    ],
};
export default class Left extends Component {
    constructor(props){
        super(props);
        this.state = {
            table: undefined
        }
    }
    componentWillMount(){
        fetch('./defaultData.json').then((response)=> response.json()).then((res)=>{
            // setTimeout(()=>{
            //     this.setState({table:res.accountSettingsData});
            // },1000);
            this.setState({table:res.accountSettingsData});
        });
    }
    render(){
        return(
            <Table
                table={this.state.table}
                actions={actions}
            />
        )
    }
}