/**
 * Created by Алексей on 09.05.2017.
 */

import React, {Component} from 'react'
import Common from "../../common/Common"
import Statistics from '../../Statistics'
import PeriodSelect from './PeriodSelect'
import Info from './Info'


import './styles/main.css'

export default class StatisticsContent extends Component {
    render(){
        return(
            <Common pageName="statistics">
                <section className="content">

                    <Info />

                    <section id="statistics_chart">
                        <PeriodSelect/>
                        <Statistics width={1380} height={243}  />
                    </section>

                </section>
            </Common>
        )
    }
}