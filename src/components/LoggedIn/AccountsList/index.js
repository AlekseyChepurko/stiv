/**
 * Created by Алексей on 11.05.2017.
 */

import React, {Component} from 'react'
import Common from "../../common/Common"
import Right from './Right'
import Left from './Left'

export default class AccountsList extends Component {
    render(){
        return(
            <Common pageName="accounts_list">
                <Left/>
                <Right/>
            </Common>
        )
    }
}