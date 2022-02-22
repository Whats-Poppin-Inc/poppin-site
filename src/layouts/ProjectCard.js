import React from "react";

function ProjectCard(props){
    let json = props.json;
    return(
        <div className="container text-light border">
            <h4>{json.project_name}</h4>
            <p>{json.project_description}</p>
            <br />
            <span><h5><a href={json.project_link} className = "">Github Link</a> <a href={json.live_project_link} className = "">Project Link</a></h5></span>
        </div>
    )
}

export default ProjectCard;