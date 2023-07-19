import React from "react";
import ReactDOM from "react-dom/client";
// import CustomerForm from "./client-form";
import Items from "./items";
import Toggle from "./Toogle-List";
import "./app.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Items></Items>
    <Toggle></Toggle>
  </>
);
