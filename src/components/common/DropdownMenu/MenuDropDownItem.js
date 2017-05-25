/**
 * Created by Алексей on 24.05.2017.
 */

import React, {Component} from 'react'
import MenuItem from './MenuItem'
export default class MenuDropDownItem extends Component{
    constructor (props){
        super(props);
        this.state = {
            opened: false,
        }
    }
    render(){
        const items = this.props.items.map( (item, iter)=> React.createElement(MenuItem, {
            id: item.id,
            link: item.link,
            className: item.className,
            text: item.text,
            dropDown: !!item.dropDown,
            items: item.items ? item.items : null,
            key:iter}));
        return(
                <ul style={{
                    paddingLeft: 10}}>
                    {items}
                </ul>
        )
    }
}

MenuDropDownItem.defaultProps = {
    name: "введите название dropdown элемента как name prop",
    items: [{"сабэлементы - items prop в виде объекта {'text link': 'link'}": "#"}],
    commonClass: "common_class",
    id: "idNeeded"
};

