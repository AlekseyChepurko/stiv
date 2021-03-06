/**
 * Created by Алексей on 11.05.2017.
 */
import React, {Component} from 'react'
import Header from '../Header'
import Form from './Form'

const header = {
    title: '<b>Настройка</b> МФ/МЛ',
    text: `В сентябре прошлого года южнокорейская компания обратилась к владельцам Galaxy
            можно скорее обменять аппараты, поскольку существует угроза их перегрева и воз`
};

const style = {
    marginRight: 20,
    minWidth: 1220,
    border: "1px solid #dce2e5"
};
export default class Left extends Component {
    render(){
        const commonStyles = Object.assign({}, style, this.props.style);
        return(
            <section className="left_section" style={commonStyles}>
                <Header
                    header={header}
                    textMaxWidth={530}
                    paddingLeft={this.props.paddingLeft}/>
                <Form/>
            </section>
        )
    }
}