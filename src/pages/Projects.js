import React from "react";
import ProjectCard from "../layouts/ProjectCard";
import poppin from "../assets/json_templates/poppin_site.json";
import code from "../assets/json_templates/code_poppin_site.json"
//poppin projects import
import logo from "../logo.png";
function Projects(props){
    if(props.finished === false){   
        //return page not finished  
        return(<div className="container text-center mt-5 mb-5"><h1 className="text-danger"><i className="bi bi-exclamation-triangle"></i> Page not finished</h1></div>)
    
    }        
    else { 
        return(
            <div className="container text-light">
                <br />
                <h1>Projects</h1>
                <br />
                <br />
                <ProjectCard json = {poppin} image = {logo}/>
                <ProjectCard json = {code} image = {logo}/>
            </div>
        );
    }
}

export default Projects;