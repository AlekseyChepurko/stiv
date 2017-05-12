/**
 * Created by Алексей on 12.05.2017.
 */

import React, {Component} from 'react'
import NumericInput from 'react-numeric-input'
import './styles/numbericUnput.css'

const fields = [
    {
        parametr: "Отписываться, если более",
        value: "подписок",
        name: "subscribes"
    },
    {
        parametr: "Отписываться, спустя после окончания МФ/МЛ",
        value: "часов",
        name: "hours"
    }
];

export default class FormUnsubscribe extends Component {
    render(){
        const Fields = [];
        fields.forEach((item, iter) => {
           Fields.push(
               React.createElement(Field,{
                   key: iter,
                   field: item
               })
           )
        });
        return(
            <section className="number input no_arrows">
                {Fields}
            </section>
        )
    }
}

const fieldStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: "#7f8287",
    marginBottom: 10
};
const numberStyle = {
    input: {
        maxWidth: 44,
        minHeight: 40,
        padding: 0,
        textAlign: "center",
        marginRight: 15,
        transition: "background-color 0.3s"
    }
};
class Field extends Component {
    constructor(props){
        super(props);
        this.state = {
            disabled: true
        };
        this.enableToggle = this.enableToggle.bind(this);
    }
    enableToggle(){
        this.setState({disabled: !this.state.disabled});
    }
    render(){

        this.state.disabled ?
            Object.assign(numberStyle.input, {
                backgroundColor: "#ecf1f4",
                color: "#d0d5d9"
            })
            :
            Object.assign(numberStyle.input, {
                backgroundColor: "#00a2fb",
                color: "white"
            });
        return(
            <section style={fieldStyle}>
                <input
                    type="checkbox"
                    id={`${this.props.field.name}_text`}
                    onClick={this.enableToggle}
                />
                <label
                    htmlFor={`${this.props.field.name}_text`}
                    style={{
                        width: 185,
                        marginRight: 15,
                        marginLeft: 15
                    }}>
                        {this.props.field.parametr}
                </label>

                <NumericInput
                    style={numberStyle}
                    name={this.props.field.name}
                    min={0}
                    disabled={this.state.disabled}/>
                <div>{this.props.field.value}</div>
            </section>
        )
    }
}