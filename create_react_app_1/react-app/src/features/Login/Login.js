import React, { useState } from "react";
import PropTypes from "prop-types";
import Form from "common/components/Form";
import Input from "common/components/Input";
import Button from "common/components/Button";
import Message from "common/components/Message";

const INPUT1 = "username";
const INPUT2 = "password";

export default function Login(props) {
  const [state, setState] = useState({
    [INPUT1]: "",
    [INPUT2]: ""
  });

  function handleSubmit(event) {
    event.preventDefault();
    props.initiatedLogin(state);
  }

  function handleChange(event) {
    // Clean the error if the user re-starts typing
    if (props.loginError && state[INPUT2]) {
      props.cleanError();
    }
    setState({ ...state, [event.target.name]: event.target.value });
  }

  function renderMessage() {
    if (props.loginError) {
      return (
        <Message
          data-testid="error-message"
          className="error-message"
          text={`Ops .. looks like there is an error: ${props.loginError}`}
        />
      );
    }

    if (props.isLoggingIn) {
      return (
        <Message
          data-testid="welcome"
          text={`Welcome back ${state[INPUT1]}! ... Loading links`}
        />
      );
    }
  }

  function renderForm() {
    if (!props.accessToken) {
      return (
        <Form onSubmit={handleSubmit}>
          <p>
            <small>
              You can login with username <em>valentino</em> and password{" "}
              <em>changeme44</em>
            </small>
          </p>
          <Input
            type="text"
            name={INPUT1}
            placeholder={`Enter your ${INPUT1}`}
            required={true}
            onChange={handleChange}
          />
          <Input
            type="password"
            name={INPUT2}
            placeholder={`Enter your ${INPUT2}`}
            required={true}
            onChange={handleChange}
          />
          <Button
            data-testid="submit"
            type="submit"
            text="Login"
            className="button"
          />
          {renderMessage()}
        </Form>
      );
    }
    return null;
  }

  return renderForm();
}

Login.propTypes = {
  initiatedLogin: PropTypes.func.isRequired,
  isLoggingIn: PropTypes.string.isRequired,
  loginError: PropTypes.string,
  cleanError: PropTypes.func.isRequired,
  accessToken: PropTypes.string
};
