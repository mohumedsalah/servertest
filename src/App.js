import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import LoginRegister from './Containers/loginRegister/LoginRegister'
import Books from './Containers/BookCollection/Books'
import {Route} from 'react-router-dom'
import BookForm from './Containers/BookCollection/Form/From'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/Books"  exact  component={Books}  />
        <Route path="/Books/:id"   component={BookForm}  />
        <Route path="/" exact component={LoginRegister}  />
      </div>
    );  
  }
}

export default App;
