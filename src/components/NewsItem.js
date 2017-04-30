/**
 * Created by Алексей on 25.04.2017.
 */
import React, { Component } from 'react';
import "../assets/styles/normolize.css"
import '../assets/styles/components/NewsItem.css';

class NewsItem extends Component{
    constructor(props){
        super(props);

        this.state = {
            img: this.props.imgDir + this.props.imgName,
        };
    }

    render(){
        return(
            <li className="news_item wrapper">
                <img src={this.state.img} alt={this.props.title}/>
                <scetion className="news_content">
                    <header>
                        <div className="title"><a href={this.props.link}>{this.props.title}</a></div>
                        <div className="creation_date">{this.props.creationDate}</div>
                    </header>
                    <div className="content">{this.props.text}</div>
                </scetion>
            </li>
        );
    };
}

NewsItem.defaultProps = {
                        title: "Улучшенная навигация",
                        imgDir: "./assets/img/",
                        imgName: "defaultNewsImg.png",
                        creationDate: "24.03.2014",
                        link: "#",
                        text: "Если при получении новых карт, в колоде уже есть подобные, их можно объединять, создавая удивительные эффекты на выбор. Например, один и тот же герой в последстсм ожет стать танком защиты"
}

export default NewsItem;