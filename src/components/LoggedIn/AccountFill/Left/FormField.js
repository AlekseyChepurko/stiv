/**
 * Created by Алексей on 13.05.2017.
 */
import React, {Component} from 'react'
import TimeInput from './TimeInput'
import '../styles/numbericUnput.css'

const labelStyle = {
    marginRight: 17,
    fontSize: "1rem",
    color: "#54565b",
    marginTop: 13
};
const fieldStyle = {
    display: "flex",
    flexDirection: "row",
    marginBottom: 12
};
const inputStyle = {
    backgroundColor: "#ecf1f4",
    color: "#999fa7",
    padding: 14,
    border: "1px solid #dce2e5",
    borderRadiu: 2,
    resize: "none",
    boxSizing: "border-box",
    minWidth: 300
};

export default class FormField extends Component {

    render(){
        Object.assign(fieldStyle, {
            minHeight: this.props.item.minHeight,
        });
        if (this.props.item.labelWidth)
            Object.assign(labelStyle, {
                width: this.props.item.labelWidth,
            });
        else
            Object.assign(labelStyle, {
                width: this.props.labelWidth,
            });

        let input;
        switch (this.props.item.type){
            case "textarea":
                input = <textarea
                            style={inputStyle}
                            name={this.props.item.name}
                            id={this.props.item.name}
                            placeholder={this.props.item.placeholder}/>;
                break;
            case "time": input = <TimeInput />;
                break;
            default: input = <input
                                style={inputStyle}
                                name={this.props.item.name}
                                id={this.props.item.name}
                                min={0}
                                placeholder={this.props.item.placeholder}
                                type={this.props.item.type}/>;
                    break;
        }
        return(
            <section style={fieldStyle}>
                <label
                    htmlFor={this.props.item.name}
                    style={labelStyle}>
                    {this.props.item.label}
                </label>
                {input}
            </section>
        )
    }
}
FormField.defaultProps = {
    labelWidth: 150,
    item: {
        type: "text",
        placeholder: "placeholder",
        label: "label",
        minHeight: 20,
        name: "name"
    }
};

