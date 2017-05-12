/**
 * Created by chep on 12.05.17.
 */
import React, {Component} from 'react'
import Common from '../../common/Common'
import Left from './Left'
import Right from './Right'

const style = {
    display: "flex",
    flexDirection: "row"
};
export default class AccountFill extends Component {
    render(){
        return(
            <Common pageName="account_fill" style={style} >
                <Left/>
                <Right/>
            </Common>
        )
    }
}