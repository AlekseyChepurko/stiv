/**
 * Created by Алексей on 09.05.2017.
 */

import React, {Component} from 'react'

export default class Price extends Component {

    constructor (props){
        super(props)

        this.state = {
            status: 'новичок',
            price: '1,500',
            pricePerMont: '960'
        }
    }

    render(){
        return(
            <section className="price">
                <p className="status">{this.state.status}</p>
                <p className="price">{this.state.price}р</p>
                <p className="price_per_month">{this.state.pricePerMont} рублей в месяц</p>
            </section>
        )
    }
}