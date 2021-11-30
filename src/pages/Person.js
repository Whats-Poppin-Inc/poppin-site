import React from "react";
import '../App.css';

function Person(props){
    return(
        <div className="App App-bkg">
        <div className="container mb-3 App-bkg text-light">
            <br />
            <h1 className="">About {props.name}</h1>
            <div>
                <img src={props.image} alt={props.name} className="img-fluid" />
            </div>
        </div>
        </div>
    )
}
export default Person;