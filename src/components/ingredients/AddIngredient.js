import React, { Component } from 'react';
import { addIngredient } from '../../actions/ingredients';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


export class AddIngredient extends Component {
  constructor(props){
    super();

    this.handleButton = this.handleButton.bind(this);
  }

  handleButton(event){
    this.props.addIngredient(this.props.id)
  }

  render(){
    return(
      <div>
        {this.props.name}
        <button onClick={this.handleButton}>Add Ingredient</button>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addIngredient: addIngredient
  }, dispatch);
}

export const ConnectedAddIngredient = connect(null, mapDispatchToProps)(AddIngredient);
