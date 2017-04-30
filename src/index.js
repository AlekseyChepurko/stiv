import React from 'react';
import ReactDOM from 'react-dom';
import promoLogoImg from '../public/assets/img/promo_logo.png';
import "./assets/styles/normolize.css"
import './assets/styles/index.css';
import App from './components/App';
import NewsComponent from "./components/NewsComponent";
import Statistics from "./components/Statistics";
ReactDOM.render(
    <App>
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
    </App>,
  document.getElementById('root')
)


