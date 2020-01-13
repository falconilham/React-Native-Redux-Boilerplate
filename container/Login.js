import React, {useState} from 'react'
import {View, Text, TextInput} from 'react-native';
import FormUI from '../components/';

const LoginField = [
    {
        type: "Text",
        fieldname : "Username"
    },
    {
        type: "Password",
        fieldname: "Password"
    }
]

export default class Login extends React.Component{
    constructor(){
        super();
        this.state = {
            Username: "",
            Password: ""
        }
    }

    changeState = (value, fieldname) => {
        this.setState({
            fieldname: value
        })
    }
    render(){
        console.log(this.state)
        const { Username, Password } = this.state
        return(
            <React.Fragment>
                <FormUI
                    data={LoginField}
                    UserState={Username}
                    PassState={Password}
                    changeState={this.changeState}
                />
            </React.Fragment>
        )
    }
    
}