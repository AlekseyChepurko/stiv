/**
 * Created by Алексей on 11.05.2017.
 */

import React, {Component} from 'react'
import InfoImg from './imgs/info.png'

const infoText = "Выберите вариант добавления аккаунта - Стандартный или Продвинутый (второй для вас если вы знаете что такое прокси, UserID и т.д.)"

const blockStyles = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: "#7e94a2",
    marginBottom: 20
};
const textStyle = {
    maxWidth: 455,
    lineHeight: "20px"
};
const imgStyle = {
    marginRight: 15
};
export default class Info extends Component {
    render(){
        return(
            <section className="info_block" style={blockStyles}>
                <img src={InfoImg} alt="info img" style={imgStyle}/>
                <p className="info_text" style={textStyle}>{infoText}</p>
            </section>
        )
    }
}