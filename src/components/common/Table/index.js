/**
 * Created by Алексей on 01.06.2017.
 */

import React, {Component} from 'react'
import TableLine from './TableLine'

export default class Table extends Component {
    render(){
        return(
            this.props.table === undefined
                ? <div>...WAIT...</div>
                :<table style={{borderSpacing:10, borderCollapse: "separate"}}>
                    <Head head={this.props.table.head}/>
                    <Body body={this.props.table.body}/>
                </table>
        )
    }
}

Table.defaultProps = {
    dataFrom: "",
    head: [],
    body: [{}]
};

class Head extends Component {
    render(){
        return(
            <thead>
                <tr>
                    {this.props.head.map((item, iter)=> React.createElement(`td`, {key: iter}, item) )}
                </tr>
            </thead>
        )
    }
}

class Body extends Component {
    render(){
        return(
            <tbody>
                {this.props.body.map((line, iter)=> React.createElement(TableLine, {line: line, key: iter}) )}
            </tbody>
        )
    }
}