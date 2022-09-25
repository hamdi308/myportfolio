import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/logo-s.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools,faUser,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img className='sub-logo' src={LogoS} alt='logo' />
        </Link>
        <nav>
            <NavLink className='projects-link' exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faTools} color="#444345" />
            </NavLink>
             <NavLink className='about-link' exact="true" activeclassname="active" to="/about">
                <FontAwesomeIcon icon={faUser} color="#444345" />
            </NavLink>
             <NavLink className='contact-link' exact="true" activeclassname="active" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#444345" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/hamdi-hadda-13b300200/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
             <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/hamdi308'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)
export default Sidebar