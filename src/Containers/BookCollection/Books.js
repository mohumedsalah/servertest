import React, { Component } from 'react'
import { Cookies } from 'react-cookie'
import './Books.css'
import axios from 'axios'
const apihost = 'localhost:8000/api/';

export default class Books extends Component {

  state = {
    admin: true,
    books: [
      { _id: 1, title: "book1", price: 50, summary: "summary 111", created: "5/2/2011" },
      { _id: 2, title: "book1", price: 50, summary: "summary 111", created: "5/2/2011" },
      { _id: 3, title: "book1", price: 50, summary: "summary 111", created: "5/2/2011" },
    ]
  }
  addNew = () => {
    this.props.history.push("/books/addNew");
  }
  editOne = (id) => {
    this.props.history.push("/books/" + id);
  }
  deleteOne = (id) => {
    console.log("delete one :", id);
  }

  async componentDidMount() {
    try {
      const token = Cookies.get('x-auth-token');
      if (!token) {
        this.props.history.push("/");
      }
      const user = await axios.get(apihost + "/User/me");
      if (!user.id) {
        this.props.history.push("/");
      }
    }catch(e){
      this.props.history.push("/");
    }
  }
  render() {
    let tagOperatorHeader = null
    let dataTable = null;
    if (this.state.admin) {
      tagOperatorHeader = (<th>Operator</th>)
    }
    const dataBook = [...this.state.books];
    //console.log(dataBook);
    dataTable = dataBook.map(element => {
      return (
        <tr>
          <td>{element.title}</td>
          <td>{element.price}</td>
          <td>{element.summary}</td>
          <td>{element.created}</td>
          <td>
            <button onClick={() => { this.editOne(element._id) }} >Edit</button>
            <button onClick={() => { this.deleteOne(element._id) }} >Delete</button>
          </td>
        </tr>
      )
    });
    return (
      <div className="row">
        <div className="large-12 columns">
          <h1>Books</h1>
          <p><a onClick={this.addNew} ><i className="fa fa-plus-square"></i>Add Vehicle</a></p>
          <table id="test-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>price</th>
                <th>Summary</th>
                <th>Created</th>
                {tagOperatorHeader}
              </tr>
            </thead>
            <tfoot></tfoot>
            <tbody>
              {dataTable}
            </tbody>
          </table>

        </div>
      </div>
    );
  }
}