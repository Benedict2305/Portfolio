import React from 'react';
import './FooterV2.css';

const FooterV2 = () => {
    const currentYear = new Date().getFullYear();

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'projects', label: 'Projects' },
        { id: 'skills', label: 'Skills' },
        { id: 'contact', label: 'Contact' },
    ];

    const socials = [
        { icon: 'bi-github', href: 'https://github.com/', label: 'GitHub' },
        { icon: 'bi-linkedin', href: 'https://linkedin.com/', label: 'LinkedIn' },
        { icon: 'bi-twitter-x', href: 'https://twitter.com/', label: 'Twitter' },
        { icon: 'bi-instagram', href: 'https://instagram.com/', label: 'Instagram' },
    ];

    return (
        <footer className="site-footer" aria-label="Site footer">
            <div className="footer-glow" aria-hidden="true"></div>
            <div className="container">

                <div className="footer-top">
                    {/* Brand */}
                    <div className="footer-brand-col">
                        <a href="#home" className="footer-logo" onClick={e => { e.preventDefault(); scrollTo('home'); }} aria-label="Back to top">
                            <span className="footer-logo-icon">B</span>
                            <span className="footer-logo-name">Benedict<span className="footer-logo-dot">.</span></span>
                        </a>
                        <p className="footer-tagline">
                            Turning ideas into <strong>exceptional web experiences</strong> — one line of code at a time.
                        </p>
                        <div className="footer-socials" aria-label="Social media links">
                            {socials.map((s, i) => (
                                <a
                                    key={i}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-social-btn"
                                    aria-label={s.label}
                                >
                                    <i className={`bi ${s.icon}`} aria-hidden="true"></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Nav Links */}
                    <nav className="footer-nav-col" aria-label="Footer navigation">
                        <h3 className="footer-col-title">Navigation</h3>
                        <ul>
                            {navLinks.map(link => (
                                <li key={link.id}>
                                    <a
                                        href={`#${link.id}`}
                                        className="footer-nav-link"
                                        onClick={e => { e.preventDefault(); scrollTo(link.id); }}
                                    >
                                        <i className="bi bi-arrow-right-short" aria-hidden="true"></i>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Contact Info */}
                    <address className="footer-contact-col">
                        <h3 className="footer-col-title">Contact</h3>
                        <ul>
                            <li>
                                <i className="bi bi-envelope footer-contact-icon" aria-hidden="true"></i>
                                <a href="mailto:benidzy.bi@gmail.com" className="footer-contact-link">benidzy.bi@gmail.com</a>
                            </li>
                            <li>
                                <i className="bi bi-telephone footer-contact-icon" aria-hidden="true"></i>
                                <a href="tel:+2347067979657" className="footer-contact-link">+234 706 797 9657</a>
                            </li>
                            <li>
                                <i className="bi bi-geo-alt footer-contact-icon" aria-hidden="true"></i>
                                <span className="footer-contact-link">Lagos, Nigeria</span>
                            </li>
                        </ul>
                    </address>
                </div>

                {/* Divider */}
                <div className="footer-divider" aria-hidden="true"></div>

                {/* Bottom */}
                <div className="footer-bottom">
                    <p className="footer-copy">
                        &copy; {currentYear} <span className="gradient-text">Benedict Idio</span>. All rights reserved.
                    </p>
                    <p className="footer-craft">
                        Crafted with <span className="footer-heart" aria-label="love">❤️</span> &amp; React JS
                    </p>
                    <button
                        className="back-to-top"
                        onClick={() => scrollTo('home')}
                        aria-label="Back to top"
                        title="Back to top"
                    >
                        <i className="bi bi-arrow-up" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default FooterV2;
