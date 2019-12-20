import React from "react";
import ReactDOM from "react-dom";
import Paper from '@material-ui/core/Paper';

import "./styles.css";
import Home from "./Home/view/Home";

function App() {
  return (
<React.Fragment>
   <Paper style={{height : '35px' , backgroundColor : 'orange'}}>
     <div>
        <span style={{marginLeft : '30px' , fontSize : '20px'}}>skyResort</span>
        <div style={{float : 'right' , fontSize : '20px'}}>
          Room
        </div>
        <div style={{float : 'right' , marginRight : '40px' , fontSize : '20px'}}>
          Home
        </div>
    </div>
    </Paper>
<Paper style={{height : '650px' , backgroundColor : 'lightblue'}}>

<Home/>


</Paper>
<Paper style={{height : '35px' , backgroundColor : 'black' , color : 'white'}}>
  <span style={{float : 'right'}}>All Rights reserved</span>
  <span>skyResort</span>
  </Paper>
</React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
