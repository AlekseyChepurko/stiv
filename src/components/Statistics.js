/**
 * Created by Алексей on 30.04.2017.
 */
import React, { Component } from 'react';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from "recharts";


class CustomizedDot extends Component{
    render () {
        const {cx, cy, stroke, payload, value} = this.props;

        return (
            <svg x={cx - 5} y={cy - 5} width={100} height={100} fill="green" viewBox="0 0 1024 1024">
                <circle cx="50" cy="50" r="40" strokeWidth="10" stroke="#009ff7" fill="#009ff7"/>
            </svg>
        );
    }
};

class Statistics extends Component {

    constructor(){
        super();
        this.state = {
            data: [
                {name: '', uv: 70},
                {name: 'Янв', uv: 100, pv: 2400, amt: 2400},
                {name: 'Фев', uv: 300, pv: 1398, amt: 2210},
                {name: 'Март', uv: 60, pv: 9800, amt: 2290},
                {name: 'Апр', uv: 100, pv: 3908, amt: 2000},
                {name: 'Май', uv: 400, pv: 4800, amt: 2181},
                {name: 'Июнь', uv: 100, pv: 3800, amt: 2500},
                {name: 'Авг', uv: 120, pv: 4300, amt: 2100},
                {name: 'Сент', uv: 100, pv: 4300, amt: 2100},
                {name: '', uv: 220, pv: 4300, amt: 2100},
            ]
        }
    }

    render(){
        return(
            <AreaChart width={700} height={400} data={this.state.data}
                       margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                <XAxis dataKey="name"/>
                <YAxis />
                <CartesianGrid strokeDasharray="10000 0"/>
                <Tooltip/>
                <Area type='monotone' dataKey='uv' stroke='#009ff7' fill='rgba(0, 159, 247, 0.8)' dot={<CustomizedDot />} />
            </AreaChart>

        )
    }
}

export  default Statistics;

