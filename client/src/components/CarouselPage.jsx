import React, { Component } from 'react';

// import Carousel from './carousel.jsx';
import Carousel2 from './Carousel2.jsx';
import Image from './image.jsx';
import Item from './Item.jsx';
import axios from 'axios';
import styled, { css } from 'styled-components';


class CarouselPage extends Component {
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
  render() {
    // const Item = styled.div`
    //   background: darkorange;
    //   text-align: center;
    //   padding: 50px;
    //   color: white;
    // `
    return (
      <div>
        <Carousel2>
          {this.state.images.map((image, i) => {
            return (
              <Item
                link={image}
                key={i}
              >
              </Item>
            )
          })}
        </Carousel2>
      </div>
    )
  }
}

export default CarouselPage;