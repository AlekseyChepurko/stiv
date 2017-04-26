/**
 * Created by chep on 24.04.17.
 */
import React, { Component } from 'react';
import NewsItem from './NewsItem';
import "../assets/styles/normolize.css"

class NewsComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentPage: this.props.currentPage,
        };

        this.updateDropdownState = this.updateDropdownState.bind(this);
    }

    updateDropdownState(){
        this.setState({dropdownState: !this.state.dropdownState});
    }


    render(){

        let items = [];

        this.props.news.forEach((newsItem,iterator) => {

            let toRender = React.createElement(NewsItem, {key: iterator});
            const props = {};
            for (let i in newsItem){
                Object.defineProperty(props, i, {value: newsItem[i], enumerable: true});
            }
             toRender = React.cloneElement(toRender, props);
            items.push(toRender);
        })

        return(
            <ul className="news_wrapper">
                { items }
            </ul>
        );
    };
}

NewsComponent.defaultProps = {
    newsPerPage: 3,
    currentPage: 1,
    // props for news item: title imgDir imgName creationDate link text
    news: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
}

export default NewsComponent;