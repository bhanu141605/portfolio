import React from 'react';
import '../styles/Experience.css';

function Experience() {
  const experiences = [
    {
      title: 'Web Developer Intern',
      company: 'Gagan Apps',
      initials: 'GA',
      type: 'Internship',
      location: 'Virtual',
      duration: 'August 2025 - Present',
      tech: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'PHP', 'MySQL', 'REST APIs', 'Git'],
      responsibilities: [
        'Designed, developed, and deployed responsive websites and dynamic web applications using HTML5, CSS3, Bootstrap, JavaScript, PHP, and MySQL',
        'Created new website pages and updated existing website content for the LVR Club platform',
        'Built a multi-module admin panel with sections for room bookings, bar billing, office management, member records, accounts, and reports',
        'Developed and integrated RESTful APIs connecting front-end to PHP and MySQL back-end',
        'Built dynamic web forms with client-side and server-side validation',
        'Ensured websites are fast, secure, and mobile-friendly with proper optimization techniques',
        'Managed deployment via cPanel and maintained clean codebase with Git'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <span className="section-eyebrow">My journey</span>
        <h2>Professional Experience</h2>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-top">
                <div className="exp-logo">{exp.initials}</div>
                <div className="exp-titles">
                  <div className="experience-header">
                    <h3>{exp.title}</h3>
                    <span className="duration">{exp.duration}</span>
                  </div>
                  <p className="company">
                    {exp.company}
                    <span className="exp-meta">{exp.type}</span>
                    <span className="exp-meta">{exp.location}</span>
                  </p>
                </div>
              </div>
              <ul className="responsibilities">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
              {exp.tech && (
                <div className="exp-tech">
                  {exp.tech.map((t, idx) => (
                    <span key={idx} className="exp-tech-tag">{t}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
