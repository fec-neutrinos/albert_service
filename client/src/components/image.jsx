import React from 'react';
import './image.css';

const Image = (image) => {
  return(
    <img src={image.link}></img>
  )
};

export default Image;