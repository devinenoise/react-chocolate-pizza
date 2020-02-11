import React, { Component } from "react";


export default class Recipe extends Component {
  render() {
    return (
          <div className="recipe">
             
              <div><input type="checkbox"/> {this.props.ingredientOne} </div>
              <div><input type="checkbox"/> {this.props.ingredientTwo} </div>
              <div><input type="checkbox"/> {this.props.ingredientThree} </div>
              <div><input type="checkbox"/>{this.props.ingredientFour}</div>
              <div><input type="checkbox"/>{this.props.ingredientFive}</div>
              <div><input type="checkbox"/>{this.props.ingredientSix}</div>
              <div><input type="checkbox"/>{this.props.ingredientSeven}</div>
              <div><input type="checkbox"/>{this.props.ingredientEight}</div>
              <div><input type="checkbox"/>{this.props.ingredientNine}</div>
              <div><input type="checkbox"/>{this.props.ingredientTen}</div>
              <div><input type="checkbox"/>{this.props.ingredientEleven}</div>
          </div>    

        
          );
  }
}