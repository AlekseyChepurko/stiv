/**
 * Created by Алексей on 05.05.2017.
 */

import React, {Component} from 'react'
import Header from '../Common'
import './assets/styles/main.css'


export default class Left extends Component {
    render(){

        return(
            <section className="left">
                <Header header={this.props.header}/>
            </section>
        )
    }
}