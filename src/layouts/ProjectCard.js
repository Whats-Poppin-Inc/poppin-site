import React from "react";

function ProjectCard(props){
    let json = props.json;
    let image = props.image;
    if(image)
        return(            
            // add image to this div
            <div className="grid-container text-light border">
                <div className = "row">
                    <img 
                        src = {image} 
                        className="card-img-top col-md-auto" 
                        //style={{width: "50%", height: "50%", minWidth: "100px", minHeight: "100px", maxHeight:"200px",maxWidth:"200px"}}
                        alt = {json.project_name} 
                    />
                    <div className="col-md-auto">
                        <h1>{json.project_name}</h1>
                        <h4>{json.project_description}</h4>
                        
                        <br />
                        <span><h5><a href={json.project_link} className = "">Github Link</a> <a href={json.live_project_link} className = "">Project Link</a></h5></span>
                    </div>
                </div>
            </div>
        )
    else
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