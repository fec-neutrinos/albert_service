import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Image from './image.jsx';
import NextArrow from './nextArrow.jsx';
import PrevArrow from './PrevArrow.jsx';

import styled, {css} from 'styled-components';


class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      productName: '',
      currentIndex: 0, /*This will help determine current image displayed on the carousel */
      translateValue: 0
    };
  };
  componentDidMount() {
    this.getPhotos();
  };
  getPhotos() {
    //For production builds
    // let productName = window.location.pathname;
    // let url = `http://localhost:3001/api${productName}`;

    //For development purposes
    // add productName existing in the seeded DB
    let productName = 'small-wooden-pizza';
    let url = `http://localhost:3001/api/${productName}`
    axios.get(url)
      .then(response => {
        console.log(response.data);
        this.setState({
          images: response.data.images,
          productName: response.data.productName
        });
      })
      .catch(error => {
        console.log('error retrieving product details', error);
      })
  }

  nextImage() {
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0
      });
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1
    }));
  };

  previousImage() {
    if (this.state.currentIndex === 0) {
      return this.setState({
        currentIndex: this.state.images.length - 1
      });
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1
    }));
  }

  render() {

    return (
      <div className='carousel-wrapper'>

        {/* <h2>{this.state.productName}</h2> */}


        {/* <PrevArrow className='arrow' onClick={this.nextImage.bind(this)} /> */}
        <div id='carousel'>
          {this.state.images.map((image, i) => {
            return <Image key={i} link={image} current={i} />
          })}
        </div>
        {/* <NextArrow className='arrow' onClick={this.previousImage.bind(this)} /> */}

      </div>
    )
  }
};

export default Carousel;