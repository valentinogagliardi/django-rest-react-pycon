import React, { useState, useCallback, useEffect } from "react";
import Login from "features/Login/Login";
import Links from "features/Links/Links";
import Api from "common/Api";
import "./app.css";
const api = new Api();
const URL = "https://secure-brushlands-44802.herokuapp.com/";
const AUTH = `${URL}/api/user/token/`;
const LINKS = `${URL}/api/link2/`;

function App() {
  const [state, setState] = useState({
    isLoggingIn: "",
    token: { refresh: "", access: "" },
    loginError: "",
    links: [],
    fetchError: ""
  });
  const { access } = state.token;

  const _getLinks = useCallback(
    async function() {
      if (!access) return;
      try {
        const links = await api.get(LINKS, access);
        setState(prevState => {
          return { ...prevState, links };
        });
      } catch (error) {
        setState(prevState => {
          return { ...prevState, fetchError: error.message };
        });
      }
    },
    [access]
  );

  async function handleInitiatedLogin(payload) {
    try {
      const token = await api.post(AUTH, payload);
      setState(prevState => {
        return { ...prevState, isLoggingIn: "yes" };
      });
      setTimeout(
        () =>
          setState(prevState => {
            return { ...prevState, token };
          }),
        3000
      );
    } catch (error) {
      setState(prevState => {
        return { ...prevState, loginError: error.message };
      });
    }
  }

  useEffect(() => {
    _getLinks();
  }, [_getLinks]);

  function cleanError() {
    setState(prevState => {
      return { ...prevState, loginError: "" };
    });
  }

  return (
    <>
      <Login
        initiatedLogin={handleInitiatedLogin}
        isLoggingIn={state.isLoggingIn}
        loginError={state.loginError}
        cleanError={cleanError}
        accessToken={state.token.access}
      />
      <Links links={state.links} />
    </>
  );
}

export default App;
