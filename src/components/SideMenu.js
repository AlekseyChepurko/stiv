/**
 * Created by Алексей on 19.04.2017.
 */
import React, { Component } from 'react';
import "../assets/styles/components/SideMenu.css";
import logo from "../assets/img/stiv_logo.png";

class SideMenu extends Component {

    constructor(props){
        super(props);

        this.state = {
            dropdownState: false
        }

        this.updateDropdownState = this.updateDropdownState.bind(this);
    };

    updateDropdownState(e){
        console.log("hi");
        this.state.dropdownState === true ? this.setState({dropdownState: false}) : this.setState({dropdownState: true});
    }

    render(){
        return(
            <section className="side_menu__wrap">
                <header>
                    <img src={logo} className="logo_img" alt="logo"/>
                    <div className="avatar_wrap">
                        <img src={this.props.imagePath + this.props.avatarImage} alt="avatar" className="avatar_img"/>
                    </div>
                    <p>Добро пожаловать,</p>
                    <a href="#" className="user_name">{this.props.userName}</a>
                </header>

                <nav className="sideMenu__navigation">
                    <header>меню</header>
                    <ul className="menu_nav">
                        <li className="menu_nav__item"><a href="" id="add_account">добавить аккаунт</a></li>
                        <li className="menu_nav__item"><a href="" id="account_list">список аккаунтов</a></li>
                        <li className="menu_nav__item"><a href="" id="fill_accounts">наполнение аккаунтов</a></li>
                        <li className={"menu_nav__item dropdown " + (this.state.dropdownState ? "active" : "")} onClick={this.updateDropdownState}>
                            <a href="#" id="accounts_promotion">раскрутка аккаунтов</a>
                            <ul>
                                <li><a href="#">Статус раскрутки</a></li>
                                <li><a href="#">Подписка по конкурентам</a></li>
                                <li><a href="#">Подписка по списку</a></li>
                            </ul>
                        </li>
                        <li className="menu_nav__item"><a href="" id="audience_collection">сбор аудитории</a></li>
                        <li className="menu_nav__item"><a href="" id="statistic">статистика</a></li>
                    </ul>
                </nav>

            </section>
        )
    }
}

SideMenu.defaultProps = {
    avatarImage: "defaultAvatar.png",
    imagePath: "./assets/img/",
    userName: "александр инсаев",
}
export default SideMenu;