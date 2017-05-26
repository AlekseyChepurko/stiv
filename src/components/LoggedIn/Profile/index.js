/**
 * Created by Алексей on 04.05.2017.
 */

import React, {Component} from 'react';
import promoLogoImg from 'assets/img/promo_logo.png';
import '../../../assets/styles/index.css';
import NewsComponent from "../../../components/NewsComponent";
import Statistics from "../../../components/Statistics";
import Forum from './Forum'
import {commonStyle} from 'Common/style/main'
import {profileStyle} from './style/main'
import {promo} from './style/left'
import {right, video, playBtn} from './style/right'

import info from 'Common/imgs/infoGray.png'

export default class Profile extends Component {

    render(){
        return(
            <section style={commonStyle.content}>
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
                <section style={promo}>
                    <img src={promoLogoImg} alt="promo_logo" style={promo.img}></img>
                    <section className="promo_content">
                        <form action="#" style={promo.content.form}>
                            <input
                                type="text"
                                name="promo_number"
                                style={promo.content.number}
                                placeholder="Введите промокод"/>
                            <button type="submit" style={promo.content.button} >Активировать</button>
                        </form>
                        <div style={promo.notice}>
                            <img src={info} alt="info" style={promo.notice.img}/>
                            <p>Если у вас есть промо код, введите его в форму ниже. Активация промо кода возможна только если у вас тариф  "Бесплатный".</p>
                        </div>
                    </section>
                </section>
                <Forum/>
                <Statistics/>
            </section>
        )
    }
}

class Right extends Component {
    render(){
        return(
            <section className="right_wrapper" style={right}>
                <section className="video" style={video}>
                    {/* some content such video should be here */}
                    <button className="play" style={playBtn}></button>
                </section>

                <NewsComponent />

            </section>
        )
    }
}