/**
 * Created by Алексей on 11.05.2017.
 */
import React, {Component} from 'react'

const formStyle = {
    display: "flex",
    flexDirection: "column"
};

const inputStyle = {
    marginBottom: 45
};

const buttonStyle = {
    padding: 12,
    minWidth: 250,
    backgroundColor: '#00a2fb',
    color: 'white'
};

export default class FileAddition extends Component {
    render(){
        return(
            <form action="#" style={formStyle}>
                <input type="file" style={inputStyle}/>
                <button type="submit" style={buttonStyle}>Добавить аккаунты</button>
            </form>
        )
    }
}