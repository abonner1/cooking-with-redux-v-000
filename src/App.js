import React, { Component } from 'react';
<<<<<<< HEAD
import { Link } from 'react-router'


=======
import { Link, Route } from 'react-router-dom'
import ConnectedRecipesInput  from './components/recipes/RecipesInput'
import { ConnectedAddIngredients } from './components/ingredients/AddIngredients'
import ConnectedUsers  from './components/users/Users'
import ConnectedNewUser  from './components/users/NewUser'
import protectedComponent from './components/auth/protectedComponent'
>>>>>>> 2a64a47dd771c60cc42e31a7457e5df8e66a48c4
export class App extends Component {
  render() {
    return (
      <div className="App">
        Some stuff
        <Link to="/recipes/new"> Make a recipe</Link>
        <Route path="/ingredients" component={ConnectedAddIngredients} />
        <Route path="/recipes/new" component={ConnectedRecipesInput} />
        <Route path="/users" render={() => { return protectedComponent(<ConnectedUsers title="your user")/>}} />
        <Route path="/signup" component={ConnectedNewUser} />
      </div>
    );
  }
}

export default App;
