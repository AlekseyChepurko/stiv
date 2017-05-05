/**
 * Created by Алексей on 05.05.2017.
 */

import React, {Component} from 'react'



export default class Left extends Component {
    render(){

        const styles = {
            minWidth: 1070,
            height: this.props.headerHeight
        }
        return(
            <section className="left" style={styles}>

            </section>
        )
    }
}