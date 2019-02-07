import '../../loginRegister/LoginRegister.css'
import React, { Component } from 'react'
import { Cookies } from 'react-cookie'
import axios from 'axios'

const apihost = 'localhost:8000/api/';
export default class Form extends Component {
    state = {
        title: "",
        summary: "",
        price: "",
        buttonName: "Add"

    }

    async componentDidMount() {
        //console.log(this.props.match.params.id);
        
        try {
            const token = Cookies.get('x-auth-token');
            if (!token) {
                this.props.history.push("/");
            }
            const user = await axios.get(apihost + "/User/me");
            if (!user.id) {
                this.props.history.push("/");
            }
        } catch (e) {
            console.log("heeeeeere shuld return to anther /")
            this.props.history.push("/");
        }

        if (this.props.match.params.id === "addNew") {

        } else {
            console.log("Heeere");
            this.setState({ title: "title", summary: "summary", price: "500", buttonName: "Edit" });
        }
    }
    changeTitle = (e) => {
        this.setState({ title: e.target.value });
    }
    changeSummary = (e) => {
        this.setState({ summary: e.target.value });
    }
    changePrice = (e) => {
        this.setState({ price: e.target.value });
    }
    Submit = (e) => {
        e.preventDefault();
        const obj = {
            title: this.state.title,
            price: this.state.price,
            summary: this.state.summary
        }
        console.log(obj);
    }
    render() {
        return (
            <form className="email-login">
                <div className="u-form-group">
                    <input type="text" value={this.state.title} onChange={this.changeTitle} placeholder="title" />
                </div>
                <div className="u-form-group">
                    <input type="text" value={this.state.summary} onChange={this.changeSummary} placeholder="summary" />
                </div>
                <div className="u-form-group">
                    <input type="text" value={this.state.price} onChange={this.changePrice} placeholder="price" />
                </div>

                <div className="u-form-group"  >
                    <button onClick={this.Submit} >{this.state.buttonName}</button>
                </div>
            </form>
        );
    }
}