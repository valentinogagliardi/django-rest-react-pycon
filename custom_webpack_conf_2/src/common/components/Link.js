import React from "react";
import PropTypes from "prop-types";

const Link = props => {
  const { children, ...rest } = props;
  return <a {...rest}>{children}</a>;
};

export default Link;

Link.defaultProps = {
  rel: "noopener noreferrer"
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  rel: PropTypes.string.isRequired,
  target: PropTypes.string
};
