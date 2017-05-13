/**
 * Created by Алексей on 14.05.2017.
 */
import React, {Component} from 'react'
import Header from "../Header"

const header = {
    title: '<b>История</b> запросов',
    text: `В сентябре прошлого года южнокорейская компания 
            можно скорее обменять аппараты, поскольку `
};

const style = {
    minWidth: 452
};
export default class Right extends Component {
    render(){
        return(
            <section style={style}>
                <Header
                    header={header}
                    textMaxWidth={326}
                    paddingLeft={this.props.paddingLeft}/>
            </section>
        )
    }
}