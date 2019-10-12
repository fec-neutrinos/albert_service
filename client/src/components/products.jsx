import React, { Component, Fragment } from 'react';
import axios from 'axios';
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
    this.handleProductRedirect = this.handleProductRedirect.bind(this);
  };
  componentDidMount() {
    axios.get('/api/getAllProducts')
      .then(results => {
        console.log(results.data);
        this.setState({
          products: [...results.data]
        })
      })
      .catch(err => {
        console.log(err);
      })
  };
  handleProductRedirect (productName) {
    // window.location.href =
    console.log(productName);
    window.location.href = `/buy/${productName}`
  };
  render() {
    let style = {
      width:'100px',
      height:'100px'
    }
    return (
      <Fragment>
        {
          !this.state.products.length ? null :
            <div>
              {this.state.products.map((item, i) => {
                return (
                  <div key = {i}>
                    <h1>{item.productName}</h1>
                    <img src = {item.images[0]} style = {style} onClick = {() => this.handleProductRedirect(item.productName)} />
                  </div>
                )
              })}
            </div>
        }
      </Fragment>
    )
  }
};


export default Products;