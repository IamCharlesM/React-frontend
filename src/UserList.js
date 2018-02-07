import React, { Component } from 'react'



class allUsers  extends Component {
    
    render() {
        const AllUsers = this.props.allUsers.map((user, i) => {
            return <li key={i}>{user.name}</li>
        })
        
        return (
            <ul>
            {AllUsers}
            </ul>
        )
    }
}

export default allUsers;