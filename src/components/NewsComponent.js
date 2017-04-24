/**
 * Created by chep on 24.04.17.
 */
import React, { Component } from 'react';
import "../assets/styles/normolize.css"

class NewsComponent extends Component{
    constructor(props){
        super(props);

        this.state = {
            dropdownState: false,
        };

        this.updateDropdownState = this.updateDropdownState.bind(this);
    }

    updateDropdownState(){
        this.setState({dropdownState: !this.state.dropdownState});
    }

    render(){
        return(
            <li className="">
                bla bla
            </li>
        );
    };
}

export default NewsComponent;