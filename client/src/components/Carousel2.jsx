import React, { Component } from 'react';


import Wrapper from './Wrapper.jsx';
import CarouselSlot from './CarouselSlot.jsx';
import CarouselContainer from './CarouselContainer.jsx';


class Carousel2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      position: 0,
      sliding: false,
      direction: 'next'
    }
    this.previousSlide = this.previousSlide.bind(this);
  }
  getOrder(itemIndex) {
    const { position } = this.state;
    const { children } = this.props;
    const numItems = children.length || 1;
    if (itemIndex - position < 0) {
      return numItems - Math.abs(itemIndex - position);
    }
    return itemIndex - position;
  }

  nextSlide() {
    const { position } = this.state;
    const { children } = this.props;
    const numItems = children.length || 1;
    this.setState({
      position: position === numItems - 1 ? 0 : position + 1
    });
    this.doSliding('next', position === numItems - 1 ? 0 : position + 1);
  }

  previousSlide() {
    const { position } = this.state;
    const { children } = this.props;
    const numItems = children.length;
    this.setState({
      position: position === 0 ? numItems - 1 : position - 1
    });
    this.doSliding('prev', position === 0 ? numItems - 1 : position - 1);
  }

  doSliding(direction, position) {
    this.setState({
      sliding: true,
      direction: direction
    })
    setTimeout(() => {
      this.setState({
        sliding: false
      })
    }, 50)
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        <Wrapper>
          <CarouselContainer
            sliding={this.state.sliding}
            direction={this.state.direction}
          >
            {children.map((child, index) => {
              return (
                <CarouselSlot
                  key={index}
                  order={this.getOrder(index)}
                >
                  {child}
                </CarouselSlot>
              )
            })}
          </CarouselContainer>
          <button onClick={() => this.previousSlide()}>Previous</button>
          <button onClick={() => this.nextSlide()}>Next</button>
        </Wrapper>
      </div>
    )
  }
}

export default Carousel2;