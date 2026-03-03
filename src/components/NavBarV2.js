import React, { useState, useEffect } from 'react';
import './NavBarV2.css';

const NavBarV2 = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'projects', label: 'Projects' },
        { id: 'skills', label: 'Skills' },
        { id: 'contact', label: 'Contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);

            const sections = navLinks.map(l => document.getElementById(l.id)).filter(Boolean);
            const scrollPos = window.scrollY + 100;
            for (let i = sections.length - 1; i >= 0; i--) {
                if (scrollPos >= sections[i].offsetTop) {
                    setActiveSection(sections[i].id);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        // close mobile menu
        const menu = document.getElementById('navMenu');
        if (menu && menu.classList.contains('show')) {
            const toggler = document.querySelector('.navbar-toggler');
            if (toggler) toggler.click();
        }
    };

    return (
        <header>
            <nav
                className={`navbar navbar-expand-lg fixed-top ocean-nav${scrolled ? ' scrolled' : ''}`}
                aria-label="Main navigation"
            >
                <div className="container">
                    {/* Brand */}
                    <a
                        className="navbar-brand brand-logo"
                        href="#home"
                        onClick={e => { e.preventDefault(); scrollTo('home'); }}
                        aria-label="Benedict Idio - Home"
                    >
                        <span className="brand-icon">B</span>
                        <span className="brand-name">Benedict<span className="brand-dot">.</span></span>
                    </a>

                    {/* Mobile Toggler */}
                    <button
                        className="navbar-toggler ocean-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navMenu"
                        aria-controls="navMenu"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="toggler-line"></span>
                        <span className="toggler-line"></span>
                        <span className="toggler-line short"></span>
                    </button>

                    {/* Nav Links */}
                    <div className="collapse navbar-collapse" id="navMenu">
                        <ul className="navbar-nav ms-auto gap-lg-1 align-items-lg-center" role="list">
                            {navLinks.map(link => (
                                <li className="nav-item" key={link.id} role="listitem">
                                    <a
                                        className={`nav-link ocean-link${activeSection === link.id ? ' active' : ''}`}
                                        href={`#${link.id}`}
                                        onClick={e => { e.preventDefault(); scrollTo(link.id); }}
                                        aria-current={activeSection === link.id ? 'page' : undefined}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                            <li className="nav-item ms-lg-3" role="listitem">
                                <a
                                    className="btn-primary-ocean btn-sm-nav"
                                    href="#contact"
                                    onClick={e => { e.preventDefault(); scrollTo('contact'); }}
                                    aria-label="Hire Benedict"
                                >
                                    Hire Me <i className="bi bi-arrow-right-circle" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default NavBarV2;
