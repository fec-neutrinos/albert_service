import React, { Component } from 'react';
import styled from 'styled-components';


const Container = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
`
// background-image: url(${(props) => props.link});
// width: 100px;
// height: 40px;

// background-image: url(${(props) => props.image})
const PiP = styled.span`
  background: ${(props) => (props.isCurrent) ? 'darkorange' : 'gainsboro'};
  width: 60px;
  height: 5px;
  margin-right: 5px;
  display: inline-block;
  transition: background 0.5s ease;
  cursor: pointer;
`

class Indicator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { length, position, images } = this.props;

    return (
      <Container>

        {
          Array.from({ length }, (pip, i) => {
            return (
              <PiP
                key={i}
                isCurrent={i === position}
              >
              </PiP>
            )
          })
        }
      </Container>
    )
  }
};

export default Indicator;