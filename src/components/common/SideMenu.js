/**
 * Created by Алексей on 19.04.2017.
 */
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import "../../assets/styles/components/common/SideMenu.css"
import logo from "../../assets/img/stiv_logo.png"

const menuItems = [
    {
        className: "menu_nav__item",
        id: "add_account",
        link: "/add_account",
        text: "Добавить аккаунт",
    },
    {
        className: "menu_nav__item",
        id: "account_list",
        link: "/accounts_list",
        text: "Список аккаунтов"
    },
    {
        className: "menu_nav__item",
        id: "fill_accounts",
        link: "/account_fill",
        text: "Наполнение аккаунтов"
    },
    {
        className: "menu_nav__item",
        id: "accounts_promotion",
        link: "",
        text: "Раскрутка аккаунтов",
        dropDown: true,
        items:[
            {text : "Статус раскрутки",
                link: "#",
                id: "promotion_status"
            },

            {text: "Подписка по конкурентам",
                link : "/rival_subscribe",
                id: "opponents_subscribe"
            },

            {text:"Подписка по списку",
                link: "#",
                id: "list_subscribe"
            }
        ]
    },
    {
        className: "menu_nav__item",
        id: "audience_collection",
        link: "/audience_collect",
        text: "Сбор аудитории"
    },
    {
        className: "menu_nav__item",
        id: "statistic",
        link: "/statistics",
        text: "Статистика"
    }

];

class SideMenu extends Component {

    constructor(props){
        super(props);

        this.state = {
            dropdownState: false
        };

        this.updateDropdownState = this.updateDropdownState.bind(this);
    };

    updateDropdownState(e){
        this.setState({dropdownState: !this.state.dropdownState});
    }

    render(){
        const items = menuItems.map( (item, iter)=> React.createElement(MenuItem, {
                                                                                    id: item.id,
                                                                                    link: item.link,
                                                                                    className: item.className,
                                                                                    text: item.text,
                                                                                    dropDown: !!item.dropDown,
                                                                                    items: item.items ? item.items : null,
                                                                                    key:iter}));
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
                        {items}
                    </ul>
                </nav>

            </section>

        )
    }
}

class MenuItem extends Component {
    render(){
        return(
            <li className={this.props.className}>
                {this.props.dropDown ? <MenuDropdownItem
                    commonClass={this.props.className}
                    id={this.props.id}
                    dropdownTitle={this.props.text}
                    dropdownItems={this.props.items}
                /> :
                    <Link
                        id={this.props.id}
                        to={this.props.link}>
                        {this.props.text}
                    </Link>
                    }
            </li>
        )
    }
}

MenuItem.defaultProps = {
    className: "",
    id: "",
    ref: "",
    text: "",
    dropDown: false

};

class MenuDropdownItem extends Component{
    constructor(props){
        super(props);

        this.state = {
          dropdownState: false,
          dropdownItems: this.props.dropdownItems.map((item, i) => <li key={i}><a href={item.link} id={item.id} key={i}> {item.text} </a></li> ),
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
};

SideMenu.defaultProps = {
    avatarImage: "defaultAvatar.png",
    imagePath: "/public/assets/img/",
    userName: "александр инсаев",
};
export default SideMenu;