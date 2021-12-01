import React from "react";
import '../App.css';
import './styles/Person.css';

function Person(props){
    return(
        <div className="App-bkg">
        <div className="container mb-3 App-bkg text-light">
            <br />
            <h1 className="">About {props.name}</h1>
            <div className="border container about-container p-3">
                <img src={props.image} alt={props.name} className="w-25 me-3 mb-3 thumbnail img-thumbnail" />                
                <p className = "thumbnail-text">Some placeholder text about {props.name}</p>
                
            </div>
        </div>
        </div>
    )
}
export default Person;