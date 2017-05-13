/**
 * Created by chep on 12.05.17.
 */

import React, {Component} from 'react'
import FormModeSwitcher from './FormModeSwitcher'
import FormSimple from './FormSimple'
import FormAdvanced from './FormAdvanced'
import Info from './Info'

const style = {
    minWidth: 1060,
    marginRight: 17,
    paddingTop: 58,
    boxSizing: "border-box",
    paddingLeft: 68,
    border: "1px solid #dce2e5",
    backgroundColor: "white",
};

export default class Left extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formMode: "simple"
        };
        this.submit = this.submit.bind(this);
    }
    submit(e){
        e.preventDefault();
        console.log("filling starting");
    }
    render() {
        return (
            <section style={style}>
                <FormModeSwitcher
                    parent={this}
                    formMode={this.state.formMode}/>
                <Info/>
                <form action="#" onSubmit={this.submit}>
                    {this.state.formMode === "simple" ?
                        <FormSimple/> :
                        <FormAdvanced/>
                    }
                </form>
            </section>
        )
    }
}