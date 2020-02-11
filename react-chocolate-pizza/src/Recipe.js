import React, { Component } from "react";


export default class Recipe extends Component {
  render() {
    return (
          <div className="recipe">
             
              <div className="item"><input type="checkbox"/> {this.props.ingredientOne} </div>
              <div className="item"><input type="checkbox"/> {this.props.ingredientTwo} </div>
              <div className="item"><input type="checkbox"/> {this.props.ingredientThree} </div>
              <div className="item"><input type="checkbox"/>{this.props.ingredientFour}</div>
              <div className="item"><input type="checkbox"/>{this.props.ingredientFive}</div>
              <div className="item"><input type="checkbox"/>
              {this.props.ingredientSix}</div>
              <div className="item"><input type="checkbox"/>{this.props.ingredientSeven}</div>
              <div className="item"><input type="checkbox"/>{this.props.ingredientEight}</div>
              <div className="item"><input type="checkbox"/>{this.props.ingredientNine}</div>
              <div className="item"><input type="checkbox"/>{this.props.ingredientTen}</div>
              <div className="item"><input type="checkbox"/>{this.props.ingredientEleven}</div>
          </div>    

        
          );
  }
}