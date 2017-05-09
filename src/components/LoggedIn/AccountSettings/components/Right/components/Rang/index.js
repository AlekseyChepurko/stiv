/**
 * Created by Алексей on 08.05.2017.
 */
import React, {Component} from 'react'
import './styles/main.css'

export default class Rang extends Component {
    constructor(props){
        super(props)

        this.state = {
            rang: 'мастер',
            payed: '09.04.2018'
        }
    }
    render(){
        return(
            <section className="rang_wrap">
                <p className="current_rang">
                    <span className="rang_text">текущий ранг: </span>
                    <span className="rang">{this.state.rang}</span>
                </p>
                <p className="payed">
                    <span className="payed_text">доступ оплачен до:</span>
                    <span className="date">{this.state.payed}</span>
                </p>
            </section>
        )
    }
}