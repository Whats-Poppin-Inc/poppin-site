import logo from '../logo.png';
import {
    Routes,
    Route,
    Link,
    Outlet
  } from "react-router-dom";
  
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
                    <li className="nav-item">
                        {//<a className="nav-link active" aria-current="page" href="#">Home</a> 
                        }
                    </li>
                    <li className="nav-item">
                        {//<a className="nav-link" href="#">Link</a>
                        }
                    </li>       
                </ul>      
            </div>
        </div>
    </nav>  
             
    );
}
export default Navbar;