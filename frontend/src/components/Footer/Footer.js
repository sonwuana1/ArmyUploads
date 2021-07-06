import { Link } from 'react-router-dom';
import AboutMe from '../AboutMe/AboutMe';
import './Footer.css';

function Footer() {

    return (
        <div className='footer-container'>
            <h1>
                <Link to={AboutMe} className="about-me-link">About Me</Link>
            </h1>
        </div>
    )
}

export default Footer;
