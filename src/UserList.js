import React, { Component } from 'react'



class Users  extends Component {
    
    editUser = (e) => {
        console.log(e.currentTarget.id)

    }

    render() {
        const AllUsers = this.props.allUsers.map((user, i) => {
            return <li key={i} id={user.id}>{user.name} - {user.favorite_food}<button  onClick={this.props.deleteUser}>delete</button><button id={user.id} onClick={this.editUser}>EDDET</button></li>
        })
        
        return (
            <div id="whatever">
            <ul>
            {AllUsers}
            </ul>
            </div>
        )
    }
}

export default Users;