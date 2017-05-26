/**
 * Created by Алексей on 19.04.2017.
 */
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import DropDownMenu from 'DropdownMenu'
import logo from "../../../assets/img/stiv_logo.png"
import defaultAvatar from "./img/defaultAvatar.png"

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
        link: "/add_account",
        text: "Раскрутка аккаунтов",
        dropDown: true,
        items:[
            {
                text : "Статус раскрутки",
                link: "#",
                id: "promotion_status",
                dropDown: true,
                items:[
                    {
                        text : "Статус раскрутки",
                        link: "#",
                        id: "promotion_status",
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
const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minWidth: 300,
    backgroundColor: "#172437",
    color: "white"
};
export default class SideMenu extends Component {

    render(){

        return(
            <section className="side_menu__wrap" style={style}>
                <SideHeader />

                <DropDownMenu
                    menuItems={menuItems}
                    headText="Меню"
                />

            </section>

        )
    }
}

const headStyle = {
    main: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 34
    },
    ava_wrap: {
        marginTop: 43,
        marginBottom: 15,
        maxWidth: 100,
        maxHeight: 100,
        borderRadius: "50%",
        overflow: "hidden"
    },
    img: {
        height: "100%",
        width: "100%"
    },
    user: {
        textTransform: "capitalize",
        color: "#0680c6"
    }
};
class SideHeader extends Component {
    render(){
        return(
            <header style={headStyle.main}>
                <Link to="/">
                    <img src={logo} className="logo_img" alt="logo"/>
                </Link>
                <div className="avatar_wrap" style={headStyle.ava_wrap}>
                    <img style={headStyle.img} src={defaultAvatar} alt="avatar" className="avatar_img"/>
                </div>
                <p>Добро пожаловать,</p>
                <Link to="/account_settings" className="user_name" style={headStyle.user} >{this.props.userName}</Link>
            </header>
        )
    }
}


SideHeader.defaultProps = {
    avatarImage: "defaultAvatar.png",
    imagePath: "/public/assets/img/",
    userName: "александр инсаев",
};
