/**
 * Created by chep on 10.05.17.
 */

import React, {Component} from 'react'
import Info from './Info'
import Title from './Title'
import FileAddition from './FileAddition'


const styles = {
    backgroundColor: "white",
    minHeight: 310,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 32
};
export default class MultipleAccountsAddition extends Component {
    render(){
        return(
            <section className="multiple_accounts_form" style={styles}>
                <Title/>
                <Info/>
                <FileAddition/>
            </section>
        )
    }
}