/**
 * Created by Алексей on 11.05.2017.
 */

import React, {Component} from 'react'
import Common from "../../common/Common"
import Right from './Right'
import Left from './Left'

const style = {
    backgroundColor: "white"
};

export default class AccountsList extends Component {
    render(){
        return(
            <Common pageName="accounts_list">
                <Left style={style} paddingLeft={73}/>
                <Right style={style} paddingLeft={52}/>
            </Common>
        )
    }
}