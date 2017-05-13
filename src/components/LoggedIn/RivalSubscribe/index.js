/**
 * Created by Алексей on 14.05.2017.
 */
import React, {Component} from 'react'
import Common from "../../common/Common"
import Left from "./Left"
import Right from "./Right"

export default class RivalSubcribe extends Component {
    render(){
        return(
            <Common pageName="rival_subscribe">
                <Left paddingLeft={73}/>
                <Right paddingLeft={46}/>
            </Common>
        )
    }
}