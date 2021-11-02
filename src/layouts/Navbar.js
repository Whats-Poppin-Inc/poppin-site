import logo from '../logo.png';
function Navbar(){
    return(
        <div className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Cool Link to nowhere</a>
        
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>        
    );
}
export default Navbar;