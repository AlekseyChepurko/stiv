/**
 * Created by chep on 05.05.17.
 */

import React, {Component} from 'react'
import './assets/styles/main.css'

export default class Header extends Component {

    render(){

        return(
            <header className="account_settings">
                {this.props.header.title}
                <div className="content">{this.props.header.text}</div>
            </header>
        )
    }
}