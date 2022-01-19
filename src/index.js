import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <App />,
  document.getElementById("root") //Kodrad som exekveras allra först i browsern när den laddas. Hänvisar till div:en i index.html med ID:et 'root'.
);
