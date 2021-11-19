import logo from './logo.png';
import './App.css';
import Navbar from './layouts/Navbar';
import PersonCard from './layouts/PersonCard';
function App() {
  return (
    <div className="App App-bkg">
      <Navbar />
      <div className="container mt-3 mb-3 App-bkg">
        <span className = "grid-container">
        <PersonCard name = {"Miles Weber"} image = {logo} info = {"Hello I am Miles Weber"} link = {""} linkText = {"Github"} />
        <PersonCard name = {"Isaac Traina"} image = {logo} info = {"Placeholder"} link = {""} linkText = {"Github"} />
        <PersonCard name = {"Evan Stoddard"} image = {logo} info = {"Placeholder"} link = {""} linkText = {"Github"} />
        <PersonCard name = {"Emily Cristosomo"} image = {logo} info = {"Placeholder"} link = {""} linkText = {"Github"} />
        </span>
      </div>
    </div>
  );
}

export default App;
