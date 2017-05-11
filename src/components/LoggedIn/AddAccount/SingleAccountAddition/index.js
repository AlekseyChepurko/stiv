/**
 * Created by chep on 10.05.17.
 */

import React, {Component} from 'react'
import SimpleForm from './SimpleFrom'
import AdvancedForm from './AdvancedForm'
import Info from './Info'
import Title from '../Title'


import './styles/main.css'

const advancedStyle = {
    backgroundSize: "cover",
    backgroundColor: "white"
};

export default class SingleAccountAddition extends Component {
    constructor(props){
        super(props);
        this.state = {
            simpleMode: true,
        }
    }
    render(){
        return(
            <section className="single_account_form" style={this.state.simpleMode ? {} : advancedStyle}>
                <Title/>
                <FormModeSwitcher parent={this} />
                <Info/>
                {this.state.simpleMode ?
                    <SimpleForm/>
                    :
                    <AdvancedForm/>
                }
            </section>
        )
    }
}

const switcherStyles= {
    marginBottom: 15
};
class FormModeSwitcher extends Component {
    constructor(props){
        super(props);
        this.switchFromMode = this.switchFromMode.bind(this);
        this.state = {
            simpleMode: true,
        }
    }
    switchFromMode(e){
        const val = e.target.value==='true' ? true : false;
        this.props.parent.setState({simpleMode: val });
        this.setState({simpleMode: val });
    }
    render(){
        return(
            <section className="form_mode_switcher" style={switcherStyles}>
                <button value={true} className={this.state.simpleMode ? 'active' : ''} onClick={this.switchFromMode}>стандарт</button>
                <button value={false} className={!this.state.simpleMode ? 'active' : ''} onClick={this.switchFromMode}>расширенный</button>
            </section>
        )
    }
}
