import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import './ContactV2.css';

const ContactV2 = () => {
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            Swal.fire({
                icon: 'warning',
                title: 'Hold on!',
                text: 'Please fill in all required fields before sending.',
                background: '#0a1628',
                color: '#f0f9ff',
                iconColor: '#f59e0b',
                confirmButtonColor: '#14f1d9',
                confirmButtonText: 'Got it',
            });
            return;
        }

        setLoading(true);

        try {
            await emailjs.sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                formRef.current,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            );

            Swal.fire({
                icon: 'success',
                title: '🎉 Message Sent!',
                html: `<p style="color:#94a3b8">Thanks <strong style="color:#14f1d9">${formData.name}</strong>! I'll get back to you within 24 hours.</p>`,
                background: '#0a1628',
                color: '#f0f9ff',
                iconColor: '#14f1d9',
                confirmButtonColor: '#14f1d9',
                confirmButtonText: 'Awesome!',
                showClass: {
                    popup: 'swal2-show',
                },
            });

            setFormData({ name: '', email: '', subject: '', message: '' });
            formRef.current.reset();

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops! Something went wrong.',
                html: `<p style="color:#94a3b8">Please try again or email me directly at <a href="mailto:benidzy.bi@gmail.com" style="color:#14f1d9">benidzy.bi@gmail.com</a>.</p>`,
                background: '#0a1628',
                color: '#f0f9ff',
                iconColor: '#f472b6',
                confirmButtonColor: '#14f1d9',
                confirmButtonText: 'Retry',
            });
        } finally {
            setLoading(false);
        }
    };

    const contactInfo = [
        {
            icon: 'bi-envelope-at',
            label: 'Email',
            value: 'benidzy.bi@gmail.com',
            href: 'mailto:benidzy.bi@gmail.com',
        },
        {
            icon: 'bi-telephone',
            label: 'Phone',
            value: '+2347067979657',
            href: 'tel:+2347067979657',
        },
        {
            icon: 'bi-geo-alt',
            label: 'Location',
            value: 'Lagos, Nigeria',
            href: null,
        },
    ];

    return (
        <section id="contact" className="contact-section section-pad" aria-label="Contact me">
            <div className="container">

                {/* Header */}
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-8 text-center reveal">
                        <span className="section-label">Get In Touch</span>
                        <h2 className="contact-heading">
                            Let's Build Something <span className="gradient-text">Incredible</span>
                        </h2>
                        <p className="contact-subtext">
                            Have a project in mind? Open to freelance work and full-time opportunities.
                            Drop a message and I'll respond within 24 hours.
                        </p>
                    </div>
                </div>

                <div className="row g-4">

                    {/* Contact Info Side */}
                    <div className="col-lg-4 reveal">
                        <div className="contact-info-panel">

                            {/* Status Card */}
                            <div className="glass-card availability-card">
                                <div className="avail-pulse" aria-hidden="true"></div>
                                <div>
                                    <p className="avail-status">Currently Available</p>
                                    <p className="avail-sub">Open to new projects & roles</p>
                                </div>
                            </div>

                            {/* Contact Links */}
                            <div className="contact-links-list">
                                {contactInfo.map((info, i) => (
                                    <div className="glass-card contact-link-card" key={i}>
                                        <div className="contact-link-icon" aria-hidden="true">
                                            <i className={`bi ${info.icon}`}></i>
                                        </div>
                                        <div>
                                            <p className="contact-link-label">{info.label}</p>
                                            {info.href ? (
                                                <a href={info.href} className="contact-link-value">{info.value}</a>
                                            ) : (
                                                <p className="contact-link-value">{info.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Socials */}
                            <div className="contact-socials" aria-label="Social media links">
                                {[
                                    { icon: 'bi-github', href: 'https://github.com/benedict2305', label: 'GitHub' },
                                    { icon: 'bi-linkedin', href: 'https://linkedin.com/in/benedict-idio', label: 'LinkedIn' },
                                    { icon: 'bi-twitter-x', href: 'https://twitter.com/', label: 'Twitter' },
                                    { icon: 'bi-instagram', href: 'https://instagram.com/', label: 'Instagram' },
                                ].map((s, i) => (
                                    <a
                                        href={s.href}
                                        key={i}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="contact-social-ico"
                                        aria-label={s.label}
                                    >
                                        <i className={`bi ${s.icon}`} aria-hidden="true"></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="col-lg-8 reveal reveal-delay-2">
                        <div className="glass-card contact-form-card">
                            <h3 className="contact-form-title">Send  a  Message</h3>
                            <form ref={formRef} onSubmit={handleSubmit} noValidate aria-label="Contact form">
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="contact-field">
                                            <label htmlFor="contact-name" className="contact-label">
                                                Full Name <span className="required" aria-hidden="true">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="contact-name"
                                                name="name"
                                                className="contact-input"
                                                placeholder="Enter name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                autoComplete="name"
                                                aria-required="true"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="contact-field">
                                            <label htmlFor="contact-email" className="contact-label">
                                                Email Address <span className="required" aria-hidden="true">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                id="contact-email"
                                                name="email"
                                                className="contact-input"
                                                placeholder="Enter email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                autoComplete="email"
                                                aria-required="true"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="contact-field">
                                            <label htmlFor="contact-subject" className="contact-label">
                                                Subject
                                            </label>
                                            <input
                                                type="text"
                                                id="contact-subject"
                                                name="subject"
                                                className="contact-input"
                                                placeholder="Project Inquiry / Job Opportunity / Collaboration"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                autoComplete="off"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="contact-field">
                                            <label htmlFor="contact-message" className="contact-label">
                                                Your Message <span className="required" aria-hidden="true">*</span>
                                            </label>
                                            <textarea
                                                id="contact-message"
                                                name="message"
                                                className="contact-input contact-textarea"
                                                rows="6"
                                                placeholder="Tell me about your project, timeline, and budget..."
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                aria-required="true"
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button
                                            type="submit"
                                            className="btn-primary-ocean contact-submit-btn"
                                            disabled={loading}
                                            aria-busy={loading}
                                        >
                                            {loading ? (
                                                <>
                                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <i className="bi bi-send" aria-hidden="true"></i>
                                                    Send Message
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactV2;
