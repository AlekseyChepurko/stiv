/**
 * Created by Алексей on 09.05.2017.
 */

import React, {Component} from 'react'

export default class PayPeriodSelect extends Component {
//TODO several states for each select
    render(){
        return(
            <section className="pay_period_select">
                <div><label htmlFor="days">3 дня</label><input type="radio" name="paymentPeriod" id="days" className="pay_period_item" value='3' defaultChecked={true}/></div>
                <div><label htmlFor="month">1 месяц</label><input type="radio" name="paymentPeriod" id="month" className="pay_period_item" value='30'/></div>
                <div><label htmlFor="three_monts">3 месяца</label><input type="radio" name="paymentPeriod" id="three_monts" className="pay_period_item" value='90'/></div>
                <div><label htmlFor="six_month">6 месяцев</label><input type="radio" name="paymentPeriod" id="six_month" className="pay_period_item" value='180'/></div>
                <div><label htmlFor="year">1 год</label><input type="radio" name="paymentPeriod" id="year" className="pay_period_item" value='365'/></div>
            </section>
        )
    }
}