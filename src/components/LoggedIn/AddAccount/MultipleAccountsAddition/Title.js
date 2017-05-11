/**
 * Created by Алексей on 11.05.2017.
 */
import React, {Component} from 'react'

const style = {
    fontSize: 21,
    marginBottom: 17
};

export default class Title extends Component {
    render(){
        return(
            <section className="title_block" style={style} >
                <b>Более одного</b> аккаунта? Добавьте их списком
            </section>
        )
    }
}