/**
 * Created by chep on 12.05.17.
 */

import React, {Component} from 'react'
import Header from './Header'
import InfoBlock from './InfoBlock'

const style = {
    minWidth: 465
};
export default class Right extends Component {
    render(){
        return(
            <section style={style}>
                <Header/>
                <InfoBlock/>
            </section>
        )
    }
}
