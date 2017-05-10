/**
 * Created by chep on 10.05.17.
 */
import React, {Component} from 'react'
import Common from '../../common/Common'

import Title from './Title'
import SingleAccountAddition from './SingleAccountAddition'
import MultipleAccountsAddition from './MultipleAccountsAddition'

import './styles/main.css'

const styles = {
    margin: 40,
}

export default class AddAccount extends Component {
    render(){
        return(
            <Common pageName="add_account" styles={styles}>
                <SingleAccountAddition />
                <MultipleAccountsAddition />
            </Common>
        )
    }
}