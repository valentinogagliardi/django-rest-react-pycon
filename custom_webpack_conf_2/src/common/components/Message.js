import React from "react";
import PropTypes from "prop-types";

const Message = props => {
  const { text, ...rest } = props;
  return <p {...rest}>{text}</p>;
};

export default Message;

Message.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired
};
