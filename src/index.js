import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom"; 
import Home from "./pages/Home";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./layouts/Navbar";


function App(){
  return(
    
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element = {<Home />}></Route>
      </Routes>
    </Router>
  );
}
ReactDOM.render(
  <App/>, document.getElementById("root")

);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
