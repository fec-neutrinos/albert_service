import React from 'react';

const prevArrow = (props) => {
  return (
    <div>
      <i className="fas fa-arrow-left" onClick = {props.onClick}></i>
    </div>
  );
};

export default prevArrow;