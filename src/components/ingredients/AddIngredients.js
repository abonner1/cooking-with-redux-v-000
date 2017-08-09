import React, { Component } from 'react';
<<<<<<< HEAD
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
=======
import { connect } from 'react-redux'
import { AddIngredient } from './AddIngredient'

export class AddIngredients extends Component {
  render(){
    let selectedIngredients = this.props.selectedIngredients.map((selectedIngredient) => {
      return <li> {selectedIngredient.name}</li>
    })
    return(
    <div>
      {selectedIngredients}
    </div>
>>>>>>> 2a64a47dd771c60cc42e31a7457e5df8e66a48c4
    )
  }
}

<<<<<<< HEAD
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
=======
function findIngredient(ingredientId, ingredients){
  return ingredients.find((ingredient) => { return ingredient.id === ingredientId })
}

function selectedIngredients(ingredientIds, ingredients){
  return ingredientIds.map(function (ingredientId) {
    return findIngredient(ingredientId, ingredients)
  })
}

function mapStateToProps(state){
  return {selectedIngredients: selectedIngredients(state.recipeForm.ingredientIds, state.ingredients), unselectedIngredients: selectedIngredients(allExcept(state.recipeForm.ingredientIds, state.ingredients), state.ingredients)}
}


function allExcept(ingredientIds, ingredients){
  return ingredients.filter((ingredient) => {
    return !ingredientIds.include(ingredient)
  }).map((ingredient) => { return ingredient.id })
  // {} -> [1, 2, ]
}




export const ConnectedAddIngredients =  connect(mapStateToProps)(AddIngredients)

// map
  // same number of output as input, coerce each element
// select
  // smaller array
// forEach
  // don't care about the return value, take an action
// {ingredientIds: [1, 2]}



// let selectedIngredients =
>>>>>>> 2a64a47dd771c60cc42e31a7457e5df8e66a48c4
