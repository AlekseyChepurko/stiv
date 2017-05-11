/**
 * Created by Алексей on 11.05.2017.
 */
import React, {Component} from 'react'


const style = {
    display: "flex",
    flexDirection: "row",
};

const titleStyle = {
    width: 145,
    merginRight: 20,
    color: "#51555b",
    fontSize: 16
};

const inputWrapStyle = {
    display: "flex",
    flexDirection: "column",
    marginBottom: 10
};

const textareaStyle = {
    minHeight: 121,
    marginBottom: 10
};
export default class FormItem extends Component {
    render(){
        const inputStyle = {
            padding: 13,
            paddingLeft: 15,
            backgroundColor: "#ecf1f4",
            border: "solid 1px #dce2e5",
            resize: "none",
            minWidth: 425,
            boxSizing: "border-box",
        };
        return(
            <section className="form_item" style={style}>
                <div className="title" style={titleStyle}>{this.props.item.title}</div>
                <div className="input_wrap" style={inputWrapStyle}>
                    {this.props.item.type==="textarea" ?
                        <textarea
                            style={Object.assign(inputStyle, textareaStyle)}
                            type={this.props.item.type}
                            placeholder={this.props.item.placeholder}
                            name={this.props.item.name}
                        /> :
                        <input
                            style={inputStyle}
                            type={this.props.item.type}
                            placeholder={this.props.item.placeholder}
                            name={this.props.item.name}
                            min="0"
                            step="0"
                        />
                    }

                    {this.props.item.uploadable ? <UploadButton/> : ""}
                </div>
            </section>
        )
    }
}

FormItem.defaultProps = {
    item: {
        title: "title",
        type: "text",
        placeholder: "placeholder",
        name: "",
        uploadable: false
    }
};

class UploadButton extends Component {
    render(){
        return(
            <input type="file"/>
        )
    }
}