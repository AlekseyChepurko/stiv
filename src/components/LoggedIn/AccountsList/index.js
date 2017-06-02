/**
 * Created by Алексей on 01.06.2017.
 */

import React, {Component} from 'react'
import {mainColors} from 'Common/style/variables'
import Header from './Header'
import Left from './Left'
import Chart from './Chart'
const style ={
    background: "white",
    width: "100%",
    border: `1px solid ${mainColors.sectionBorder}`,
    padding: 74,
    paddingTop: 61,
    paddingBottom: 61

};

export default class AccountsList extends  Component{
    render(){
        return <section style={style}>
            <Header />
            <section>
                <Left />
                <Chart />
            </section>
        </section>
    }
}