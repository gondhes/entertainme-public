import '../App.css'
import {
  Link
} from "react-router-dom"

function Navbar() {
  return (
    <div className="App-navbar">
      <div className="row">
        <div className="logo-row">
          <img src="../../logo.png" alt="Entertainme Logo" className="logo"/>
        </div>
        <div className="main-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/fav">Favorite</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar
