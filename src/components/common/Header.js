/**
 * Created by Алексей on 19.04.2017.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
    BrowserRouter as Router,
    Link,
    // TODO redirect settings
    Redirect
} from 'react-router-dom';
import "../../assets/styles/components/common/Header.css";

class Header extends Component {
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
            width: this.state.daysUsed/this.props.days.common * 100+"%",
            transition: `${1.5*this.state.daysUsed/this.props.days.common}s`
        };
        return(
            <header className="main" id="main_header">
                <section className="progress__wrap">
                    <div className="progress">
                        <div className="tariff">{this.props.tariff}</div>
                        <div className="in_days"> <b>{this.props.days.used}</b> из <b>{this.props.days.common}</b> { this.props.days.common%10 === 1 ? "дня" : "дней" }</div>
                    </div>

                    <div className="progress_bar">
                        <div className="fill" style={progressStyle}> </div>
                    </div>

                </section>
                <button id="exit" onClick={this.logout}>
                    <Link to="/login">Exit</Link>
                </button>
            </header>
        )
    }
}

Header.defaultProps = {
    tariff: "бесплатный",
    days: {used: 10, common: 30}
};
Header.propTypes = {
    days: PropTypes.shape({
        used: PropTypes.number,
        common: PropTypes.number
    })
};

export default Header;