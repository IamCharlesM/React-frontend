import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import request from 'superagent'
import Users from './UserList'

class App extends Component {
  constructor(){
    super()

    this.state = {
      allUsers: []
    }
  }

    // componentDidMount() {
        
    //     request
    //         .get('http://localhost:9292/fruits')
    //         .end((err, res) => {
    //           // console.log(err, res)
    //           const parsedFruits = JSON.parse(res.text);

    //           this.setState({AllFruits: [...parsedFruits]})
    //         })
    // }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <p>This is a test</p>

      </div>
    );
  }
}

export default App;
