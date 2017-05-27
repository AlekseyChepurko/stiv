/**
 * Created by Алексей on 05.05.2017.
 */

import React, {Component} from 'react'
import Header from '../Common'
import Rang from './components/Rang'
import PaymentForm from './components/PaymentForm'
import './assets/styles/main.sass'

export default class Right extends Component {
    render(){
        const styles = this.props.header.styles;
        Object.assign(styles, {
            minWidth: 450,
        });
        return(
            <section className="right">
                <Header header={this.props.header}/>

                <main>
                    <PaymentForm />
                    <Rang />
                </main>
            </section>
        )
    }
}