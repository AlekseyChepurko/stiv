/**
 * Created by Алексей on 12.05.2017.
 */
import React, {Component} from 'react'
import infoImg from '../imgs/info_gray.png'

const style = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    maxWidth: 400,
    marginBottom: 35,
    color: "#7d8a9a"
};
const textStyle = {
    maxWidth: 325,
    lineHeight: "20px"
};
const imgStyle = {
    marginRight: 15
};
export default class FormInfo extends Component {
    render(){
        return(
            <section style={style}>
                <img src={infoImg} alt="info" style={imgStyle}/>
                <p style={textStyle}>В сентябре прошлого года южнокорейская компания можно скорее обменять аппараты, поскольку</p>
            </section>
        )
    }
}
