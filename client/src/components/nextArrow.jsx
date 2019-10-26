import React from 'react';

const nextArrow = (props) => {
  return (
    <div>
      <i className="fas fa-arrow-right" onClick = {props.onClick}></i>
    </div>
  );
};

export default nextArrow;