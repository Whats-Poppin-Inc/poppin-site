import React from "react";
import '../App.css';
import './styles/Person.css';

function Person(props){
    var full_name = props.json.first_name + " " + props.json.last_name;
    var about = props.json.about;
    var link = props.json.external_link;
    var link_text = props.json.external_link_text;
    return(
        <div className="App-bkg">
        <div className="container mb-3 App-bkg text-light">
            <br />
            <h1 className="">About {full_name}</h1>
            <div className="border container about-container p-3">
                <img src={props.image} alt={'Picture of ' + props.name} className="w-25 me-3 mb-3 thumbnail img-thumbnail" />                
                <p className = "thumbnail-text">{about}</p>
                {/* eslint-disable-next-line react/jsx-no-target-blank*/}
                <a href={link} target = "_blank" rel = "noreferer" className="btn btn-primary">Link to {link_text}</a>
                
            </div>
        </div>
        </div>
    )
}
export default Person;