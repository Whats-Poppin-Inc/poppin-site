import React from "react";
import '../App.css';
import PersonCard from "../layouts/PersonCard";
import logo from "../logo.png";
import Milespfp from "../assets/images/Miles.png";

const Home = () => {
  return (
    <div className="App App-bkg">
    <div className="container mb-3 App-bkg">
      <span className = "grid-container">
        <PersonCard 
          fname = {"Miles"} 
          name = {"Miles Weber"} 
          image = {Milespfp} 
          info = {"Fullstack Developer & Computer Software Engineering Student at Thaddeus Stevens College of Technology"} 
          link = {"https://github.com/x13xDread"} 
          linkText = {"Github"} />
        <PersonCard 
          fname = {"Isaac"} 
          name = {"Isaac Traina"} 
          image = {logo} 
          info = {"Student at Rochester Institute of Technology"} 
          link = {"https://github.com/ATY02"} 
          linkText = {"Github"} />
        <PersonCard
          fname = {"Evan"} 
          name = {"Evan Stoddard"} 
          image = {logo} 
          info = {"Student at Rochester Institute of Technology"} 
          link = {"https://github.com/evstod"} 
          linkText = {"Github"} />
        <PersonCard
          fname = {"Emily"}
          name = {"Emily Chrisostomo"}
          image = {logo}
          info = {"Software Engineering Student at Rochester Institute of Technology"}
          link = {"https://github.com/chrisostono"} 
          linkText = {"Github"} />
      </span>
    </div>
  </div>
  );
}
export default Home;