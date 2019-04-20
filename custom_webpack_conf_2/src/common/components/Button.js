import React from "react";
import PropTypes from "prop-types";

const Button = props => {
  const { text, ...rest } = props;
  return <button {...rest}>{text}</button>;
};

export default Button;

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
};
