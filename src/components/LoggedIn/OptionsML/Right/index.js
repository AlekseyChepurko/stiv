/**
 * Created by Алексей on 11.05.2017.
 */
import React, {Component} from 'react'
import Header from '../Header'
import Accounts from'./Accounts'

const header = {
    title: '<b>Ваши</b> аккаунты',
    text: `Список аккаунтов для
            настройки мф/мл`
};

const style = {
    flex: 1,
    minWidth: 280,
    border: "1px solid #dce2e5"
};

export default class Right extends Component {
    render(){
        for(const item in this.props.style){
            Object.assign(style, { [item]: this.props.style[item] })
        }
        return(
            <section className="right_section" style={style}>
                <Header
                    header={header}
                    textMaxWidth={135}
                    paddingLeft={this.props.paddingLeft}/>
                <Accounts paddingLeft={this.props.paddingLeft}/>
            </section>
        )
    }
}