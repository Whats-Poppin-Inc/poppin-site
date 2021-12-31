import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ReactDOM from "react-dom"; 
import Home from "./pages/Home";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./layouts/Navbar";
import Person from "./pages/Person";
import PageNotFound from "./pages/PageNotFound";
import logo from "./logo.png";
import Footer from "./layouts/Footer";
import Miles from './Miles.json';
import Isaac from './Isaac.json';
import Evan from'./Evan.json';
import Emily from './Emily.json';

function App(){
  return(
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element = {<Home />}></Route>
        <Route exact path="*" element = {<PageNotFound />}></Route>

        {/*About Pages for each person*/}
        <Route path="/Miles" element = {<Person name = {"Miles"} image = {logo} json = {Miles} />}></Route>
        <Route path="/Isaac" element = {<Person name = {"Isaac"} image = {logo} json = {Isaac} />}></Route>
        <Route path="/Evan" element = {<Person name = {"Evan"} image = {logo} json = {Evan} />}></Route>
        <Route path="/Emily" element = {<Person name = {"Emily"} image = {logo} json = {Emily} />}></Route>
        <Route path="/Sammy" element = {<Person name = {"Sammy"} image = {logo} />}></Route>
        
      </Routes>
      <Footer />
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
