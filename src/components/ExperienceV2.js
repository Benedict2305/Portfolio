import React from 'react';
import './ExperienceV2.css';

const ExperienceV2 = () => {

    const skillGroups = [
        {
            title: 'Proficient',
            items: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Bootstrap', 'TailwindCSS', 'Git & GitHub', 'Restful APIs']
        },
        {
            title: 'Familiar With',
            items: ['Figma (for UI/UX)']
        },
        {
            title: 'Currently Learning',
            items: ['NodeJS', 'MongoDB', 'TypeScript', 'Testing (Jest/React Testing Library)', 'PostgreSQL', 'MySQL']
        }
    ];

    const experiences = [
        {
            role: 'Coding Program Instructor',
            company: 'ST.Francis college',
            period: '2025 — Present',
            desc: [
                'Teach and mentor 300+ students across primary and secondary levels in structured coding programs.',
                'Developed a project-based curriculum covering Scratch, Beetle Block, Construct 3, HTML, CSS, JavaScript, and introductory web development.'
            ],
            tags: ['scratch', 'Construct 3', 'Beetle Block', 'Pictoblox', 'HTML', 'CSS3', 'JavaScript', "python", 'Arduino'],
        },
        {
            role: 'Coding Program Instructor',
            company: 'Sandville Group of Schools',
            period: '2024 — Present',
            desc: [
                'Teach and mentor 300+ students across primary and secondary levels in structured coding programs.',
                'Developed a project-based curriculum covering Scratch, Beetle Block, Construct 3, HTML, CSS, JavaScript, and introductory web development.'
            ],
            tags: ['scratch', 'Construct 3', 'Beetle Block', 'Pictoblox', 'HTML', 'CSS3', 'Arduino', 'JavaScript', "python"]
        },
        {
            role: 'Junior Frontend Developer',
            company: 'Ziffcode Technologies Limited',
            
            period: '2025',
            desc: [
                'Developed and maintained eatery websites using responsive design principles.',
                'Built cross-browser compatible interfaces with React and Bootstrap for client delivery.'
            ],
            tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React'],
        },
        {
            role: 'Junior Frontend Developer',
            company: 'Freelancer/Self-Employed',
            period: '2025',
            desc: [
                'Built NGO website (Senidea) focused on accessibility and clear messaging.',
                'Implemented responsive layouts and accessibility features for mission-driven organizations.'
            ],
            tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React'],
        },
        {
            role: 'Junior Frontend Developer',
            company: 'Freelancer/Self-Employed',
            period: '2024',
            desc: [
                'Built restaurant website (Amala Ibadan) showcasing brand identity and menu offerings.',
                'Developed responsive, visually rich interfaces with clean navigation and user engagement focus.'
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
            tags: ['React', 'REST APIs', 'JavaScript', 'CSS3', 'HTML5', 'Bootstrap', 'TailwindCSS'],
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
                            <h2 className="skills-card-title">
                                <i className="bi bi-cpu text-teal me-2" aria-hidden="true"></i>
                                Technical Skills
                            </h2>
                            <div className="skills-list">
                                {skillGroups.map((group, i) => (
                                    <div className="skill-group" key={i}>
                                        <h3 className="skill-group-title">{group.title}</h3>
                                        <ul className="skill-group-list">
                                            {group.items.map((item, index) => (
                                                <li className="skill-group-item" key={index}>{item}</li>
                                            ))}
                                        </ul>
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
