import React from 'react';
import '../styles/Projects.css';

// Image strategy per project:
//   1. localImage  -> drop a file in public/images/ (e.g. from your LinkedIn posts)
//   2. mShots      -> live screenshot of the site (auto fallback)
//   3. thum.io     -> secondary live screenshot fallback
const shot = (url) =>
  `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=800&h=500`;
const shotFallback = (url) =>
  `https://image.thum.io/get/width/800/crop/500/${url}`;

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'LVR & Sons Club — Digital Platform',
      company: 'Client Project',
      duration: 'January 2026 - Present',
      tag: 'Full Stack · Live',
      url: 'https://lvrclub.com',
      localImage: '/images/lvrclub.jpg',
      overview:
        'A complete digital platform for LVR & Sons Club & Reading Room — a heritage recreational club in Guntur with 1,500+ members — pairing a professional public website with a full-featured admin system to run daily operations.',
      problem:
        'The club managed bookings, billing, and member records manually across its gym, guest rooms, banquet hall, restaurant, and events. This was slow, error-prone, and gave members no online presence.',
      solution:
        'I built a responsive marketing website showcasing the club\'s facilities and a secure, role-based admin panel backed by a REST API and MySQL. Staff now manage room bookings, billing, member records, and reports from one dashboard, while members get a fast, SEO-optimised public site.',
      role:
        'End-to-end developer — frontend UI, PHP/MySQL backend, REST API integration, performance tuning, and deployment.',
      features: [
        'Professional, fully responsive public website built with Bootstrap',
        'Admin panel with modules for room bookings, billing, members & reports',
        'RESTful API with secure login and role-based access control',
        'Dynamic forms with full client- and server-side validation',
        'Optimised database queries and image compression for fast load times',
        'On-page SEO with semantic markup for better discoverability',
        'Deployment pipeline using Git and cPanel'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL', 'REST APIs', 'Git'],
      outcomes: [
        'Replaced manual record-keeping with a real-time dashboard',
        'Faster load times via query optimisation & image compression',
        'Secure role-based access for different staff roles'
      ]
    },
    {
      id: 2,
      title: 'KMK Events — Event Management Website',
      company: 'Client Project',
      tag: 'Web Development · Live',
      url: 'https://kmkglobal.in',
      localImage: '/images/kmkglobal.jpg',
      overview:
        'A polished marketing website for KMK Events, a premium event-management company with a 25-year legacy and 10,000+ events across seven Indian cities including Hyderabad, Vijayawada, Chennai, and Bengaluru.',
      problem:
        'KMK Events needed a strong online presence to showcase their wedding, corporate, and social event services across multiple cities, and to convert visitors into enquiries.',
      solution:
        'I designed and developed a visually rich, responsive website highlighting their service categories, multi-city reach, portfolio, and an enquiry flow — built to load fast and present the brand professionally on every device.',
      role:
        'Frontend & website developer — responsive UI, content structure, performance, and deployment.',
      features: [
        'Modern, responsive design that reflects a premium event brand',
        'Service sections for weddings, corporate & social events and catering',
        'Multi-city presence and portfolio showcase',
        'Enquiry / contact flow to capture leads',
        'Image-optimised galleries for fast loading',
        'SEO-friendly semantic structure',
        'Cross-browser and mobile-first layout'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'PHP', 'Git'],
      outcomes: [
        'Professional online presence reflecting a 25-year legacy',
        'Clear path from visitor to enquiry',
        'Consistent experience across all devices'
      ]
    },
    {
      id: 3,
      title: 'Parichaya Vedika — Matrimonial Platform',
      company: 'Client Project',
      tag: 'Full Stack · Live',
      url: 'https://parichayavedika.in',
      localImage: '/images/parichayavedika.jpg',
      overview:
        'A discreet, concierge-grade matrimonial platform aimed at NRI and high-net-worth families, with verified profiles, privacy controls, and smart matchmaking across India, the US, UK, Canada, Australia, and the Gulf.',
      problem:
        'The platform needed verified, privacy-first member profiles, advanced search, and secure messaging — sensitive features where trust, data protection, and a premium feel are essential.',
      solution:
        'I helped build a secure platform with multi-step profile registration and verification (document, mobile, email), privacy controls over photos and contact info, advanced search filtering, and secure messaging — wrapped in a refined, trustworthy UI.',
      role:
        'Full stack developer — registration & verification flows, search, privacy controls, and responsive UI.',
      features: [
        'Multi-step registration with document, mobile & email verification',
        'Privacy controls over photo and contact-info visibility',
        'Smart search with advanced filtering',
        'Secure messaging and introduction scheduling',
        'Membership tiers from free to premium packages',
        'Success stories and blog content sections',
        'Responsive, premium-feel interface'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL', 'REST APIs'],
      outcomes: [
        'Verified, privacy-first member profiles',
        'Secure messaging built around trust & data protection',
        'Global reach across multiple countries'
      ]
    },
    {
      id: 4,
      title: 'Personal Portfolio Website',
      company: 'Self-Initiated',
      tag: 'Frontend · Live',
      url: '#home',
      localImage: '/images/project-portfolio.svg',
      overview:
        'A professional portfolio to showcase my skills, projects, and experience with a clean, modern, fully responsive interface.',
      problem:
        'I needed a single online presence that presents my work clearly to recruiters and clients and works flawlessly on every device.',
      solution:
        'I built a mobile-first, SEO-friendly React site with smooth navigation, animations, and an interactive contact form, deployed to a custom domain with the code tracked on GitHub.',
      role: 'Sole designer & developer — design, build, and deployment.',
      features: [
        'Fully responsive, mobile-first layout',
        'Modern UI with smooth animations',
        'Interactive contact form',
        'Semantic HTML5 structure for better SEO',
        'Optimised load speed through image compression',
        'Custom domain deployment via cPanel',
        'Source code version-controlled with Git & GitHub'
      ],
      technologies: ['React', 'JavaScript', 'CSS3', 'HTML5', 'Git', 'GitHub'],
      outcomes: [
        'Single professional online presence',
        'Consistent experience across all devices',
        'Working contact channel'
      ]
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <span className="section-eyebrow">Selected work</span>
        <h2>Featured Projects</h2>
        <p className="section-subtitle">
          A closer look at what I've built — the problem, my approach, and the result.
        </p>

        <div className="projects-list">
          {projects.map((project, idx) => {
            const hasLiveSite = project.url && project.url.startsWith('http');
            // Ordered list of image sources to try.
            const sources = [
              project.localImage,
              hasLiveSite && shot(project.url),
              hasLiveSite && shotFallback(project.url)
            ].filter(Boolean);
            return (
              <article key={project.id} className="project-card">
                <div className="project-media">
                  <span className="project-tag">{project.tag}</span>
                  <img
                    src={sources[0]}
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                    data-step="0"
                    onError={(e) => {
                      const next = Number(e.currentTarget.dataset.step) + 1;
                      if (sources[next]) {
                        e.currentTarget.dataset.step = String(next);
                        e.currentTarget.src = sources[next];
                      }
                    }}
                  />
                </div>

                <div className="project-body">
                  <span className="project-no">{String(idx + 1).padStart(2, '0')}</span>
                  <div className="project-head">
                    <h3>{project.title}</h3>
                    <p className="company">
                      {project.company}
                      {project.duration && <span className="dot">•</span>}
                      {project.duration && <span className="duration">{project.duration}</span>}
                    </p>
                  </div>

                  <p className="overview">{project.overview}</p>

                  <div className="detail-grid">
                    <div className="detail-block">
                      <h4><span className="ico">🎯</span> The Problem</h4>
                      <p>{project.problem}</p>
                    </div>
                    <div className="detail-block">
                      <h4><span className="ico">💡</span> My Solution</h4>
                      <p>{project.solution}</p>
                    </div>
                    <div className="detail-block">
                      <h4><span className="ico">🧑‍💻</span> My Role</h4>
                      <p>{project.role}</p>
                    </div>
                  </div>

                  <div className="features">
                    <h4><span className="ico">⚙️</span> Key Features</h4>
                    <ul>
                      {project.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="outcomes">
                    <h4><span className="ico">📈</span> Outcomes</h4>
                    <div className="outcome-chips">
                      {project.outcomes.map((o, idx) => (
                        <span key={idx} className="outcome-chip">{o}</span>
                      ))}
                    </div>
                  </div>

                  <div className="technologies">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>

                  {project.url && project.url !== '#home' && (
                    <a
                      href={project.url}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Live Site →
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
