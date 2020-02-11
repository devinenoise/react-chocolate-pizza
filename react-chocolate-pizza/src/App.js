//components
import React from 'react';
import Header from "./Header.js"
import Article from "./Article.js"
import Author from "./Author.js"
import Title from "./Title.js"
import Footer from "./Footer.js"
import Recipe from "./Recipe.js"

//style sheets
import "./App.css"
import "./style.css"


//images
import pizza from "./assets/choco-pizza.png"
import notepad from "./assets/list-bg.png"
import logo from "./assets/logo.png"
import fb from "./assets/fb-icon.png"
import flic from "./assets/flic-icon.png"
import gp from "./assets/gp-icon.png"
import insta from "./assets/insta-icon.png"
import mail from "./assets/mail-icon.png"
import pintIcon from "./assets/pint-icon.png"
import print from "./assets/print-icon.png"
import rss from "./assets/rss-icon.png"
import twit from "./assets/twit-icon.png"
import authorPic from "./assets/van-pic.png"
import hrImg from "./assets/hr-img.png"
import smallLogo from "./assets/small-logo.png"

//text variables
const myDate = "15 Dec 2013"
const ingredientOne = "1/2 cup marscarpone";
const ingredientTwo = "1/2 tsp pink salt";
const ingredientThree = "1 lb Black Mission Figs"
const ingredientFour = "1/2 cup brown sugar"
const ingredientFive = "2-4 tbsp water"
const ingredientSix = "1 1/2 cups heavy cream"
const ingredientSeven = "1/3 granulated sugar"
const ingredientEight = "2 egg yolks"
const ingredientNine = "1 lemon, juiced"
const ingredientTen = "2 tbsp butter" 
const ingredientEleven = "1 cup honey roasted pecans, roughly chopped"




//rendering to the DOM
function App() {
  return (
      <div>
          <Header logo = {logo} insta = {insta} twit = {twit} fb = {fb} flic = {flic} gp = {gp} mail = {mail} pintIcon = {pintIcon} rss = {rss} />
     
          <Title date = {myDate} print = {print} />
          
          <Article pizza = {pizza} />
          

          <Recipe notepad = {notepad} ingredientOne = {ingredientOne} ingredientTwo = {ingredientTwo} ingredientThree = {ingredientThree} ingredientFour = {ingredientFour} ingredientFive = {ingredientFive} ingredientSix = {ingredientSix} ingredientSeven = {ingredientSeven} ingredientEight = {ingredientEight} ingredientNine = {ingredientNine} ingredientTen = {ingredientTen} ingredientEleven = {ingredientEleven} hrImg = {hrImg}/>

          <Author authorPic = {authorPic} />
          
          <Footer smallLogo = {smallLogo}/>


      </div>
  
  );
}

export default App;
