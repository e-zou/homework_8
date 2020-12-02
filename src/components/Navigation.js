// images
import logo from '../images/logo.png';

// routing
import { Link, withRouter } from "react-router-dom";

function Navigation() {
    return (
        <div class="nav">
            Navigation
            <div class="logo menu-item"><Link to="/"><img src={logo} alt="logo" /></Link></div>
            <div class="menu">
                <p><a href="#">Projects</a></p>
                <Link to="/resume"></Link>
                <p><a href="#">Contact</a></p>
            </div>

        </div>
    );

}
export default Navigation