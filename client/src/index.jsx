import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import CarouselPage from './components/CarouselPage.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <CarouselPage></CarouselPage>
    )
  }
};

ReactDOM.render(<App />, document.getElementById('carousel'));