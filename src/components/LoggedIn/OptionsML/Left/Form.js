/**
 * Created by Алексей on 11.05.2017.
 */
import React, {Component} from 'react'
import FormLeft from './FormLeft'
import FormRight from './FormRight'

const style = {
  paddingLeft: 70,
    paddingTop: 30,
    display: "flex",
    flexDirection: "row"
};

export default class Form extends Component {
    constructor(props){
        super(props);
        this.formSubmit = this.formSubmit.bind(this);
    }
    formSubmit(e){
        e.preventDefault();
        console.log("Sending data...");
    }
    render(){
        return(
            <form action="#" onSubmit={this.formSubmit} style={style}>
                <FormLeft/>
                <FormRight/>
            </form>
        )
    }
}