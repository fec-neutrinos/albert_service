import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';
import Carousel from './components/carousel.jsx';
// import Products from './components/products.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Carousel />
    )
  }
};

ReactDOM.render(<App />, document.getElementById('carousel'));