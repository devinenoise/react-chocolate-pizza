import React, { Component } from "react";

export default class Title extends Component {
  render() {
    return (
    <div>
        <div id="texture-box"></div>
        <h1>Chocolate Pizza</h1>
              <span>Posted on {this.props.date} / Desserts</span>
              <span><img src={this.props.print} alt="print"/> Print</span>
    </div>
         
 );
  }
}