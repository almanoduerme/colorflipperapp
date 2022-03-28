import React from "react";

const Button = ({ text, handleClick, className, disabled }) => {
  return (
    <button disabled={disabled} onClick={handleClick} className={className}>
      {text}
    </button>
  );
};

export default Button;
