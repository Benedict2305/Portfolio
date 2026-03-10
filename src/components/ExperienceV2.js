import React from 'react';
import './ExperienceV2.css';

const ExperienceV2 = () => {

    const skills = [
        { name: 'AI Certified', level: 87, icon: 'bi-patch-check', category: 'Certification' },
        { name: 'React.js', level: 70, icon: 'bi-filetype-jsx', category: 'Frontend' },
        { name: 'JavaScript', level: 72, icon: 'bi-filetype-js', category: 'Frontend' },
        { name: 'HTML5', level: 85, icon: 'bi-filetype-html', category: 'Frontend' },
        { name: 'CSS3', level: 77, icon: 'bi-filetype-css', category: 'Frontend' },
        { name: 'Tailwind', level: 78, icon: 'bi-filetype-css', category: 'Frontend' },
        { name: 'Bootstrap 5', level: 78, icon: 'bi-bootstrap', category: 'Frontend' },
        { name: 'Scratch', level: 70, icon: 'bi-git', category: 'Game and Animation' },
        { name: 'PictoBlox', level: 70, icon: 'bi-git', category: 'Game and Animation' },
        { name: 'Bittle Block', level: 70, icon: 'bi-git', category: 'Game and Animation' },
        { name: 'Construct 3', level: 70, icon: 'bi-git', category: 'Game' },
        { name: 'Ardruino IDE', level: 70, icon: 'bi-git', category: 'embedded systems' },
        { name: 'Microsoft word', level: 80, icon: 'bi-git', category: 'Document' },
        { name: 'Problem Solving', level: 78, icon: 'bi-git', category: 'strength' },
        { name: 'Collaboration,', level: 83, icon: 'bi-git', category: 'strength' },
        { name: 'Clear Communication', level: 85, icon: 'bi-git', category: 'strength' },
        { name: 'Data-Driven', level: 80, icon: 'bi-git', category: 'strength' },


    ];

    const experiences = [
        {
            role: 'Coding Program Lead',
            company: 'ST.Francis college',
            period: '2025 — Present',
            desc: [
                'Lead the design and delivery of a structured coding program serving 300+ students across primary and secondary levels.',
                'Developed and implemented a scalable, project-based curriculum covering Scratch, Beetle block, construct 3, HTML, CSS, JavaScript, and introductory web development.'
            ],
            tags: ['scratch', 'Construct 3', 'Beetle Block', 'Pictoblox', 'HTML', 'CSS3', 'javaScript', "python", 'Ardruino'],
        },
        {
            role: 'Coding Program Lead',
            company: 'Sandville group of school',
            period: '2024 — Present',
            desc: [
                'Lead the design and delivery of a structured coding program serving 300+ students across primary and secondary levels.',
                'Developed and implemented a scalable, project-based curriculum covering Scratch, Beetle block, construct 3, HTML, CSS, JavaScript, and introductory web development.'
            ],
            tags: ['scratch', 'Construct 3', 'Beetle Block', 'Pictoblox', 'HTML', 'CSS3', 'Ardruino', 'javaScript', "python"],
        },
        {
            role: 'Junior Frontend Developer',
            company: 'Ziffcode Technologies Limited',
            period: '2025',
            desc: [
                'Developed and maintained an eatery websites (Breakfast place).',
                'Gained foundational expertise in responsive design and cross-browser compatibility.'
            ],
            tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React Js'],
        },
        {
            role: 'Junior Frontend Developer',
            company: 'Freelancer/self employed',
            period: '2025',
            desc: [
                'Developed and an NGO websites (Senidea).',
                'Gained foundational expertise in responsive design and cross-browser compatibility.'
            ],
            tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React'],
        },
        {
            role: 'Junior Frontend Developer',
            company: 'Freelancer/Self employed',
            period: '2024',
            desc: [
                'Developed an eatery website (Amala Ibadan).',
                'Gained foundational expertise in responsive design and cross-browser compatibility.'
            ],
            tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React'],
        },
        {
            role: 'Code Instructor (Frontend Development)',
            company: 'Ziffcode Technologies Limited, Nigeria SEPT',
            period: '2024 - present',
            desc: [
                'Taught frontend development fundamentals to over 30 students using project-based learning.',
                'Guided learners in building real-world projects with HTML, CSS, JavaScript, and React.',
                'Conducted code reviews and provided structured feedback, improving performance by 25%.',
                'Reinforced best practices in clean code, responsiveness, and problem-solving.',
                'Maintained a 95% satisfaction rate in student feedback.'
            ],
            tags: ['React', 'APIs', 'JavaScript', 'CSS3', 'HTML', 'Bootstrap', 'Tailwind'],
        },
    ];

    return (
        <section id="skills" className="skills-section section-pad" aria-label="Skills and experience">
            <div className="container">

                {/* Section Header */}
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-8 text-center reveal">
                        <span className="section-label">Skills & Experience</span>
                        <h2 className="skills-heading">
                            My <span className="gradient-text">Arsenal</span> & Journey
                        </h2>
                        <p className="skills-subtext">
                            Years of deliberate practice distilled into skills that ship products.
                        </p>
                    </div>
                </div>

                <div className="row g-5">

                    {/* Skills Column */}
                    <div className="col-lg-6 reveal">
                        <div className="glass-card skills-card">
                            <h3 className="skills-card-title">
                                <i className="bi bi-cpu text-teal me-2" aria-hidden="true"></i>
                                Technical Skills
                            </h3>
                            <div className="skills-list">
                                {skills.map((skill, i) => (
                                    <div className="skill-item" key={i}>
                                        <div className="skill-info">
                                            <div className="skill-name-wrap">
                                                <i className={`bi ${skill.icon} skill-icon`} aria-hidden="true"></i>
                                                <span className="skill-name">{skill.name}</span>
                                                <span className="skill-category">{skill.category}</span>
                                            </div>
                                            <span className="skill-pct">{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar-track" role="progressbar" aria-valuenow={skill.level} aria-valuemin="0" aria-valuemax="100" aria-label={`${skill.name} proficiency`}>
                                            <div
                                                className="skill-bar-fill"
                                                style={{ '--target-width': `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Experience Column */}
                    <div className="col-lg-6 reveal reveal-delay-2">
                        <h3 className="exp-col-title">
                            <i className="bi bi-briefcase text-teal me-2" aria-hidden="true"></i>
                            Work Experience
                        </h3>
                        <ol className="experience-timeline" aria-label="Work experience timeline">
                            {experiences.map((exp, i) => (
                                <li className="timeline-item" key={i}>
                                    <div className="timeline-dot" aria-hidden="true"></div>
                                    <div className="timeline-card glass-card">
                                        <div className="timeline-header">
                                            <div>
                                                <h4 className="timeline-role">{exp.role}</h4>
                                                <p className="timeline-company">
                                                    <i className="bi bi-building me-1" aria-hidden="true"></i>
                                                    {exp.company}
                                                </p>
                                            </div>
                                            <span className="timeline-period">
                                                <i className="bi bi-calendar3 me-1" aria-hidden="true"></i>
                                                {exp.period}
                                            </span>
                                        </div>
                                        <ul className="timeline-list">
                                            {exp.desc.map((item, index) => (
                                                <li key={index} className="timeline-desc">{item}</li>
                                            ))}
                                        </ul>
                                        <div className="timeline-tags">
                                            {exp.tags.map((tag, j) => (
                                                <span className="stack-badge" key={j}>{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ExperienceV2;
