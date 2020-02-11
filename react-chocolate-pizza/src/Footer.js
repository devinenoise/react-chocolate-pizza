import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
    <footer>
          <div className="footer">
            <span><img src={this.props.smallLogo} alt="small logo" /></span>
          </div>
          <div>
            <p className="footer">Delicious &copy; 2013 </p> 
            <p className="footer"> All Rights Reserved.</p>
            <p className="footer">Proudly published with Ghost.</p>
          </div>
        </footer>

);
}
}