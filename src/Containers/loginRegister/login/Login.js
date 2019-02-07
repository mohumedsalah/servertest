import '../LoginRegister.css'
import React, { Component } from 'react'

export default class LogIn extends Component {
  constructor(props){
    super(props);
  }
  state = {
    email: "",
    password: ""
  }
  ChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  }
  ChangePassword = (e) => {
    this.setState({ password: e.target.value });
  }
  Submit = (e) => {
    e.preventDefault();
    const obj = {
      email: this.state.email,
      password: this.state.password
    }
    console.log(this.props);
    this.props.history.push("/books");
  }
  render() {
    return (
      <form className="email-login">
        <div className="u-form-group">
          <input type="email" onChange={this.ChangeEmail} placeholder="Email" />
        </div>
        <div className="u-form-group">
          <input type="password" onChange={this.ChangePassword} placeholder="Password" />
        </div>
        <div className="u-form-group"  >
          <button onClick={this.Submit} >Log in</button>
        </div>
      </form>
    );
  }
}