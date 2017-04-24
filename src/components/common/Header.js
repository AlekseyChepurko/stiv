/**
 * Created by Алексей on 19.04.2017.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import "../../assets/styles/components/common/Header.css";

class Header extends Component {
    render(){
        return(
            <header className="main">
                <section className="progress__wrap">
                    <div className="progress">
                        <div className="tariff">{this.props.tariff}</div>
                        <div className="in_days"> <b>{this.props.days.used}</b> из <b>{this.props.days.common}</b> { this.props.days.common%10 === 1 ? "дня" : "дней" }</div>
                    </div>

                    <div className="progress_bar">
                        <div className="fill" style={{width: this.props.days.used/this.props.days.common * 100+"%" }}> </div>
                    </div>

                </section>
                <button id="exit">e</button>
            </header>
        )
    }
}

Header.defaultProps = {
    tariff: "бесплатный",
    days: {used: 10, common: 30}
}
Header.propTypes = {
    days: PropTypes.shape({
        used: PropTypes.number,
        common: PropTypes.number
    })
}

export default Header;