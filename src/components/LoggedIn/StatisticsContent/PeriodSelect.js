/**
 * Created by Алексей on 09.05.2017.
 */

import React, {Component} from 'react'
import Datetime from 'react-datetime'

import './styles/datetime.css'


export default class PeriodSelect extends Component {

    constructor(props){
        super(props);
        this.state = {
            initialStartDate: new Date( Date.now() ),
        }
    }
    componentWillMount(){
        this.state.initialStartDate.setMonth(this.state.initialStartDate.getMonth() -1);
    };

    render(){
        return(
            <section className="period_select">

                <p className="period_start_text">показать статистику с</p>

                <Datetime
                    className="period_start period_select_item"
                    locale="ru"
                    defaultValue={this.state.initialStartDate}
                    dateFormat="D MMMM YYYY"
                    timeFormat={false}
                    viewMode="days"
                />

                <p className="period_end_text">по</p>

                <Datetime
                    className="period_end period_select_item"
                    locale="ru"
                    defaultValue={Date.now()}
                    dateFormat="D MMMM YYYY"
                    timeFormat={false} />

            </section>
        )
    }
}