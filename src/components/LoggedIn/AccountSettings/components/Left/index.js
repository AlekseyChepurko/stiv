/**
 * Created by Алексей on 05.05.2017.
 */

import React, {Component} from 'react'
import Header from '../Common'
import './assets/styles/main.css'
import AvatarImage from './assets/imgs/avatar_default.png'

export default class Left extends Component {
    render(){

        return(
            <section className="left">
                <Header header={this.props.header}/>

                <main>
                    <form action="#">
                        <div className="input_wrap" id="avatar_upload">
                            <img src={AvatarImage} alt="текущий аватар"/>
                            <input type="file" name="avatar" className="avatar_upload" value="Изменить автарку"/>
                        </div>

                        <div className="input_wrap" id="oldPassword">
                            <input type="password" name="oldPassword" className="password"/>
                        </div>

                        <div className="input_wrap" id="newPassword">
                            <input type="password" name="newPASsword" className="password validates"/>
                        </div>

                        <div className="input_wrap" id="newPasswordRepeated">
                            <input type="password" name="newPasswordRepeated" className="password valdates"/>
                        </div>

                        <section id="info_block">
                            В сентябре прошлого года южнокорейская компания обратилась к владельцам Galaxy можно скорее обменять аппараты, поскольку существует угроза их перегрева и
                        </section>

                        <div className="input_wrap" id="email">
                            <input type="email" name="email" className="email"/>
                        </div>

                        <button type="submit">сохранить</button>

                    </form>
                </main>
            </section>
        )
    }
}