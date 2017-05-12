/**
 * Created by Алексей on 11.05.2017.
 */
import React, {Component} from 'react'
import FormInfo from './FormInfo'
import FormUnsubscribe from './FormUnsubscribe'

const style = {
    minWidth: 403
};

export default class FormRight extends Component {
    render(){
        return(
            <section style={style}>
                <FormInfo/>
                <FormUnsubscribe/>
            </section>
        )
    }
}