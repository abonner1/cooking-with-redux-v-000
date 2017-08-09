import React, { Component } from 'react';
import {connect} from 'react-redux';
import {ConnectedAddIngredient} from './AddIngredient';
import {ConnectedIngredientsInput} from './IngredientsInput';
import {ConnectedIngredients} from './Ingredients';

export class AddIngredients extends Component {
  render(){

    const ingredients = this.props.selectedIngredients.map((ingredient, index) => {
      return <li key={index}>{ingredient.name}</li>
    })

    const addMore = this.props.unselectedIngredients.map((ingredient, index) => {
      return <ConnectedAddIngredient key={index} id={ingredient.id} name={ingredient.name}/>

    })

    return(
      <div>
        Ingredients:
          <ul>
            {ingredients}
          </ul>

          Available Ingredients:
          <br/>
          {addMore}
          <br/>
          Add Ingredient:
          <ConnectedIngredientsInput />
          <ConnectedIngredients />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  var selectedIngredients = [];
  var unselectedIngredients = [];

  for(var i = 0; i < state.ingredients.length; i++){
    if(state.recipeForm.ingredientIds.includes(state.ingredients[i].id)){
      selectedIngredients.push(state.ingredients[i]);
    }
    else{
      unselectedIngredients.push(state.ingredients[i]);
    }
  }

  return {
    ingredients: state.ingredients,
    selectedIngredients: selectedIngredients,
    unselectedIngredients: unselectedIngredients,
  }
}

export const ConnectedAddIngredients = connect(mapStateToProps)(AddIngredients);
