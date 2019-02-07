
import '../LoginRegister.css'
import React, { Component } from 'react'
import axios from 'axios'
const apiHost = "http://localhost:8000/api"
export default class Register extends Component {
    state = {
        email: "",
        password: "",
        secondPassword: "",
        name: ""
    }
    passwordChange = (e) => {
        this.setState({ password: e.target.value });
    }

    secondPasswordChange = (e) => {
        this.setState({ secondPassword: e.target.value });
    }

    emailChange = (e) => {
        this.setState({ email: e.target.value });
    }
    nameChange = (e) => {
        this.setState({ name: e.target.value });
    }
    submit =  (e) => {
        e.preventDefault();
        if (this.state.password !== this.state.secondPassword) {
            return alert("reEnter pass word");
        }
        const obj = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            admin: false
        }
        console.log(obj);
        axios
            .post(apiHost + "/user", obj)
            .then(data => {
               console.log(data);
               this.props.history.push("/books");
            }).catch(e => {
                console.error("some thing get error");
            });

        

    }
    render() {
        return (


            <form className="email-signup">
                <div className="u-form-group">
                    <input type="text" onChange={this.nameChange} placeholder="Name" />
                </div>
                <div className="u-form-group">
                    <input type="email" onChange={this.emailChange} placeholder="Email" />
                </div>
                <div className="u-form-group">
                    <input type="password" onChange={this.passwordChange} placeholder="Password" />
                </div>
                <div className="u-form-group">
                    <input type="password" onChange={this.secondPasswordChange} placeholder="Confirm Password" />
                </div>
                <div className="u-form-group">
                    <button onClick={this.submit} >Sign Up</button>
                </div>
            </form>


        );
    }
}

