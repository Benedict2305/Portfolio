import React, { useEffect, useRef } from 'react';
import './HeroV2.css';

const roles = ['Frontend Developer', 'Web Developer', 'Code Instructor'];

const HeroV2 = () => {
    const typedRef = useRef(null);

    useEffect(() => {
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let timer;

        const typeLoop = () => {
            const currentRole = roles[roleIndex];
            const el = typedRef.current;
            if (!el) return;

            if (!isDeleting) {
                el.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
                if (charIndex === currentRole.length) {
                    isDeleting = true;
                    timer = setTimeout(typeLoop, 2000);
                    return;
                }
            } else {
                el.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
                if (charIndex === 0) {
                    isDeleting = false;
                    roleIndex = (roleIndex + 1) % roles.length;
                }
            }
            timer = setTimeout(typeLoop, isDeleting ? 60 : 90);
        };

        timer = setTimeout(typeLoop, 800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="home" className="hero-section" aria-label="Hero section">
            {/* Animated grid background */}
            <div className="hero-grid" aria-hidden="true"></div>

            <div className="container hero-container">
                <div className="row align-items-center g-5">

                    {/* Left Content */}
                    <div className="col-lg-7">
                        <div className="hero-content">
                            <div className="hero-badge reveal">
                                <span className="badge-dot" aria-hidden="true"></span>
                                Available for Work
                            </div>

                            <h1 className="hero-title reveal reveal-delay-1">
                                Hi, I'm <span className="gradient-text">Benedict Idio</span>
                            </h1>

                            <div className="hero-typed-wrapper reveal reveal-delay-2">
                                <span className="typed-static">I'm a </span>
                                <span className="typed-text" ref={typedRef}></span>
                                <span className="typed-cursor" aria-hidden="true">|</span>
                            </div>

                            <p className="hero-description reveal reveal-delay-3">
                                I build <strong>beautiful, fast, and accessible</strong> web experiences.
                                Specializing in React and modern JavaScript — turning ideas into
                                products that users love.
                            </p>

                            <div className="hero-cta reveal reveal-delay-4">
                                <a href="#projects" className="btn-primary-ocean" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
                                    View My Work <i className="bi bi-arrow-down-right" aria-hidden="true"></i>
                                </a>
                                <a href="#contact" className="btn-secondary-ocean" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                                    Let's Talk <i className="bi bi-chat-dots" aria-hidden="true"></i>
                                </a>
                            </div>

                            {/* Social Links */}
                            <div className="hero-socials reveal reveal-delay-5" aria-label="Social media links">
                                <a href="https://github.com/benedict2305" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="GitHub Profile">
                                    <i className="bi bi-github" aria-hidden="true"></i>
                                </a>
                                <a href="https://linkedin.com/in/benedict-idio" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="LinkedIn Profile">
                                    <i className="bi bi-linkedin" aria-hidden="true"></i>
                                </a>
                                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="Twitter Profile">
                                    <i className="bi bi-twitter-x" aria-hidden="true"></i>
                                </a>
                                <span className="social-divider" aria-hidden="true"></span>
                                <a href="mailto:benidzy.bi@gmail.com" className="hero-social-link" aria-label="Send Email">
                                    <i className="bi bi-envelope" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="col-lg-5 d-none d-lg-block">
                        <div className="hero-visual reveal reveal-delay-2" aria-hidden="true">
                            {/* Avatar card */}
                            <div className="hero-avatar-ring">
                                <div className="hero-avatar-inner">
                                    <i className="bi bi-code-slash hero-avatar-icon"></i>
                                </div>
                            </div>

                            {/* Floating stat cards */}
                            <article className="hero-float-card card-top-left">
                                <span className="float-card-num gradient-text">3+</span>
                                <span className="float-card-label">Years Experience</span>
                            </article>

                            <article className="hero-float-card card-bottom-right">
                                <span className="float-card-num gradient-text">8+</span>
                                <span className="float-card-label">Projects Shipped</span>
                            </article>

                            <article className="hero-float-card card-bottom-left">
                                <i className="bi bi-star-fill text-warning me-1"></i>
                                <span className="float-card-label">80% Client Satisfaction</span>
                            </article>
                        </div>
                    </div>

                </div>
            </div>

            {/* Scroll indicator */}
            <div className="hero-scroll-cue" aria-label="Scroll down indicator">
                <span className="scroll-label">Scroll</span>
                <div className="scroll-line"></div>
            </div>
        </section>
    );
};

export default HeroV2;
