/**
 * Created by chep on 10.05.17.
 */

import React, {Component} from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

const submitButtonStyle = {
    minWidth: 250,
    minHeight: 40,
    marginTop: 15,
    marginBottom: 30,
    color: "white",
    backgroundColor: "#00a2fb"
};
export default class InputForm extends Component {

    constructor(props){
        super(props);
        this.addAccount = this.addAccount.bind(this);
        this.state = {
            themeValue: ""
        }
    }
    addAccount(e){
        e.preventDefault();
        console.log('account addition');
    }
    render(){
        const fields = [];
        this.props.fields.forEach( (item, iter) => {
            fields.push(
                React.createElement(Field, {
                    key: iter,
                    field: item
                })
            );
        } );
        const selectStyle = {
            borderRadius: 2,
            backgroundColor: "rgba(0,0,0,0)",
            color: "white"
        };
        return(
            <form action="#" id="add_account_form" onSubmit={this.addAccount}>
                {fields}
                <Select
                    style={selectStyle}
                    className="bla"
                    name="theme"
                    options={this.props.themes}
                    placeholder="Выберите тематику аккаунта"
                    value={this.state.themeValue}
                    onChange={(val) => {
                        this.setState({themeValue: val});
                    }}
                />
                <button type="sumbit" style={submitButtonStyle}>Добавить аккаунт</button>
            </form>
        )
    }
}

const inputStyles = {
    padding: 12,
    paddingLeft: 14,
    marginBottom: 10
};
class Field extends Component {
    render(){
        return(
            <input
                style={inputStyles}
                required={true}
                type={this.props.field.type}
                placeholder={this.props.field.placeholder}
                name={this.props.field.name}/>
        )
    }
}