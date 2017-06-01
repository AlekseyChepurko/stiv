/**
 * Created by Алексей on 01.06.2017.
 */

import React, {Component} from 'react'

export default class TableLine extends Component {
    render(){
         return(
            <tr style={this.props.style}>
                {Object.keys(this.props.line).map((key, iter)=> React.createElement('td', {key: iter}, this.props.line[key] ))}
            </tr>
        )
    }
}