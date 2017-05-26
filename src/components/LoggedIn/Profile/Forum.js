/**
 * Created by Алексей on 26.05.2017.
 */
import React, {Component} from 'react'
import {forum} from './style/left'


export default class  Forum extends Component {
    constructor(props){
        super(props);
        this.state = {
            mouseOn: false,
        };
        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);

    };
    mouseEnter(){
        this.setState({mouseOn: true});
    };
    mouseLeave(){
        this.setState({mouseOn: false});
    };

    render(){
        const forumStyle = this.state.mouseOn ?
            Object.assign({},forum,{backgroundSize: "110%"}):
            Object.assign({},forum,{backgroundSize: "100%"});
        const shadowStyle = this.state.mouseOn ?
            Object.assign({},forum.shadow,{background: "rgba(10,20,20, 0)"}):
            Object.assign({},forum.shadow,{background: "rgba(10,20,20, 0.6)"});
        return(
            <section style={forumStyle} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                <div style={shadowStyle} ></div>
                <div className="content" style={forumStyle.content}>
                    <header style={forumStyle.content.header}>Форум</header>
                    <div className="text">Если у вас есть промо код, введите его в форму ниже. Возможна только если у вас тариф  "Бесплатный".</div>
                </div>
                <button style={forumStyle.button}>
                    <a href="#">
                        Присоединиться
                    </a>
                </button>
            </section>

        )
    }
}