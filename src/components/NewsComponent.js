/**
 * Created by chep on 24.04.17.
 */
import React, { Component } from 'react';
import NewsItem from './NewsItem';
import "../assets/styles/normolize.css"

class NewsTab extends Component{
    render(){
        const items = [];
        this.props.items.forEach((item, iter) => {
            items.push(
                React.createElement(NewsItem, {item, key: iter})
            );
        });

        return(
            <ul className={`news_tab tab_num_ ${this.props.num} ${this.props.active ? "active" : "" }` } >
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

class TabControl extends Component {
    constructor(props){
        super(props);

        this.setCurrentPage = this.setCurrentPage.bind(this.props.that);
    }

    setCurrentPage(event){
        this.setState({currentPage: Number(event.target.value)});
    };
    render(){
        const inputs = [];
        if(this.props.currentPage > 1)
            inputs.push(
                <label htmlFor="prev_tab" key="prev_tab" >
                    {this.props.currentPage - 1}
                    <input type="radio" className="tab_control" id="prev_tab" name="tab_control_item" value={this.props.currentPage - 1} onClick={this.setCurrentPage}/>
                </label>
            );
        inputs.push(
            <label htmlFor="current_tab" key="current_tab">
                {this.props.currentPage}
                <input type="radio" className="tab_control" id="current_tab" name="tab_control_item" value={this.props.currentPage} checked={true} onClick={this.setCurrentPage}/>
            </label>
        );
        if (this.props.currentPage < this.props.pageCount)
            inputs.push(
                <label htmlFor="next_tab" key="next_tab">
                    {this.props.currentPage + 1}
                    <input type="radio" className="tab_control" id="next_tab" name="tab_control_item" value={this.props.currentPage + 1} onClick={this.setCurrentPage}/>
                </label>
            );


        return(
            <div className="tab_nuber_selector">
                { inputs }
            </div>
        )
    }
}

class NewsComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentPage: this.props.currentPage,
        };

    }

    render(){
        return(
            <section className="news">
                <NewsTabs news={this.props.news} newsPerPage={this.props.newsPerPage} currentPage={this.state.currentPage}/>
                <TabControl currentPage={this.state.currentPage} that={this} pageCount={ Math.ceil(this.props.news.length/this.props.newsPerPage) } />
            </section>

        );
    };
}

NewsComponent.defaultProps = {
                            newsPerPage: 3,
                            currentPage: 3,
                            paeToShow: 3,
                            // props for news item: title, imgDir, imgName, creationDate, link, text
                            news: [{first: "first"}, {}, {}, {}, {}, {}, {}, {}, {}, {last:"last"}]
}

export default NewsComponent;