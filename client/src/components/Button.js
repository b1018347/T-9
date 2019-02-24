import React from "react";

const Button = ({button, handleButtonClick}) => {
  return (
    <div className="phone__button" key={button.number}>
      <button onClick={() => handleButtonClick(button.number)}>
        <div>{button.number}</div>
        <div>{button.letters}</div>
      </button>
    </div>
  );
};

export default Button;
