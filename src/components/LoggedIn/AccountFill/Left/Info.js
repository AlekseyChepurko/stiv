/**
 * Created by Алексей on 13.05.2017.
 */
import React, {Component} from 'react'
import infoImg from '../imgs/info-gray.png'

const infoText = `В сентябре прошлого года южнокорейская компания обратилась к владельцам Galaxy 
можно скорее обменять аппараты, поскольку существует угроза их перегрева и `;

const style = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 27
};
const textStyle = {
    lineHeight: "1.428rem",
    color: "#7f8897",
    maxWidth: 530
};
export default class Info extends Component {
    render() {
        return (
            <section style={style}>
                <img src={infoImg} style={{marginRight: 14}} alt="info"/>
                <p style={textStyle}>{infoText}</p>
            </section>
        )
    }
}