import React from 'react';
import '../styles/Skills.css';

function Skills() {
  const skillsData = {
    'Front-End': ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript (ES6+)', 'Responsive Design', 'Mobile-First Development', 'React'],
    'Back-End': ['PHP', 'RESTful API Integration', 'Server-Side Scripting', 'Form Handling'],
    'Database': ['MySQL', 'Database Design', 'Query Optimization', 'phpMyAdmin'],
    'Dev Tools': ['Git', 'GitHub', 'VS Code', 'cPanel', 'Web Hosting', 'FTP', 'File Manager'],
    'CMS & SEO': ['WordPress', 'On-Page SEO', 'Meta Tags', 'Semantic HTML', 'Site Speed Optimization'],
    'Admin & UI': ['Admin Panel Development', 'Dynamic Forms', 'Bug Fixing', 'Cross-Browser Testing'],
    'Soft Skills': ['Clean Code', 'Requirement Analysis', 'Team Collaboration', 'On-Time Delivery', 'Attention to Detail']
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <span className="section-eyebrow">What I work with</span>
        <h2>Skills & Expertise</h2>
        <div className="skills-grid">
          {Object.entries(skillsData).map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category[0]}</h3>
              <div className="skill-tags">
                {category[1].map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
