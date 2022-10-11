import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Sidebar.scss';
import LogoS from '../../assets/images/logo_n.png';
import LogoSubtitle from '../../assets/images/name_n.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { BsLinkedin, BsSkype, BsMedium, BsGithub } from 'react-icons/bs';

const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img className='main-logo' src={LogoS} alt="logo" />
                <img className='sub-logo' src={LogoSubtitle} alt="Nazmus Sakib" />
            </Link>
            <nav>
                <NavLink exact='true' activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
                </NavLink>
                <NavLink
                    exact='true'
                    activeclassname="active"
                    className="about-link"
                    to="/about"
                >
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    exact='true'
                    activeclassname="active"
                    className="projects-link"
                    to="/projects"
                >
                    <FontAwesomeIcon icon={faAddressBook} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    exact='true'
                    activeclassname="active"
                    className="contact-link"
                    to="/contact"
                >
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/nazmus-sakib-developer/"
                    >
                        <BsLinkedin />
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/saakeeb"
                    >
                        <BsGithub />
                        
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://medium.com/@saakeeb"
                    >
                        <BsMedium />
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="skype:live:saakeeb"
                    >
                        <BsSkype />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;