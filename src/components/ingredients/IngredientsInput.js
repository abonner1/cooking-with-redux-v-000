import React, { Component } from 'react';
import { createIngredient } from '../../actions/ingredients';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


export class IngredientsInput extends Component {

  constructor(){
    super();

    this.state = {
      name: "",
      calories: "",
    }
  }

  handleOnChange(event) {
    this.setState({
      name: event.target.value,
    })
  }

  handleCalChange(event) {
    this.setState({
      calories: event.target.value,
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.createIngredient(this.state)
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>New Ingredient Name </label>
          <input type="text" onChange={(event) => this.handleOnChange(event)}/>
          <br/>
          <label>New Ingredient Calories </label>
          <input type="text" onChange={(event) => this.handleCalChange(event)}/>
          <br/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createIngredient: createIngredient
  }, dispatch);
}

export const ConnectedIngredientsInput = connect(null, mapDispatchToProps)(IngredientsInput);
