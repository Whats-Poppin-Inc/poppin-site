import React from 'react';
import '../App.css';

function PageNotFound(props){
    return(
        <div className="App App-bkg">
            <br />
            <div className="container mb-3">
            <h1 className="text-danger"><i className="bi bi-exclamation-triangle"></i> 404 Page Not Found</h1>
            </div>
        </div>
    )
}
export default PageNotFound;