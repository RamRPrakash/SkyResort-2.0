import React from "react";
import ReactDOM from "react-dom";
import Paper from '@material-ui/core/Paper';

import "./styles.css";
import Home from "./Home/view/Home";
import Check from "./Check";

function App() {
  return (
<React.Fragment>
  <Check />
</React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
