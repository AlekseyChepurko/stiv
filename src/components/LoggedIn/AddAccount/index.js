/**
 * Created by chep on 10.05.17.
 */
import React, {Component} from 'react'
import Common from '../../common/Common'

import SingleAccount from './SingleAccount'
import MultipleAccounts from './MultipleAccounts'

import './styles/main.css'

export default class AddAccount extends Component {
    render(){
        return(
            <Common pageName="add_account">
                <SingleAccount/>
                <MultipleAccounts/>
            </Common>
        )
    }
}