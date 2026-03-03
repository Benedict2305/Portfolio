import React, { useEffect, useRef } from 'react';
import './AboutV2.css';

const AboutV2 = () => {

    const stats = [
        { number: '3+', label: 'Years Experience' },
        { number: '8+', label: 'Projects Delivered' },
        { number: '6+', label: 'Happy Clients' },
        { number: '100%', label: 'Dedication' },
    ];

    const values = [
        {
            icon: 'bi-person-heart',
            title: 'User-First Mindset',
            desc: 'Every decision starts with the user. I design and build with empathy, ensuring intuitive experiences.'
        },
        {
            icon: 'bi-lightning-charge',
            title: 'Performance Obsessed',
            desc: 'Speed is a feature. I write clean, optimized code that loads fast and runs smooth.'
        },
        {
            icon: 'bi-arrow-repeat',
            title: 'Always Evolving',
            desc: 'Tech moves fast. I stay ahead by constantly learning, experimenting, and shipping better solutions.'
        },
    ];

    return (
        <section id="about" className="about-section section-pad" aria-label="About me">
            <div className="container">

                {/* Section Header */}
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-8 text-center reveal">
                        <span className="section-label">About Me</span>
                        <h2 className="about-heading">
                            Building the Web,<br />
                            <span className="gradient-text">One Pixel at a Time</span>
                        </h2>
                    </div>
                </div>

                <div className="row g-4 align-items-stretch">

                    {/* Bio Card */}
                    <div className="col-lg-5 reveal">
                        <div className="glass-card about-bio-card h-100">
                            <div className="about-bio-top">
                                <div className="about-avatar">
                                    <i className="bi bi-person-badge-fill" aria-hidden="true"></i>
                                </div>
                                <div>
                                    <h3 className="about-name">Benedict Idio</h3>
                                    <p className="about-role-tag">Frontend Developer</p>
                                </div>
                            </div>

                            <p className="about-bio-text">
                                I'm a passionate <strong>Frontend Developer</strong> from Nigeria, with 5+ years
                                crafting premium web experiences. I specialize in <strong>React</strong>,
                                <strong> modern JavaScript</strong>, and responsive design —
                                delivering products that are both visually stunning and technically robust.
                            </p>
                            <p className="about-bio-text">
                                My goal is simple: to write code that <strong>solves real problems</strong> and
                                creates genuine value. When I'm not coding, I'm exploring design trends,
                                contributing to open source, or mentoring upcoming developers.
                            </p>

                            <a
                                href="/Benedict_Idio_CV.pdf"
                                download
                                className="btn-primary-ocean about-cv-btn"
                                aria-label="Download resume"
                            >
                                <i className="bi bi-download" aria-hidden="true"></i> Download Resume
                            </a>
                        </div>
                    </div>

                    {/* Stats + Values */}
                    <div className="col-lg-7">
                        {/* Stats Row */}
                        <div className="row g-3 mb-4">
                            {stats.map((s, i) => (
                                <div className="col-6 col-sm-3 reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                                    <div className="glass-card stat-card text-center">
                                        <span className="stat-num gradient-text">{s.number}</span>
                                        <span className="stat-lbl">{s.label}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Value Cards */}
                        <div className="d-flex flex-column gap-3">
                            {values.map((v, i) => (
                                <div className="glass-card value-card reveal" key={i} style={{ transitionDelay: `${0.2 + i * 0.15}s` }}>
                                    <div className="value-icon" aria-hidden="true">
                                        <i className={`bi ${v.icon}`}></i>
                                    </div>
                                    <div>
                                        <h4 className="value-title">{v.title}</h4>
                                        <p className="value-desc">{v.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutV2;
