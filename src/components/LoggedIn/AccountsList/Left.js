/**
 * Created by Алексей on 11.05.2017.
 */
import React, {Component} from 'react'
import Header from './Header'

const header = {
    title: '<b>Настройка</b> МФ/МЛ',
    text: `В сентябре прошлого года южнокорейская компания обратилась к владельцам Galaxy
            можно скорее обменять аппараты, поскольку существует угроза их перегрева и воз`
};

const style = {
    marginRight: 20,
    minWidth: 1220
};

export default class Left extends Component {
    render(){
        for(const item in this.props.style){
            Object.assign(style, { [item]: this.props.style[item] })
        }
        return(
            <section className="left_section" style={style}>
                <Header header={header} textMaxWidth={530} paddingLeft={this.props.paddingLeft}/>
            </section>
        )
    }
}