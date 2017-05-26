/**
 * Created by Алексей on 19.04.2017.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    BrowserRouter as Router,
    Link,
    // TODO redirect settings
    Redirect
} from 'react-router-dom'
import {headerStyle} from './styles'
import exitImg from './imgs/exit.png'

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            daysUsed: 0
        };
        this.logout = this.logout.bind(this);
    }
    componentDidMount(){
        this.setState({daysUsed: this.props.days.used});
    }
    logout(){
    }
    render(){
        const progressStyle = {
            width: `${this.state.daysUsed/this.props.days.common * 100}%`,
            transition: `${1.5*this.state.daysUsed/this.props.days.common}s`
        };
        return(
            <header id="main_header" style={headerStyle.main}>
                <section style={headerStyle.progress.wrap} >
                    <div style={headerStyle.progress.main}>
                        <div>Тариф: <strong>{this.props.tariff}</strong></div>
                        <div><strong>{this.props.days.used}</strong> из <strong>{this.props.days.common}</strong> { this.props.days.common%10 === 1 ? "дня" : "дней" }</div>
                    </div>

                    <div style={headerStyle.progressBar}>
                        <div style={Object.assign(headerStyle.fill ,progressStyle)}> </div>
                    </div>

                </section>
                <ExitButton />
            </header>
        )
    }
}

Header.defaultProps = {
    tariff: "Бесплатный",
    days: {used: 10, common: 30}
};
Header.propTypes = {
    days: PropTypes.shape({
        used: PropTypes.number,
        common: PropTypes.number
    })
};

class ExitButton extends Component {
    constructor(props){
        super(props);
        this.exitAction = this.exitAction.bind(this);
    }
    exitAction(){
        alert("exit");
    };
    render(){
        return(
            <button style={{marginRight: 38}} onClick={this.exitAction}>
                <img src={exitImg} alt="exit"/>
            </button>
        )
    }
}