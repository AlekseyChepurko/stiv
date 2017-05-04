/**
 * Created by Алексей on 04.05.2017.
 */

import React, {Component} from 'react'

export default class LoginForm extends Component {

    constructor(props){
        super(props);

        this.submitAction = this.submitAction.bind(this);
    }

    submitAction = this.props.submitButton.action;

    render(){

        const inputFields = [];
        this.props.inputFields.forEach( (field, iter) => {
            inputFields.push(
                <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    id={field.id}
                    key={iter} />
            );
        } );
        const submitButton =
            <button type="submit">
                {this.props.submitButton.text}
            </button>;

        return(
            <form className="login_form" onSubmit={this.submitAction}>
                {inputFields}
                {submitButton}
            </form>
        )
    };
}