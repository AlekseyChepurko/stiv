/**
 * Created by Алексей on 04.05.2017.
 */

import React, {Component} from 'react';
import Header from './Header';
import SideMenu from './SideMenu';

import '../../assets/styles/normolize.css'
import '../../assets/styles/components/common/defaults.css'

export default class Common extends Component {
    render() {
        return(
            <section className={ `logged_in ${this.props.pageName ? this.props.pageName : ''}` } >
                <SideMenu />

                <section className="content">
                    <Header/>

                    <main style={ this.props.styles ? this.props.styles : {}}>
                        { this.props.children }
                    </main>
                </section>

            </section>
        )
    }

}