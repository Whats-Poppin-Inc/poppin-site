import './styles/PersonCard.css';
import {Link} from "react-router-dom";

function PersonCard(props){
    return(
        <div className="card card-width" >
            <img src={props.image} class="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.info}</p>
                <a href={props.link} className="btn btn-primary">{props.linkText}</a>
                <br />
                <Link to={"/" + props.fname} className="btn btn-primary mt-3">{"Learn more about " + props.fname}</Link>
            </div>
        </div>
    )
}
export default PersonCard;