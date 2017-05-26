/**
 * Created by Алексей on 04.05.2017.
 */

import React, {Component} from 'react';
import Header from 'Header';
import SideMenu from './SideMenu';

import '../../assets/styles/normolize.css'
import '../../assets/styles/components/common/defaults.css'

const commonStyle = {
    margin: 40,
    marginBottom: 0
};
const style = {
    display: "flex",
    flexDirection: "row",
    maxHeight: "100vh"
};

const contentStyle = {
    overflow: "auto",
};

export default class Common extends Component {
    render() {
        return(
            <section className={ `logged_in ${this.props.pageName ? this.props.pageName : ''}` } style={style} >
                <SideMenu />

                <section className="content" style={contentStyle}>
                    <Header/>

                    <main style={ this.props.styles ? this.props.styles : commonStyle}>
                        { this.props.children }
                    </main>
                </section>

            </section>
        )
    }
}