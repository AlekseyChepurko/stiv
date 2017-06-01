/**
 * Created by Алексей on 01.06.2017.
 */

import React, {Component} from 'react'
import {mainColors} from 'Common/style/variables'
import infoImg from 'Common/imgs/infogray.png'

const styleInfo = {
    color: mainColors.infoText,
    lineHeight: "1.25rem",
    maxWidth: 530
};
export default class Header extends Component {
    render(){
        return <section>
                    <section style={{fontSize: "1.3125rem", marginBottom: 18}}><strong>Список</strong> ваших аккаунтов</section>
                    <section style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <img src={infoImg} alt="info" style={{maxHeight: 18, marginRight: 14}}/>
                        <section style={styleInfo}>В сентябре прошлого года южнокорейская компания обратилась к владельцам Galaxy можно скорее обменять аппараты, поскольку существует угроза их перегрева и воз</section>
                    </section>
                </section>
    }
}