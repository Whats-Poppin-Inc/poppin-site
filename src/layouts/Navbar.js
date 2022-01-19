import logo from '../logo.png';
import {Link} from "react-router-dom";
  
function Navbar(){
    return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">
                <div class="navbar-brand">
                    <img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""/>
                    What's Poppin?
                </div>
            </Link>
        
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">            
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link className = "nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link className = "nav-link" to="/projects">Projects</Link></li>
                <li className="nav-item dropdown">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        People
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><Link className = "dropdown-item"to = "/Miles">Miles Weber</Link></li>
                        <li><Link className = "dropdown-item"to = "/Isaac">Isaac Traina</Link></li>
                        <li><Link className = "dropdown-item"to = "/Evan">Evan Stoddard</Link></li>
                        <li><Link className = "dropdown-item"to = "/Emily">Emily Chrisostono</Link></li>
                        {/*<li><hr className="dropdown-divider" /></li>*/}
                        
                    </ul>
                    </li>
                     
                </ul>      
            </div>
        </div>
    </nav>  
             
    );
}
export default Navbar;