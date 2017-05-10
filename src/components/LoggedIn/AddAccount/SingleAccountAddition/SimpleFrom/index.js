/**
 * Created by chep on 10.05.17.
 */

import React, {Component} from 'react'
import InputForm from '../InputForm'

export default class SimpleForm extends Component {
    render(){
        return(
            <form action="#">
                <input type="text" name="name"/>
                <input type="password" id="password" />

            </form>
        )
    }
}