/**
 * Created by chep on 10.05.17.
 */

import React, {Component} from 'react'
import SimpleForm from './SimpleFrom'
import AdvancedForm from './AdvancedForm'

import './styles/main.css'


export default class SingleAccountAddition extends Component {

    constructor(props){
        super(props);

        this.state = {
            simpleMode: true,
        }
    }

    render(){
        return(
            <section className="single_account_form">

                <FormModeSwitcher parent={this} />

                {this.state.simpleMode ?

                    <SimpleForm/>
                    :
                    <AdvancedForm/>
                }

            </section>
        )
    }
}

class FormModeSwitcher extends Component {

    constructor(props){
        super(props);
        this.switchFromMode = this.switchFromMode.bind(this);
    }

    switchFromMode(e){
        const val = e.target.value==='true' ? true : false;
        this.props.parent.setState({simpleMode: val });
    }

    render(){
        return(
            <section className="form_mode_switcher">
                <button value={true} onClick={this.switchFromMode}>стандартныйы</button>
                <button value={false} onClick={this.switchFromMode}>продвинутый</button>
            </section>
        )
    }
}