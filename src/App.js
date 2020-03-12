import React from 'react';
import StartupScreen from "./views/StartupScreen";
import { withRouter } from "react-router-dom";
import './style.css';

function App(props) {
  return (
    <div className="App">
      <StartupScreen/>
    </div>
  );
}

export default withRouter(App);
