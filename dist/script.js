/*
* https://frontendeval.com/questions/scrolling-tiles
*
* Create infinitely scrolling rows of puppies and kittens
*/
const ScrollComponent = ({ kittens, puppies }) => {

  return /*#__PURE__*/(
    React.createElement("div", { className: "kitten-img" },
    kittens.map(kitten => /*#__PURE__*/React.createElement("img", { src: kitten, className: "kitten-images" }))));



};


const LayoutComponent = ({ kittens, puppies }) => {
  return /*#__PURE__*/(
    React.createElement(ScrollComponent, { kittens: kittens, puppies: puppies }));

};


const { useState, useEffect } = React;
const App = () => {
  const puppies = [
  "https://frontendeval.com/images/puppy-1.jpeg",
  "https://frontendeval.com/images/puppy-2.jpeg",
  "https://frontendeval.com/images/puppy-3.jpeg",
  "https://frontendeval.com/images/puppy-4.jpeg",
  "https://frontendeval.com/images/puppy-5.jpeg",
  "https://frontendeval.com/images/puppy-6.jpeg",
  "https://frontendeval.com/images/puppy-7.jpeg",
  "https://frontendeval.com/images/puppy-8.jpeg",
  "https://frontendeval.com/images/puppy-9.jpeg",
  "https://frontendeval.com/images/puppy-10.jpeg",
  "https://frontendeval.com/images/puppy-11.jpeg",
  "https://frontendeval.com/images/puppy-12.jpeg"];


  const kittens = [
  "https://frontendeval.com/images/kitten-1.jpeg",
  "https://frontendeval.com/images/kitten-2.jpeg",
  "https://frontendeval.com/images/kitten-3.jpeg",
  "https://frontendeval.com/images/kitten-4.jpeg",
  "https://frontendeval.com/images/kitten-5.jpeg",
  "https://frontendeval.com/images/kitten-6.jpeg",
  "https://frontendeval.com/images/kitten-7.jpeg",
  "https://frontendeval.com/images/kitten-8.jpeg",
  "https://frontendeval.com/images/kitten-9.jpeg",
  "https://frontendeval.com/images/kitten-10.jpeg",
  "https://frontendeval.com/images/kitten-11.jpeg",
  "https://frontendeval.com/images/kitten-12.jpeg"];


  return /*#__PURE__*/React.createElement(LayoutComponent, { kittens: kittens, puppies: puppies });
};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));