import React, {Component} from 'react';


class Edit extends Component {
    constructor(props){
    super(props)

    this.state = {
      name: this.props.editedUser.name,
      favorite_food: this.props.editedUser.favorite_food,
    }
  }
  handleInput = (e) => {

    this.setState({[e.currentTarget.name]: e.currentTarget.value})
  }
  submitForm = (e) => {
    e.preventDefault();
    this.props.editCall(this.state)
  }
  render(){
    return (
         <form>
         
        </form>

      )
  }
}


export default Edit;
