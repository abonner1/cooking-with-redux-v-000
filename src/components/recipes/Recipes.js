import React, { Component } from 'react';
import {connect} from 'react-redux';

export class Recipes extends Component {
  render(){
    const recipes = this.props.recipes.map((recipe, index) => {
      return <li key={index}>{recipe.name}</li>
    })

    return(
        <div>
          Recipes:
          <ul>
<<<<<<< HEAD
            {recipes}
=======
            
>>>>>>> 2a64a47dd771c60cc42e31a7457e5df8e66a48c4
          </ul>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {recipes: state.recipes}
}

export const ConnectedRecipes = connect(mapStateToProps)(Recipes);
