/**
 * Created by Алексей on 11.05.2017.
 */
import React, {Component} from 'react'
import FormInfo from './FormInfo'
import FormUnsubscribe from './FormUnsubscribe'
import FormSubscribeTime from './FormSubscribeTime'

const style = {
    minWidth: 403
};

export default class FormRight extends Component {
    render(){
        return(
            <section style={style}>
                <FormInfo/>
                <FormUnsubscribe/>
                <FormSubscribeTime/>
            </section>
        )
    }
}
