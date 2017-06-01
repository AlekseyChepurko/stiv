/**
 * Created by Алексей on 12.05.2017.
 */
import React, {Component} from 'react'
import defaultAvatar from './imgs/defaultAvatar.png'

const style = {
    marginTop: 30
};

export default class Accounts extends Component {
    constructor(props){
        super(props);
        this.state = {
            accounts: this.props.accounts,
            activeAccount: this.props.activeAccount,
        }
    }

    componentWillMount(){
        console.log("accounts will be downloaded");
    }
    render(){
        const accounts = [];
        this.state.accounts.forEach((item, iter)=>{
            accounts.push(
                React.createElement(Account, {
                    key: iter,
                    account: item,
                    active: iter===this.state.activeAccount ? true : false,
                    paddingLeft: this.props.paddingLeft
                })
            );
        });

        return(
            <ul style={style}>
                {accounts}
            </ul>
        )
    }
}
Accounts.defaultProps = {
    activeAccount: 2,
    accounts: [{
        img: defaultAvatar,
        name: "polykov_alex",
        theme: "Спорт"
    },{
        img: defaultAvatar,
        name: "polykov_alex",
        theme: "Спорт"
    },{
        img: defaultAvatar,
        name: "polykov_alex",
        theme: "Спорт"
    },{
        img: defaultAvatar,
        name: "polykov_alex",
        theme: "Спорт"
    },{
        img: defaultAvatar,
        name: "polykov_alex",
        theme: "Спорт"
    },{
        img: defaultAvatar,
        name: "polykov_alex",
        theme: "Спорт"
    },{
        img: defaultAvatar,
        name: "polykov_alex",
        theme: "Спорт"
    },{
        img: defaultAvatar,
        name: "polykov_alex",
        theme: "Спорт"
    },{
        img: defaultAvatar,
        name: "polykov_alex",
        theme: "Спорт"
    },{
        img: defaultAvatar,
        name: "polykov_alex",
        theme: "Спорт"
    },{
        img: defaultAvatar,
        name: "polykov_alex",
        theme: "Спорт"
    },{
        img: defaultAvatar,
        name: "polykov_alex",
        theme: "Спорт"
    },{
        img: defaultAvatar,
        name: "polykov_alex",
        theme: "Спорт"
    }]
};

const accountStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 8
};
const nameStyle = {
    fontSize: "1.15rem",
    marginBottom: 6
};
const themeStyle = {
    fontSize: "0.85rem"
};
class Account extends Component {
    render(){
        Object.assign(accountStyle, {paddingLeft: this.props.paddingLeft});
        this.props.active ?
            Object.assign(accountStyle, {backgroundColor: "#1da4f7", color: "white"})
            :
            Object.assign(accountStyle, {backgroundColor: "white", color: "black"});
        return(
            <li style={accountStyle}>
                <img src={this.props.account.img} alt="avatar" style={{marginRight: 10}}/>
                <div className="account_wrap">
                    <p style={nameStyle}>{this.props.account.name}</p>
                    <p style={themeStyle}>Тематика: <b>{this.props.account.theme}</b></p>
                </div>
            </li>
        )
    }
}