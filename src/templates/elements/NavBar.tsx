
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

export default function NavBar () {
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
    return (
    <nav>
        <ul>
            <li>
                <Link to="/" className={splitLocation[1] === "" ? "active" : ""}>Home</Link>
            </li>
            <li>
                <Link to="/contact" className={splitLocation[1] === "contact" ? "active" : ""}>Contact</Link>
            </li>
            <li>
                <Link to="/projects" className={splitLocation[1] === "projects" ? "active" : ""}>My Projects</Link>
            </li>
            <li>
                <Link to="/cv" className={splitLocation[1] === "cv" ? "active" : ""}>My CV</Link>
            </li>
        </ul>
    </nav>

    )
}



