/**
 * Created by Алексей on 14.05.2017.
 */
import React, {Component} from 'react'
import Header from "../Header"

const header = {
    title: '<b>Сбор</b> по конкурентам',
    text: `В сентябре прошлого года южнокорейская компания обратилась к владельцам Galaxy
            можно скорее обменять аппараты, поскольку существует угроза их перегрева и воз`
};

const style = {
    minWidth: 1073,
    marginRight: 17
};
export default class Left extends Component {
    render(){
        return(
            <section style={style}>
                <Header
                    header={header}
                    textMaxWidth={530}
                    paddingLeft={this.props.paddingLeft}/>
            </section>
        )
    }
}