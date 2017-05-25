/**
 * Created by Алексей on 25.05.2017.
 */

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import MenuItem from './MenuItem'


export const listStyle = {
    ul: {
        fontSize: "1.15rem",
        marginTop: 18,
        lineHeight: "35px",
    },
    li: {
        marginBottom: 10,
        overflow: "hidden",
        transition: "all 0.3s"
    },
    wrap: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
};


export default class DropDownMenu extends Component {
    render(){
        const items = this.props.menuItems.map(
            (item, iter) =>
                React.createElement(MenuItem, {
                    id: item.id,
                    link: item.link,
                    className: item.className,
                    text: item.text,
                    dropDown: !!item.dropDown,
                    items: item.items ? item.items : undefined,
                    key:iter}));
        return(
            <nav className="sideMenu__navigation">
                <header>{this.props.headText}</header>
                <ul className="menu_nav" style={listStyle.ul}>
                    {items}
                </ul>
            </nav>
        )
    }
}

DropDownMenu.defaultProps  = {
    menuItems: [],
    headText: "Меню",
    style: listStyle
};

DropDownMenu.propTypes = {
    headText: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.object)

};