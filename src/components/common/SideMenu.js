/**
 * Created by Алексей on 19.04.2017.
 */
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import "../../assets/styles/components/common/SideMenu.css"
import logo from "../../assets/img/stiv_logo.png"

class SideMenu extends Component {

    constructor(props){
        super(props);

        this.state = {
            dropdownState: false
        }

        this.updateDropdownState = this.updateDropdownState.bind(this);
    };

    updateDropdownState(e){
        this.setState({dropdownState: !this.state.dropdownState});
    }

    render(){
        return(
            <section className="side_menu__wrap">
                <header>
                    <Link to="/">
                        <img src={logo} className="logo_img" alt="logo"/>
                    </Link>
                    <div className="avatar_wrap">
                        <img src={this.props.imagePath + this.props.avatarImage} alt="avatar" className="avatar_img"/>
                    </div>
                    <p>Добро пожаловать,</p>
                    <Link to="/account_settings" className="user_name">{this.props.userName}</Link>
                </header>

                <nav className="sideMenu__navigation">
                    <header>меню</header>
                    <ul className="menu_nav">
                        <li className="menu_nav__item"><Link to="/add_account" id="add_account">добавить аккаунт</Link></li>
                        <li className="menu_nav__item"><Link to="/account_list" id="account_list">список аккаунтов</Link></li>
                        <li className="menu_nav__item"><Link to="/fill_accounts" id="fill_accounts">наполнение аккаунтов</Link></li>

                        <MenuDropdownItem commonClass="menu_nav__item" id="accounts_promotion" dropdownTitle="раскрутка аккаунтов" dropdownItems={
                            [
                                {title : "Статус раскрутки",
                                 link: "#",
                                 id: "promotion_status"
                                },

                                {title: "Подписка по конкурентам",
                                 link : "#",
                                 id: "opponents_subscribe"
                                },

                                {title:"Подписка по списку",
                                 link: "#",
                                 id: "list_subscribe"
                                }
                            ]
                        }/>

                        <li className="menu_nav__item"><Link to="#" id="audience_collection">сбор аудитории</Link></li>
                        <li className="menu_nav__item"><Link to="/statistics" id="statistic">статистика</Link></li>
                    </ul>
                </nav>

            </section>

        )
    }
}


class MenuDropdownItem extends Component{
    constructor(props){
        super(props);

        this.state = {
          dropdownState: false,
          dropdownItems: this.props.dropdownItems.map((item, i) => <li key={i}><a href={item.link} id={item.id} key={i}> {item.title} </a></li> ),
        };

        this.updateDropdownState = this.updateDropdownState.bind(this);
    }

    updateDropdownState(){
        this.setState({dropdownState: !this.state.dropdownState});
    }

    render(){
        return(
            <li className={ this.props.commonClass + " dropdown " + (this.state.dropdownState ? "active" : "")}>
                <a href="#" id={this.props.id} onClick={this.updateDropdownState}> {this.props.dropdownTitle} </a>
                <ul>
                    {this.state.dropdownItems}
                </ul>
            </li>
        );
    };
}

MenuDropdownItem.defaultProps = {
    name: "введите название dropdown элемента как name prop",
    dropdownItems: [{"сабэлементы - items prop в виде объекта {'text link': 'link'}": "#"}],
    commonClass: "common_class",
    id: "idNeeded"
}

SideMenu.defaultProps = {
    avatarImage: "defaultAvatar.png",
    imagePath: "./assets/img/",
    userName: "александр инсаев",
}
export default SideMenu;