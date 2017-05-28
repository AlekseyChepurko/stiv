/**
 * Created by chep on 10.05.17.
 */
import React, {Component} from 'react'

import SingleAccountAddition from './SingleAccountAddition'
import MultipleAccountsAddition from './MultipleAccountsAddition'
//
// import './styles/main.sass'

const styles = {
    // margin: 40,
    marginBottom: 0,
    flexDirection: "column"
};

export default class AddAccount extends Component {
    render(){
        return <section className="add_account" style={styles}>
                    <SingleAccountAddition />
                    <MultipleAccountsAddition />
                </section>
    }
}