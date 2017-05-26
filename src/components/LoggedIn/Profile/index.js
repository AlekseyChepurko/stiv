/**
 * Created by Алексей on 04.05.2017.
 */

import React, {Component} from 'react';
import promoLogoImg from 'assets/img/promo_logo.png';
import '../../../assets/styles/index.css';
import NewsComponent from "../../../components/NewsComponent";
import Statistics from "../../../components/Statistics";
import {commonStyle} from 'Common/style/main'
import {profileStyle} from './style'
import info from 'Common/imgs/infoGray.png'

export default class Profile extends Component {

    render(){
        return(
            <section pageName="profile" style={commonStyle.content}>
                <Left />
                <Right/>
            </section>
        )
    };
}

class Left extends Component {
    render(){
        return(
            <section style={profileStyle.left}>
                <section style={profileStyle.left.promo}>
                    <img src={promoLogoImg} alt="promo_logo" style={profileStyle.left.promo.img}></img>
                    <section className="promo_content">
                        <form action="#" style={profileStyle.left.promo.content.form}>
                            <input
                                type="text"
                                name="promo_number"
                                style={profileStyle.left.promo.content.number}
                                placeholder="Введите промокод"/>
                            <button type="submit" style={profileStyle.left.promo.content.button} >Активировать</button>
                        </form>
                        <div style={profileStyle.left.promo.notice}>
                            <img src={info} alt="info" style={profileStyle.left.promo.notice.img}/>
                            <p>Если у вас есть промо код, введите его в форму ниже. Активация промо кода возможна только если у вас тариф  "Бесплатный".</p>
                        </div>
                    </section>
                </section>

                <section className="forum">
                    <div className="content">
                        <header>форум</header>
                        <div className="text">Если у вас есть промо код, введите его в форму ниже. Возможна только если у вас тариф  "Бесплатный".</div>
                    </div>
                    <button>
                        <a href="#">
                            присоединиться
                        </a>
                    </button>
                </section>

                <Statistics/>
            </section>
        )
    }
}

class Right extends Component {
    render(){
        return(
            <section className="right_wrapper">
                <section className="video">
                    {/* some content such video should be here */}
                    <button className="play"></button>
                </section>

                <NewsComponent />

            </section>
        )
    }
}