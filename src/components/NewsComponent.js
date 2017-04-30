/**
 * Created by chep on 24.04.17.
 */
import React, { Component } from 'react';
import NewsItem from './NewsItem';
import "../assets/styles/normolize.css"

class NewsTab extends Component{
    constructor(props){
        super(props);

        this.state = {
            active: this.props.active ? "active": " ",
        }
    }
    render(){
        const items = [];
        this.props.items.forEach((item, iter) => {
            items.push(
                React.createElement(NewsItem, {item, key: iter})
            );
        });

        return(
            <ul className={`news_tab tab_num_ ${this.props.num} ${this.state.active }` } >
                { items }
            </ul>
        );
    }
}

class NewsTabs extends Component{
    constructor(props){
            super(props);

            this.state = {
                active: this.props.active ? "active": " ",
            }
        }

    render(){
        const tabs = [],
              tabsRender = [];

        this.props.news.forEach( (item, iter) => {
            const index = Math.floor(iter/this.props.newsPerPage);
            if(tabs[index] === undefined)
                tabs[index] = [];
            tabs[index].push(item);
        })

        tabs.forEach( (item, iter) => {
                tabsRender.push(
                    React.createElement(NewsTab, {items: item, key:iter, num: iter+1, active: (iter+1) === this.props.currentPage ? true : false })
                )
            }
        );

        return(
            <ul className="news_wrapper">
                { tabsRender }
            </ul>
        );
    }
}

class NewsComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentPage: this.props.currentPage,
        };

    }

    updateCurentPage(num) {
        this.setState({currentPage: num})
    }

    render(){
        return(
            <section className="news">
                <NewsTabs news={this.props.news} newsPerPage={this.props.newsPerPage} currentPage={this.props.currentPage}/>
                <div className="tab_nuber_selector">
                    {/*{ inputs }*/}
                </div>
            </section>

        );
    };
}

NewsTabs.defaultProps = {
    num: 0,
    active: false,
}


NewsComponent.defaultProps = {
                            newsPerPage: 3,
                            currentPage: 2,
                            paeToShow: 3,

                            // props for news item: title, imgDir, imgName, creationDate, link, text
                            news: [{first: "first"}, {}, {}, {}, {}, {}, {}, {}, {}, {last:"last"}]
}

export default NewsComponent;