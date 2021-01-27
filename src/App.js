import React from "react";
import Navbar from "./components/Navbar";
import Task from "./components/Task";
import Login from "./components/Login";
import useToken from "./components/useToken";
import "./App.css";

export default function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <>
      <Navbar />
      <Task />
    </>
  );
}
