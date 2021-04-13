import '../App.css'
import {
  Link
} from "react-router-dom"

function Navbar() {
  return (
    <div className="App-navbar">
        {/* <div className="mt-5"> */}
          <Link to="/">Home |</Link>
          <Link to="/fav"> Favorite</Link>
        {/* </div> */}
    </div>
  );
}

export default Navbar
