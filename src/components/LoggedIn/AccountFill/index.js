/**
 * Created by chep on 12.05.17.
 */
import React, {Component} from 'react'
import Left from './Left'
import Right from './Right'

const style = {
    display: "flex",
    flexDirection: "row"
};
export default class AccountFill extends Component {
    render(){
        return(
            <section className="account_fill" style={style} >
                <Left/>
                <Right/>
            </section>
        )
    }
}