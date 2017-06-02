/**
 * Created by Алексей on 11.05.2017.
 */

import React, {Component} from 'react'
import Right from './Right'
import Left from './Left'

const style = {
    backgroundColor: "white"
};

export default class OptionsML extends Component {
    render(){
        return(
            <section style={{display: "flex", flexDirection: "row"}} >
                <Left style={style} paddingLeft={73}/>
                <Right style={style} paddingLeft={52}/>
            </section>
        )
    }
}