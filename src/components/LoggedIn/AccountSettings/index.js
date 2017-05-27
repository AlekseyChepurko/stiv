/**
 * Created by Алексей on 05.05.2017.
 */

import React, {Component} from 'react'
import Common from '../../common/Common'
import Left from './components/Left'
import Right from './components/Right'

const styles = {
    display: 'flex',
    flexDirection: 'row'
};

const headerStyles = {
    minHeight: 110,
    background: "#00a2fb",
    color: "white",
    padding: 24,
    paddingRight: 50,
    paddingLeft: 45,
    boxSizing: 'border-box',
};

const leftHeader = {
    title: <header><storng>Настройка</storng> аккаунта</header>,
    text: "В сентябре прошлого года южнокорейская компания можно скорее обменять аппараты, поскольку ",
    styles: headerStyles
};
const rightHeader = {
    title: <header><b>Оплата</b> аккаунта</header>,
    text: "В сентябре прошлого года южнокорейская компания можно скорее обменять аппараты, поскольку ",
    styles: headerStyles
};


export default class AcoountSettings extends Component {
    render(){

        return(
            <section className="account_settings" style={styles}>
                <Left header={leftHeader} />
                <Right header={rightHeader}/>
            </section>
        )
    }
}