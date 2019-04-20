import React from "react";
import PropTypes from "prop-types";

const Form = props => {
  return <form onSubmit={props.onSubmit}>{props.children}</form>;
};

export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};
