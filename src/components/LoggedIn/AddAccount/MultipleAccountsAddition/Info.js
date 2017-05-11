/**
 * Created by Алексей on 11.05.2017.
 */
import React, {Component} from 'react'
import InfoImg from './imgs/info.png'
//TODO file upload customize
const infoText = `В сентябре прошлого года южнокорейская компания обратилась к владельцам Galaxy Note 7 с рекомендацией выключить и как
можно скорее обменять аппараты, поскольку существует угроза их перегрева и возгорания. Причиной назывался дефект.`;

const styles = {
    maxWidth: 820,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: "#a0a9b5",
    marginBottom: 50,
    lineHeight: "20px"
};
const imgStyle = {
    height: 18,
    marginRight: 14
};

export default class Info extends Component {
    render(){
        return(
            <section className="info_block" style={styles}>
                <img src={InfoImg} alt="info" style={imgStyle}/>
                <p>{infoText}</p>
            </section>
        )
    }
}