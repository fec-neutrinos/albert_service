import React from 'react';

import styled, { css } from 'styled-components';
const Image = (image) => {
  //   const Image = styled.img`
  //   background-image: url(${image.link});
  //   background-repeat: no-repeat;
  //   background-position: center;
  //   display: block;
  //   padding: 50px;
  //   height: 400px;
  //   width: 800px;
  // `
  // background-image: url(${image.link});
  const Item = styled.div`
    background: orange;
    text-align: center;
    padding: 50px;
    color: white;
  `
  return (
    <Item>Item</Item>
    // <div className='carousel-image'>
    //   <Image id={`image-${(image.current + 1)}`} src={image.link}></Image>
    // </div>
  )
};

export default Image;