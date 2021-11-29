import React from 'react';
import '../App.css';

function PageNotFound(props){
    return(
        <div className="App-bkg">
            <div className="container mb-3 App-bkg">
            <h1 className="text-danger"><i className="bi bi-exclamation-triangle"></i> 404 Page Not Found</h1>
            </div>
        </div>
    )
}
export default PageNotFound;