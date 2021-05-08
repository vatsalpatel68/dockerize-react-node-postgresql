import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {

  componentDidMount() {
    axios.get("http://localhost:8000/")
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }
  render() {
    return (
      <div className="App" >
        <h1>Hello world</h1>
      </div>
    );
  }
}

export default App;
