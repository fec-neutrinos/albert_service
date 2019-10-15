import React, { Component, Fragment } from 'react';
import axios from 'axios';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      productName: ''
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
    let productName = /*fix me*/
    let url = `http://localhost:3001/api/${productName}`
    axios.get(url)
      .then(response => {
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
    let style = {
      width:'100px',
      height:'100px'
    }
    return (
      <div>
        <h2>{this.state.productName}</h2>
        {this.state.images.map((image, i) => {
          return <img style = {style} src = {image} key = {i}></img>
        })}
      </div>
    )
  }
};

export default Carousel;