import React, { Component } from "react";
// import "./stylesheet/stylesheet.css";


export default class Header extends Component {
    render() {
    return (
        <header>
        <div>
            <img src= {this.props.logo} alt="logo"/>
              <span className = "delicious">Delicious</span>
              <br />
              <h3>The best food blog on the web</h3>
          </div>
          <div>
            <img src= {this.props.fb} className="socials" alt="facebook" />
            <img src={this.props.twit} className="socials" alt="twitter"/>
            <img src={this.props.gp} className="socials" alt="google plus" />
            <img src={this.props.insta} className="socials" alt="instagram" />
            <img src={this.props.flic} className="socials" alt="flicker" />
            <img src={this.props.pintIcon} className="socials" alt="pinterest" />
            <img src={this.props.rss} id="rss" className="socials"  alt="rss feed" />
            <img src={this.props.mail} className="socials" alt="email"/>
          </div>
        </header>


);
  }
}
