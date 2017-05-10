/**
 * Created by Алексей on 10.05.2017.
 */

import React, {Component} from 'react'
import {
    Link
} from 'react-router-dom'

import './styles/accountTable.css'
export default class AccountTable extends Component {

    constructor(props){
        super(props);
        this.state = {
            lines: this.props.lines
        }
    }

    render(){
        return(
            <section className="account_status_wrap">
                <table className="account_status">
                    <TableHead />
                    <TableBody lines={this.props.lines}/>
                </table>

                <DownloadAccountsBtn />
            </section>
        )
    }
}

class TableHead extends Component {
    render(){
        return(
            <thead>
                <tr>
                    <th>аватарка</th>
                    <th>название</th>
                    <th>10,000 подписчиков</th>
                    <th>3,000 подписчиков</th>
                    <th>лента публикаций</th>
                </tr>
            </thead>
        )
    }
}

class TableBody extends Component {

    render(){
        const lines = [];
        this.props.lines.forEach((item, iter) => {
            lines.push(
                React.createElement(TableLine, {key: iter})
            );
        })

        return(
            <tbody>
                {lines}
            </tbody>
        )
    }
}

TableBody.defaultProps = {
    lines: [{},{},{},{},{}]
};

class TableLine extends Component {

    constructor(props){
        super(props);
        this.state = {
            avatar: this.props.avatar ? this.props.avatar : "",
            title: this.props.title ? this.props.title : "Чего-то там",
            tenThounthend: this.props.tenThounthend ? this.props.tenThounthend : "В работе",
            threeThouthend: this.props.threeThouthend ? this.props.threeThouthend : "Чего-то там",
            link: this.props.link ? this.props.link : "#",
        }
    }

    render(){
        return(
            <tr>
                <td>
                    <img src={this.state.avatar} alt=""/>
                </td>
                <td>{this.state.title}</td>
                <td>{this.state.tenThounthend}</td>
                <td>{this.state.threeThouthend}</td>
                <td>
                    <Link to={this.state.link}/>
                </td>
            </tr>
        )
    }
}

class DownloadAccountsBtn extends Component {
    render(){
        return(
            <button id="download_accounts" onClick={()=>{console.log("downloading data...")}}>загрузить еще</button>
        )
    }
}