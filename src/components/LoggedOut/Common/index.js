/**
 * Created by Алексей on 05.05.2017.
 */

import React, {Component} from 'react'
import Form from './Form'
import Links from './Links'

import logo from './assets/imgs/logo.png'
import './assets/styles/main.css'

export default class Common extends Component {

    render(){
        return(
            <main className={`logged_out ${this.props.pageName}`}>
                <section className="content">
                    <img src={logo} alt="stiv"/>

                    <Form inputFields={this.props.inputFields} submitButton={this.props.submitButton}/>
                    <Links links={this.props.links} />

                </section>

            </main>
        )
    }
}