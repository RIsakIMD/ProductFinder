
import { Link, useLocation } from "react-router-dom";
import styles from "../styles/navbar.module.css"

const Navbar = () => {

    const location = useLocation();

    return (<nav>
        <h1>Store Finder</h1>
        {location.pathname == "/" ? null : <Link to="/">Go Back Home</Link>}
    </nav>)
}
export default Navbar;
