/**
 * Created by Алексей on 24.05.2017.
 */
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import MenuDropDownItem from './MenuDropDownItem'
import {listStyle} from './index'
import defaultDropdownArrow from './imgs/dropdown-arrow.png'

export default class MenuItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            mouseOn: false,
            opened: false
        };
        this.mouseOn = this.mouseOn.bind(this);
        this.mouseOut = this.mouseOut.bind(this);
        this.openToggle = this.openToggle.bind(this);
    }

    mouseOn(){
        this.setState({mouseOn: true});
    };
    mouseOut(){
        this.setState({mouseOn: false});
    };
    openToggle(e){
        e.preventDefault();
        this.setState({opened: !this.state.opened});
    };

    render(){
        const underline = {
            height: 2,
            backgroundColor: '#0777b9',
            transition: "all 0.2s",
            position: "relative",
            width: this.state.mouseOn ? "100%" : 0,
            left: this.state.mouseOn ? 0 : "50%"
        };
        const dropDownArrowStyle = {
            maxHeight: 10,
            transition: "all 0.3s",
            transform: `${this.state.opened ? "rotateY(180deg) rotateZ(90deg) translateY(-3px)" : "rotate(0deg) translateY(-3px)"}`
        };
        Object.assign(listStyle.li, {
            maxHeight: this.state.opened ? (300) : (parseInt(listStyle.ul.lineHeight)+underline.height),
            overflowY: this.state.opened ? "overflow" : "hidden",
        });
        return <li style={listStyle.li}
                className={this.props.className}
                onMouseLeave={this.mouseOut}
                onMouseEnter={this.mouseOn}>
                    <div style={listStyle.wrap}>
                        <Link
                            id={this.props.id}
                            onClick={ this.props.dropDown ? this.openToggle : ()=>{}}
                            to={this.props.link}>
                            {this.props.text}
                        </Link>
                        {this.props.dropDown ?
                            <img src={this.props.dropDownArrow} style={dropDownArrowStyle} alt="arrow"/> : ""}
                    </div>
                    <div className="underline" style={underline}></div>

                    {this.props.dropDown ?
                            <MenuDropDownItem
                                commonClass={this.props.className}
                                id={this.props.id}
                                text={this.props.text}
                                items={this.props.items}
                            /> : ""}
            </li>
    }
}

MenuItem.defaultProps = {
    className: "",
    id: "",
    ref: "",
    text: "",
    dropDown: false,
    dropDownArrow: defaultDropdownArrow,
    items: [{text :"subelements is array of objects {text: text, link}", link: "#"}]

};
MenuItem.PropTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    link: PropTypes.string,
    text: PropTypes.number,
    dropDown: PropTypes.object,
    items: PropTypes.arrayOf(PropTypes.object)

};
