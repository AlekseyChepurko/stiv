/**
 * Created by Алексей on 13.05.2017.
 */
import React, {Component} from 'react'
import defaultAvatar from '../imgs/defaultAvatat.png'

const style = {
    backgroundColor: "#00a2fb",
    color: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 100
};
const accountNameStyle = {
    fontSize: "1.57rem",
    marginBottom: 8
};
export default class Header extends Component {
    render(){
        return(
            <section style={style}>
                <section style={{marginRight: 27}}>
                    <p style={accountNameStyle}>{this.props.accountName}</p>
                    <p style={{fontSize: "1.143rem"}}>Тематика: <b>{this.props.theme}</b></p>
                </section>
                <img src={this.props.image} alt="avatar" style={{maxHeight: 71}}/>
            </section>
        )
    }
}

Header.defaultProps = {
    accountName: "polykov_alex",
    theme: "Спорт",
    image: defaultAvatar
};