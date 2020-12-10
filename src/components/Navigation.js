// Styling
import '../styles/Navigation.css';

// images
import logo from '../images/logo.png';

// routing
import { Link, withRouter } from "react-router-dom";
import { Link as SectionLink } from "react-scroll";

function Navigation() {
    return (
        <div class="nav flex center">
            <section class="nav-wrapper flex flex-d-row space-between">
                <div class="logo menu-item center-vertical"><Link to="/homework_8"><img src={logo} alt="logo" /></Link></div>
                <div class="menu flex flex-d-row center-vertical space-between">
                    <SectionLink class="nav-item" to="projects" smooth={true}><p>Projects</p></SectionLink>
                    <Link class="nav-item resume" to={process.env.PUBLIC_URL + '/resume'}><p>Resume</p></Link>
                    <SectionLink class="nav-item" to="contact" smooth={true}><p>Contact</p></SectionLink>
                   
                </div>
            </section>
        </div>
    );

}
export default Navigation