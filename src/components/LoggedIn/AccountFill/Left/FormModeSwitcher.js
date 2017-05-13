/**
 * Created by Алексей on 13.05.2017.
 */
import React, {Component} from 'react'

const style = {
    display: "flex",
    flexDirection: "row",
    marginBottom: 19
};
const textStyle = {
    fontSize: "1.5rem",
    color: "#54565b",
    marginRight: 19,
};

export default class FormModeSwitcher extends Component {
    render(){
        return(
            <section style={style}>
                <p style={textStyle}><b>Наполнение</b> аккаунта</p>
                <div style={{
                    border: "1px solid #00a2fb",
                    borderRadius: 2
                }}>
                    <Button text="Стандарт"
                            formMode="simple"
                            parent={this.props.parent}
                            active={this.props.formMode === "simple" ? true : false}/>
                    <Button text="Расширенный"
                            formMode="advanced"
                            parent={this.props.parent}
                            active={this.props.formMode === "advanced" ? true : false} />
                </div>
            </section>
        )
    }
}
const buttonStyle = {
    minHeight: 27,
    minWidth: 120,
    transition: "background-color 0.3s"
};
class Button extends Component {
    constructor(props){
        super(props);
        this.switchFormMode = this.switchFormMode.bind(this);
    }
    switchFormMode() {
        if (!this.props.active){
            this.props.parent.setState({formMode: this.props.formMode})
        }
    }
    render(){
        Object.assign(buttonStyle, {
            backgroundColor: this.props.active ? "#00a2fb" : "white",
            color: this.props.active ? "white" : "#00a2fb",
        });

        return(
            <button style={buttonStyle} onClick={this.switchFormMode}>{this.props.text}</button>
        )
    }
}
