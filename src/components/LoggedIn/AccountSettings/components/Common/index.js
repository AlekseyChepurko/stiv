/**
 * Created by chep on 05.05.17.
 */

import React, {Component} from 'react'

export default class Header extends Component {

    render(){

        const styles = {
            minHeight: this.props.styles.minHeight,
            background: this.props.styles.background,
        }

        return(
            <section className="component_header">
                <hedaer>{this.props.title}</hedaer>
                <div className="content">{this.props.text}</div>
            </section>
        )
    }
}