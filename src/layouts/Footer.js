import logo from '../logo.png';
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="App container App-bkg text-light">
            <hr />
            <Link to ="/" className="nav-item"> <img src = {logo} width="30" height="30" alt ='Logo' className='img-fluid navbar-brand'/>What's Poppin Inc.</Link> by Miles Weber
        </footer>
    )
}

export default Footer;