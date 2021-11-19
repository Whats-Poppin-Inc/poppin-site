import './styles/PersonCard.css';

function PersonCard(props){
    return(
        <div className="card card-width" >
            <img src={props.image} class="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.info}</p>
                <a href={props.link} className="btn btn-primary">{props.linkText}</a>
            </div>
        </div>
    )
}
export default PersonCard;