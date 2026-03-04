import React from 'react';
import './ProjectsV2.css';
import mywork_data from './mywork_data';

const ProjectsV2 = () => {
    const technologies = [
        { name: 'React', icon: 'bi-filetype-jsx' },
        { name: 'JavaScript', icon: 'bi-filetype-js' },
        { name: 'Bootstrap 5', icon: 'bi-bootstrap' },
        { name: 'Tailwind', icon: 'bi-filetype-css' },
        { name: 'HTML5', icon: 'bi-filetype-html' },
        { name: 'CSS3', icon: 'bi-filetype-css' },
        { name: 'Git', icon: 'bi-git' },
        { name: 'GitHub', icon: 'bi-github' },
        { name: 'Scratch', icon: 'bi-scratch' },
        { name: 'Beetle Block', icon: 'bi-beetle-block' },
        { name: 'Construct 3', icon: 'bi-construct-3' },
        { name: 'PictoBlox', icon: 'bi-pictoblox' },
        { name: 'Ardruino IDE', icon: 'bi-ardruino-ide' },
    ];

    return (
        <section id="projects" className="projects-section section-pad" aria-label="My projects">
            <div className="container">

                {/* Header */}
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-8 text-center reveal">
                        <span className="section-label">Featured Work</span>
                        <h2 className="projects-heading">
                            Projects That <span className="gradient-text">Speak Volumes</span>
                        </h2>
                        <p className="projects-subtext">
                            A curated selection of real-world products I've built — each one a challenge conquered.
                        </p>
                    </div>
                </div>

                {/* Project Cards Grid */}
                <div className="projects-grid">
                    {mywork_data.map((project, index) => (
                        <article
                            className={`project-card reveal reveal-delay-${(index % 4) + 1}`}
                            key={index}
                            aria-label={`Project: ${project.w_name}`}
                        >
                            {/* Image */}
                            <div className="project-img-wrap">
                                <img
                                    src={project.w_img}
                                    alt={`Screenshot of ${project.w_name}`}
                                    loading="lazy"
                                />
                                <div className="project-img-overlay" aria-hidden="true">
                                    <a
                                        href={project.w_buttonUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-live-btn"
                                        aria-label={`View ${project.w_name} live site`}
                                        onClick={e => e.stopPropagation()}
                                    >
                                        <i className="bi bi-arrow-up-right" aria-hidden="true"></i> Live Preview
                                    </a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="project-content">
                                <div className="project-meta">
                                    <span className="project-tag">Frontend Development</span>
                                    <a
                                        href={project.w_buttonUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-ext-link"
                                        aria-label={`Open ${project.w_name}`}
                                    >
                                        <i className="bi bi-box-arrow-up-right"></i>
                                    </a>
                                </div>
                                <h3 className="project-name">{project.w_name}</h3>
                                <p className="project-detail">{project.w_detail}</p>
                                <div className="project-stack">
                                    <span className="stack-badge">React</span>
                                    <span className="stack-badge">Bootstrap</span>
                                    <span className="stack-badge">JavaScript</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {/* Tech Marquee */}
            <div className="tech-marquee-bar" aria-label="Technologies I use" role="complementary">
                <div className="marquee-track">
                    {[...technologies, ...technologies].map((tech, i) => (
                        <div className="marquee-item" key={i} aria-hidden={i >= technologies.length}>
                            <i className={`bi ${tech.icon}`} aria-hidden="true"></i>
                            <span>{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsV2;
