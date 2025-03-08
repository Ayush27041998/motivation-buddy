import React from "react";

const Button = ({ handleClick, isLoading }) => {
  return (
    <button className="btn" onClick={handleClick} disabled={isLoading}>      {isLoading ? "Loading..." : "Next Quote"}
    </button>)
}
export default Button;