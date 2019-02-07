import './LoginRegister.css'
import React, { Component } from 'react'
import LogIn from './login/Login'
import Register from './register/Register'
import { Cookies } from 'react-cookie'
import axios from 'axios'
const apihost = "localhost:8000/api"
export default class login extends Component {
    state = {
        login: true,
        loginActive: "active",
        registerActive: ""
    }
    async componentDidMount() {
        try {
            const token = Cookies.get('x-auth-token');
            if (token) {
                const user = await axios.get(apihost + "/User/me");
                if (user.id) {
                    this.props.history.push("/books");
                }
            }
        }catch(e){
            
        }
    }
    ChangeLogIn = () => {
        this.setState({ login: true, loginActive: "active", registerActive: "" });
    }
    ChangeRegister = () => {
        this.setState({ login: false, loginActive: "", registerActive: "active" });
    }
    render() {
        let Container = this.state.login ? <LogIn {...this.props} /> : <Register {...this.props} />
        return (
            <div className="login-box">
                <div className="lb-header">
                    <a onClick={this.ChangeLogIn} className={this.state.loginActive} >Login</a>
                    <a onClick={this.ChangeRegister} className={this.state.registerActive} >Sign Up</a>
                    {Container}
                </div>
            </div>
        );
    }
}