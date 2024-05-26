import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// Navigation component for desktop
function Navigation() {
    return (
        <nav className='hidden fixed md:block w-full bg-custom-blue hover:text-custom-gray'>
            <ul className="flex justify-center items-center">
                <NavItem href="/">Home</NavItem>
                <NavItem href="#about">About</NavItem>
                <NavItem href="#education">Education</NavItem>
                <NavItem href="#skill">Skills</NavItem>
                <NavItem href="#project">Projects</NavItem>
                <NavItem href="#experience">Experience</NavItem>
                <NavItem href="#footer">Contact</NavItem>
            </ul>
        </nav>
    );
}

// Navigation component for mobile
function MobileNavigation({ toggleMenu }) {
    return (
        toggleMenu && 
        <nav className='block md:hidden left-0 top-12 w-full h-auto bg-custom-blue hover:text-custom-gray'>
            <ul className="flex  flex-col md:flex-row">
                <NavItem href="/">Home</NavItem>
                <NavItem href="#about">About</NavItem>
                <NavItem href="#education">Education</NavItem>
                <NavItem href="#skill">Skills</NavItem>
                <NavItem href="#project">Projects</NavItem>
                <NavItem href="#experience">Experience</NavItem>
                <NavItem href="#footer">Contact</NavItem>
            </ul>
        </nav>
    );
}

// Toggle button component for mobile navigation
function ToggleButton({ toggleMenu, setToggleMenu }) {
    return (
        <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden px-3 py-3 ml-3'>
            <FontAwesomeIcon icon={faBars} className="cursor-pointer" />
        </button>
    );
}

// Navigation item component
function NavItem({ href, children }) {
    return (
        <li className="font-sans px-6 py-3 text-md md:text-xl hover:bg-custom-blue text-white transition-colors duration-300 group">
            <a href={href} className="relative">
                {children}
                {/* Highlight effect on hover */}
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
        </li>
    );
}

// Layout component wrapping the navigation and main content
function Layout({ children }) {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="relative">
            {/* Navigation bar */}
            <div className="fixed w-full bg-nav-custom-blue z-50 ">
                <div className="flex items-start justify-end font-serif text-lg text-custom-gray">
                    {/* Desktop navigation */}
                    <Navigation />
                    {/* Mobile navigation */}
                    <MobileNavigation toggleMenu={toggleMenu} />
                    {/* Toggle button for mobile */}
                    <ToggleButton toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
                </div>
            </div>
            {/* Main content */}
            <div className="pt-12">
                {children}
            </div>
        </div>
    );
}

export default Layout;
