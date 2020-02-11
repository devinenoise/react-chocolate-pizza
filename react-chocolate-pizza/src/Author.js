import React, { Component } from "react";

export default class Author extends Component {
  render() {
    return (
    <div>
    <div id="texture-box"></div>
    <img src={this.props.authorPic}  className ="author"/><span>
    <h5>Vanessa Stevenson</h5>
    <p>Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.</p>
    <button>Share Recipe</button></span>
    </div>

);
  }
}