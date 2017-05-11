/**
 * Created by chep on 10.05.17.
 */

import React, {Component} from 'react'

const titleText = "Добавьте <b>Instagram</b> аккаунт, чтобы начать его наполнение и расскрутку";
const styles = {
    color: "white",
    fontSize: 21,
    maxWidth: 395,
    textAlign: "center",
    marginBottom: 30,
    marginTop: 30
}

export default class Title extends Component {
    render(){
        return(
            <section
                className="addition_title"
                style={styles}
                dangerouslySetInnerHTML={{__html: titleText}}
            >
            </section>
        )
    }
}