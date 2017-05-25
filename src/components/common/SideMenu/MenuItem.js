/**
 * Created by Алексей on 24.05.2017.
 */
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import MenuDropDownItem from './MenuDropDownItem'
import {listStyle} from './index'
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

        this.asyncTimeout = (time, callback)=>{
            console.log(`start`);
            const res = new Promise((resolve, reject)=>{
                setTimeout(() => {
                    resolve("");
                }, time);
            });
            res.then(
                result => {
                    `сработало через ${time}ms`;
                    callback();
                },
                error => {
                    console.log("something in asyncTimout wrong");
                }
            )
        };
    }
    static asyncTimeout;

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
            backgroundColor: 'white',
            transition: "all 0.2s",
            position: "relative",
            width: this.state.mouseOn ? "100%" : 0,
            left: this.state.mouseOn ? 0 : "50%"
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
                            <DropDownSwitcher /> : ""}
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
    dropDown: false

};

class DropDownSwitcher extends Component {

    render(){
        return(
            <div >asd</div>
        )
    }
}