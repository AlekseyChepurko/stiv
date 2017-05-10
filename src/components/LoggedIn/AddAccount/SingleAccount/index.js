/**
 * Created by chep on 10.05.17.
 */

import React, {Component} from 'react'

export default class SingleAccount extends  Component {
    render(){
        return(
            <section className="single_account_warp">
                <StandartForm />
            </section>
        )
    }
}

class StandartForm extends Component {
    render(){
        return(
            <form action="#">
                <input type="text" name="name"/>
                <input type="password" id="password" />
            </form>
        )
    }
}