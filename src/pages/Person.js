import React, { Component } from "react";
import '../App.css';
import './styles/Person.css';
import ViewSDKClient from "./scripts/ViewSDKClient";

class Person extends Component {
    constructor() {
        super();
        this.viewSDKClient = new ViewSDKClient("https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf");
    }

    previewFile = () => {
        this.viewSDKClient.ready().then(() => {
            /* Invoke file preview */
            this.viewSDKClient.previewFile("", {
                /* Pass the embed mode option here */
                embedMode: "LIGHT_BOX"
            });
        });
    }

    render() {
        //about section vars
        var full_name = this.props.json.first_name + " " + this.props.json.last_name;
        var about = this.props.json.about;
        var link = this.props.json.external_link;
        var link_text = this.props.json.external_link_text;

    //pdf viewer
        if(about === null || about === '')
        return(<div className="container text-center mt-5 mb-5"><h1 className="text-danger"><i className="bi bi-exclamation-triangle"></i> Page not finished</h1></div>)
    else
        return(
            
            <div className="App-bkg">
                <div className="container mb-3 App-bkg text-light">
                    <br />
                    <h1 className="">About {full_name}</h1>
                    <div className="container about-container p-3">
                        <img src={this.props.image} alt={'Picture of ' + this.props.name} className="w-25 me-3 mb-3 thumbnail img-thumbnail" />                
                        <p className = "thumbnail-text">{about}</p>
                        {/* eslint-disable-next-line react/jsx-no-target-blank*/}
                        <a href={link} target = "_blank" rel = "noreferer" className="btn btn-primary">Link to {link_text}</a>
                        <br />
                        <div id="container" className="light-box-container">
                        <button onClick={ this.previewFile } className="btn btn-primary mt-3">
                            View Resume
                        </button>
                    </div>
                    </div>
                    
                    
                </div>
            
            </div>
            
        )
        
    }
}
export default Person;