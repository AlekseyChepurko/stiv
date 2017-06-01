/**
 * Created by Алексей on 12.05.2017.
 */
import React, {Component} from 'react'
import InputRange from 'react-input-range'
import './styles/inputRande.css'
const infoText = `Через сколько часов запустить МФ/МЛ после 
                окончания отписки?`;
const infoStyle = {
    fontSize: 16,
    maxWidth: 315,
    color: "#54565b",
    marginBottom: 44
};

const style = {
    display: "flex",
    flexDirection: "column"
};
export default class FormSubscribeTime extends Component {
    constructor(props){
        super(props);
        this.state = {
            value:  10,
        };
    }

    render() {
        return (
            <section>
                <p style={infoStyle}>{infoText}</p>
                <InputRange
                    maxValue={24}
                    minValue={0}
                    formatLabel={value => {
                        if (value > 4 && value  < 21 )
                            return `${value} часов`;
                        if (value % 10 > 1)
                            return `${value} часа`;
                        if (value === 0)
                            return `${value}`;
                        return `${value} час`;
                        }
                    }
                    value={this.state.value}
                    onChange={value => this.setState({ value })} />
                <input type="number" style={{display: "none"}} value={this.state.value}/>
            </section>
        )
    }
}