/**
 * Created by Алексей on 04.05.2017.
 */

import React, {Component} from 'react';
import promoLogoImg from '../../../../public/assets/img/promo_logo.png';
import '../../../assets/styles/index.css';
import NewsComponent from "../../../components/NewsComponent";
import Statistics from "../../../components/Statistics";
import Common from "../../common/Common";

class Profile extends Component {

    render(){
        return(
            <Common>
                <section className="left_wrapper">
                    <section className="promo">
                        <img src={promoLogoImg} className="promo_img" alt="promo_logo"></img>
                        <section className="promo_content">
                            <form action="#" className="promo_form">
                                <input type="text" id="promo_number" name="promo_number" placeholder="Введите промокод"/>
                                <button type="submit">активировать</button>
                            </form>
                            <div className="promo_notice">Если у вас есть промо код, введите его в форму ниже. Активация промо кода возможна только если у вас тариф  "Бесплатный".</div>
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

                <section className="right_wrapper">
                    <section className="video">
                        {/* some content such video should be here */}
                        <button className="play"></button>
                    </section>

                    <NewsComponent />

                </section>
            </Common>
        )
    };
}

export default Profile;