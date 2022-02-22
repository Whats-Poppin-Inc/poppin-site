import React from "react";
import ProjectCard from "../layouts/ProjectCard";
import poppin from "../assets/json_templates/poppin_site.json";

function Projects(props){
    if(props.finished === false){        
        return(<div className="container text-center mt-5 mb-5"><h1 className="text-danger"><i className="bi bi-exclamation-triangle"></i> Page not finished</h1></div>)
    
    }        
    else { 
        return(
            <div className="container text-light">
                <br />
                <h1>Projects</h1>
                <br />
                <br />
                <ProjectCard json = {poppin}/>
            </div>
        );
    }
}

export default Projects;