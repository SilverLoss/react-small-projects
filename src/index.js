import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./Style.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ChangeBg from "./ChangeBg";
import Factorial from "./Factorial";
import Arr from "./Arr";
import Marksheet from "./Marksheet";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ChangeBg /> */}
    {/* <Factorial /> */}
    {/* <Arr /> */}
    <Marksheet />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
