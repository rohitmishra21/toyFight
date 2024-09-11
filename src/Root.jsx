import React from "react";
import Nav from "./components/Nav";
import End from "./components/End";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <End />
    </>
  );
};

export default Root;
