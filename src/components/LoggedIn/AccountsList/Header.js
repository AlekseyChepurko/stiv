/**
 * Created by Алексей on 11.05.2017.
 */

import React, {Component} from 'react'
import InfoImg from './imgs/info.png'

const style = {
    backgroundColor: "#00a2fb",
    color: "white",
    minHeight: 110,
    paddingTop: 23,
    boxSizing: "border-box"
};

export default class Header extends Component {
    render(){
        Object.assign(style, {paddingLeft: this.props.paddingLeft})
        return(
            <header style={style}>
                <HeaderTitle title={this.props.header.title}/>
                <HeaderText text={this.props.header.text} maxWidth={this.props.textMaxWidth}/>
            </header>
        )
    }
}


const titleStyle = {
    marginBottom: 10,
    fontSize: 21
};
class HeaderTitle extends Component {
    render(){
        return(
            <section
                className="header_title"
                dangerouslySetInnerHTML={{__html: this.props.title}}
                style={titleStyle}
            >
            </section>
        )
    }
}
const textStyle = {
    maxWidth: 565,
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
};
class HeaderText extends Component {
    render(){
        return(
            <section className="header_text" style={textStyle}>
                <img src={InfoImg} alt="info" style={{marginRight: 14}}/>
                <p style={ {maxWidth: this.props.maxWidth} }>{this.props.text}</p>
            </section>
        )
    }
}