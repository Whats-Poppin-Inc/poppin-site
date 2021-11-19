import logo from './logo.png';
import './App.css';
import Navbar from './layouts/Navbar';
import PersonCard from './layouts/PersonCard';
function App() {
  return (
    <div className="App App-bkg">
      <Navbar />
      <div className="container mt-3 mb-3 App-bkg">
        <PersonCard name = {"Miles Weber"} image = {logo}/>
      </div>
    </div>
  );
}

export default App;
