import React from "react";

function ProjectCard(props){
    return(
        <div className="container text-light border">
            <h4>{props.projectName}</h4>
            <p>{props.projectDescription}</p>
            <br />
            <span><h5>{props.projectLink}</h5></span>
        </div>
    )
}

export default ProjectCard;