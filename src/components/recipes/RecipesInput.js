import React, { Component } from 'react';
<<<<<<< HEAD
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

=======
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class RecipesInput extends Component {
  constructor(props){

    super(props)
    this.state = {name: '', calories: ''}
  }
  handleOnNameChange(event){
    // store.dispatch({type: 'UPDATE_FORM_INPUT', formNameInput: event.target.value})
    this.setState({name: event.target.value})
  }
  handleOnCaloriesChange(event){
    this.setState({calories: event.target.value})

  }
  handleSubmit(event){
    event.preventDefault()
    
    this.props.addRecipe(this.state.name, this.state.calories)
  }
>>>>>>> 2a64a47dd771c60cc42e31a7457e5df8e66a48c4
  render(){
    // debugger;
    let recipes = this.props.recipes.map((recipe) => {
      return <li> {recipe.name}</li>
    })
    return(
      <div>
<<<<<<< HEAD
        <form onSubmit={this.handleOnSubmit}>
          <label>Recipe Name </label>
          <input type="text" onChange={this.handleOnChange}/>
          <input type="submit" />
        </form>
        <ConnectedAddIngredients />
=======
      <form onSubmit={this.handleSubmit.bind(this)}>
        Create A Recipe
        <p>
          <label> Recipe Name </label>
          <input type="text" onChange={this.handleOnNameChange.bind(this)} value={this.state.name} />
        </p>
        <p>
          <label> Calories </label>
          <input type="text" onChange={this.handleOnCaloriesChange.bind(this)} value={this.state.calories} />
        </p>
        <input type="submit" />
      </form>
      <ul>
        {recipes}
      </ul>
>>>>>>> 2a64a47dd771c60cc42e31a7457e5df8e66a48c4
      </div>
    )
  }
}

<<<<<<< HEAD
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
=======
function addRecipe(name, calories){

  return {type: 'ADD_RECIPE', payload: {name: name, calories: calories} }
}


function mapStateToProps(state){
  console.log('the state is', state)
  return {recipes: state.recipes }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({addRecipe: addRecipe}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesInput)

// onSubmit={store.dispatch({type: 'ADD_RECIPE', payload: {name: this.state.name, calories: this.state.calories}})}
>>>>>>> 2a64a47dd771c60cc42e31a7457e5df8e66a48c4
