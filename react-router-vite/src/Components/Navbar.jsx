// this line imports NavLink from react-router-dom in order to use it in the Navbar component
import { NavLink } from "react-router-dom";

// this line imports the Navbar.css file
import "./Navbar.css";

// this line defines the Navbar component
const Navbar = () => {
  // this line returns the JSX for the Navbar component
  return (
    <nav>
      <ul>
        <li>
          {/* this line creates a NavLink component that links to the home page */}
          <NavLink to="/" activeClassName="active">
            {/* this line displays the text Home */}
            Home
          </NavLink>
        </li>
        <li>
          {/* this line creates a NavLink component that links to the about page */}
          <NavLink to="/about" activeClassName="active">
            {/* this line displays the text About */}
            About
          </NavLink>
        </li>
        <li>
          {/* this line creates a NavLink component that links to the contact page */}
          <NavLink to="/contact" activeClassName="active">
            {/* this line displays the text Contact */}
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

// this line exports the Navbar component
export default Navbar;
