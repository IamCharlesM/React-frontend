import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import request from 'superagent'
import Users from './UserList'
import Edit from './Edit'

class App extends Component {
  constructor(){
    super()

    this.state = {
      AllUsers: [],
      editedUser: ''
    }
  }

    componentDidMount() {
        
        request
            .get('http://172.20.0.139:9292/user')
            .end((err, res) => {
              // console.log(err, res)
              const parsedUsers = JSON.parse(res.text);
console.log(parsedUsers.users)
              this.setState({AllUsers: [...parsedUsers.users]})
            })
    }
    deleteUser = (e) => {

      // console.log(e.currentTarget.id, ' id of user')
      const id = e.currentTarget.id
      // console.log(id, ' id')
      request
        .delete('http://172.20.0.139:9292/user/' + id)
        .end((err, deletedUser) => {
          console.log(deletedUser)
          if(deletedUser){
            const state = this.state
            state.AllUsers.filter(user => user.id !== id  )
            this.setState(state)
          }
        })
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Users allUsers={this.state.AllUsers} deleteUser={this.deleteUser}/>
        <Edit editedUser={this.state.editedUser} />
        <p>This is no longer a test</p>

      </div>
    );
  }
}

export default App;
