/**
 * Created by Алексей on 13.05.2017.
 */
import React, {Component} from 'react'
import FormField from './FormField'

const style = {
    display: "flex",
    flexDirection: "row"
};
export default class Form extends Component {
    render(){
        const leftFields = [];
        const rightFields = [];
        this.props.leftFields.forEach( (item, iter) => {
            leftFields.push(
                React.createElement(FormField, {
                    key: iter,
                    item: item
                })
            );
        });
        this.props.rightFields.forEach( (item, iter) => {
            rightFields.push(
                React.createElement(FormField, {
                    key: iter,
                    item: item
                })
            );
        });
        return(
            <section style={style}>
                <section style={{marginRight: 32}}>{leftFields}</section>
                <section>{rightFields}</section>
            </section>
        )
    }
}

