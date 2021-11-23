import React from "react";
import '../App.css';
import PersonCard from "../layouts/PersonCard";
import logo from "../logo.png";

const Home = () => {
  return (
    <div className="App App-bkg">
    <div className="container mb-3 App-bkg">
      <span className = "grid-container">
      <PersonCard name = {"Miles Weber"} image = {logo} info = {"Hello I am Miles Weber"} link = {""} linkText = {"Github"} />
      <PersonCard name = {"Isaac Traina"} image = {logo} info = {"Placeholder"} link = {""} linkText = {"Github"} />
      <PersonCard name = {"Evan Stoddard"} image = {logo} info = {"Placeholder"} link = {""} linkText = {"Github"} />
      <PersonCard name = {"Emily Chrisostono"} image = {logo} info = {"Placeholder"} link = {""} linkText = {"Github"} />
      </span>
    </div>
  </div>
  );
}
export default Home;