import React, { Component } from 'react';
import { addRecipe } from '../../actions/recipes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ConnectedIngredients } from '../ingredients/Ingredients';
import { ConnectedAddIngredients } from '../ingredients/AddIngredients';

export class RecipesInput extends Component {
  constructor(){
    super();

    this.state = {
      name: ""
    }
  }

  handleOnChange = (event) => {
    this.setState({
      name: event.target.value,
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    var recipe = {...this.state, ingredientIds: this.props.ingredientIds}
    this.props.addRecipe(recipe);
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Recipe Name </label>
          <input type="text" onChange={this.handleOnChange}/>
          <input type="submit" />
        </form>
        <ConnectedAddIngredients />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ingredientIds: state.recipeForm.ingredientIds
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addRecipe: addRecipe
  }, dispatch);
}

export const ConnectedRecipesInput = connect(mapStateToProps, mapDispatchToProps)(RecipesInput);
