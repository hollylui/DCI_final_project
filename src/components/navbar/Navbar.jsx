import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link className="nav-link" exact to="/">
        Home
      </Link>
      <Link className="nav-link" to="/volcano">
        Volcano
      </Link>
    </nav>
  );
};

export default Navbar;
