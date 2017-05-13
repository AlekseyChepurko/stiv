/**
 * Created by Алексей on 13.05.2017.
 */
import React, {Component} from 'react'
import NumericInput from 'react-numeric-input'
const timeInputStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
};
const timePartstyle = {
    input: {
        padding: 0,
        backgroundColor: "#00a2fb",
        color: "white",
        width: 44,
        height: 39,
        border: "none",
        borderRadius: 5,
        textAlign: "center",
        marginRight: 3,
        marginLeft: 3
    }
};
export default class TimeInput extends Component {
    render() {
        return (
            <section style={timeInputStyle} className="number input no_arrows">

                <p style={{marginLeft: 18, marginRight: 10, color: "#54565b"}}>с</p>
                <NumericInput
                    name="startHors"
                    style={timePartstyle}
                    min={0}
                    max={24}/>:
                <NumericInput
                    name="startMinutes"
                    style={timePartstyle}
                    min={0}
                    max={59}/>
                <p style={{margin: 10, color: "#54565b"}}>до</p>
                <NumericInput
                    name="endHours"
                    style={timePartstyle}
                    min={0}
                    max={24}/>:
                <NumericInput
                    name="endMinutes"
                    style={timePartstyle}
                    min={0}
                    max={59}/>
            </section>
        )
    }
}
