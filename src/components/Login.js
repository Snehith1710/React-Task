import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./Login.css";

const useStyles = makeStyles((theme) => ({
  input: {
    border: "1px solid white",
  },

  label: {
    color: "white",
    marginBottom: "10px",
  },
}));

async function loginUser(credentials) {
  return fetch("http://localhost:3001/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const classes = useStyles();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };

  return (
    <div className="login-wrapper">
      <h1 style={{ color: "white", marginBottom: "40px" }}>Log In!</h1>

      <form onSubmit={handleSubmit} className="form">
        <label className={classes.label}>Email Address</label>
        <TextField
          label="Email Address"
          variant="outlined"
          className={classes.input}
          style={{ marginBottom: "25px" }}>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </TextField>

        <label className={classes.label}>Password</label>
        <TextField
          label="Password"
          variant="outlined"
          className={classes.input}>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </TextField>

        <div>
          <button type="submit" className="button">
            Log in
          </button>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
