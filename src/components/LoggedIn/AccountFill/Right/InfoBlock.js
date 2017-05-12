/**
 * Created by Алексей on 13.05.2017.
 */
import React, {Component} from 'react'
import infoImg from '../imgs/info-gray.png'

const style = {
    border: "1px solid #dce2e5",
    paddingLeft: 36,
    paddingTop: 55,
    paddingBottom: 55,
    backgroundColor: "white",
    maxHeight: 830
};
export default class InfoBlock extends Component {
    render(){
        const news = [];
        this.props.news.forEach((item, iter) => {
            news.push(
                React.createElement(Line,{
                    key: iter,
                    text: item
                })
            );
        });
        return(
            <ul style={style}>
                {news}
            </ul>
        )
    }
}
InfoBlock.defaultProps = {
    news: [
        `В сентябре прошлого года южнокорейская компания 
        обратилась к владельцам Galaxy Note 7 с рекомендацией 
        выключить и как можно скорее обменять аппараты, 
        поскольку существует угроза их перегрева и возгорания. 
        Причиной назывался дефект.`,

        `В сентябре прошлого года южнокорейская компания 
        обратилась к владельцам Galaxy Note 7 с рекомендацией 
        выключить и как можно скорее обменять аппараты, 
        поскольку существует угроза их перегрева и возгорания. 
        Причиной назывался дефект.`,

        `В сентябре прошлого года южнокорейская компания 
        обратилась к владельцам Galaxy Note 7 с рекомендацией  
        Причиной назывался дефект.`,

        `В сентябре прошлого года южнокорейская компания 
        обратилась к владельцам Galaxy Note 7 с рекомендацией  
        Причиной назывался дефект.`,

        `В сентябре прошлого года южнокорейская компания 
        обратилась к владельцам Galaxy Note 7 с рекомендацией  
        Причиной назывался дефект.`
    ]
};

const lineStyle = {
    display: "flex",
    flexDirection: "row",
    marginBottom: 47,
};
const textStyle = {
    maxWidth: 352,
    color: "#a0a9b5",
    lineHeight: "1.428rem",
};
class Line extends Component {
    render(){
        return(
            <li style={lineStyle}>
                <img src={infoImg} alt="info" style={{marginRight: 13, maxHeight: 17}}/>
                <p style={textStyle}>{this.props.text}</p>
            </li>
        )
    }
}