/**
 * Created by Алексей on 09.05.2017.
 */

import React, {Component} from 'react'
import Price from './Price'
import PayPeriodSelect from './PayPeriodSelect'
import './styles/main.css'


export default class PaymentForm extends Component {
    render(){
        return(
            <section className="payment_form_wrap">
                <form action="#">
                    <PayPeriodSelect />
                    <Price/>
                    <section className="info">В сентябре прошлого года южнокорейская компания можно скорее обменять аппараты, поскольку суще</section>
                    <button type="submit">оплатить</button>
                </form>
            </section>
        )
    }
}