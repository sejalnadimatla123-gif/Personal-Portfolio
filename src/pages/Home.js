import React from 'react';
import { Link } from 'react-router-dom';

const skills = [
  {
    title: 'Languages',
    items: ['Python', 'C++', 'SQL', 'Java']
  },
  {
    title: 'AI / ML Frameworks',
    items: ['NumPy', 'Pandas', 'Scikit-learn', 'PyTorch', 'LangChain', 'Matplotlib', 'Seaborn']
  },
  {
    title: 'Frontend',
    items: ['React', 'Streamlit', 'HTML / CSS', 'JavaScript']
  },
  {
    title: 'Backend & Tools',
    items: ['FastAPI', 'Git', 'GitHub', 'Gemini API', 'FAISS']
  },
  {
    title: 'Specializations',
    items: ['Deep Learning', 'NLP', 'LLMs', 'RAG Systems']
  }
];

const interests = [
  { num: '01', title: 'Large Language Models & RAG' },
  { num: '02', title: 'Natural Language Processing' },
  { num: '03', title: 'Deep Learning & Neural Networks' },
  { num: '04', title: 'Applied Machine Learning' },
  { num: '05', title: 'Human-Centered AI Systems' }
];

function Home() {
  return (
    <div className="page">
      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="hero-left">
          <div className="hero-meta">
            <div className="hero-meta-line"></div>
            <span className="eyebrow">Portfolio · 2026</span>
          </div>
          <h1 className="hero-title display">
            <span className="first">Sejal</span>
            <span className="last">Nadimatla.</span>
          </h1>
          <p className="hero-tagline">
            Computer Science student at Mahindra University, building things at the
            intersection of <em>artificial intelligence</em>, language, and thoughtful software.
          </p>
          <div className="hero-cta">
            <Link to="/projects" className="btn btn-primary">
              View Projects <span className="arrow">→</span>
            </Link>
            <a href="mailto:sejalnadimatla123@gmail.com" className="btn btn-ghost">
              Get in touch
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="profile-frame">
            <span className="profile-tag">◉ Available · 2026</span>
            <div className="profile-art">
              <img
                src={process.env.PUBLIC_URL + '/sejal.jpeg'}
                alt="Sejal Nadimatla"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block'
                }}
              />
            </div>
            <div className="profile-badge">
              <span>AI · ML</span>
              <span style={{fontSize: '1.4rem', margin: '0.2rem 0'}}>◈</span>
              <span>Developer</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MARQUEE ============ */}
      <div className="marquee">
        <div className="marquee-track">
          <span className="marquee-item">Machine Learning<span className="dot">◆</span></span>
          <span className="marquee-item">Natural Language Processing<span className="dot">◆</span></span>
          <span className="marquee-item">Deep Learning<span className="dot">◆</span></span>
          <span className="marquee-item">Full-Stack Development<span className="dot">◆</span></span>
          <span className="marquee-item">Large Language Models<span className="dot">◆</span></span>
          <span className="marquee-item">RAG Systems<span className="dot">◆</span></span>
          {/* Duplicate for seamless loop */}
          <span className="marquee-item">Machine Learning<span className="dot">◆</span></span>
          <span className="marquee-item">Natural Language Processing<span className="dot">◆</span></span>
          <span className="marquee-item">Deep Learning<span className="dot">◆</span></span>
          <span className="marquee-item">Full-Stack Development<span className="dot">◆</span></span>
          <span className="marquee-item">Large Language Models<span className="dot">◆</span></span>
          <span className="marquee-item">RAG Systems<span className="dot">◆</span></span>
        </div>
      </div>

      {/* ============ ABOUT ============ */}
      <section className="section" id="about">
        <div className="section-head">
          <div className="section-number italic">01</div>
          <div>
            <div className="eyebrow" style={{marginBottom: '0.5rem'}}>About</div>
            <h2 className="section-title display">
              A little <em className="italic" style={{color: 'var(--gold)'}}>about me.</em>
            </h2>
          </div>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a third-year Computer Science Engineering student at Mahindra University,
              Hyderabad, where I've been exploring the world of AI and machine learning
              with a curiosity that keeps expanding.
            </p>
            <p>
              My work lives at the intersection of <em style={{color: 'var(--gold)', fontStyle: 'italic'}}>
              language, intelligence, and interface</em> — I'm drawn to building systems
              that don't just work, but feel considered. Right now I'm deep into LLMs,
              retrieval-augmented generation, and crafting the kind of software I'd want to use.
            </p>
            <p>
              Recently finished a data science internship at Argano, where I got to ship
              AI agents and real data pipelines. Always open to interesting problems.
            </p>
          </div>

          <div>
            <div className="eyebrow" style={{marginBottom: '1.5rem'}}>Research Interests</div>
            <ul className="interests-list">
              {interests.map((item) => (
                <li key={item.num}>
                  <span className="interest-num">{item.num}</span>
                  <span className="interest-title">{item.title}</span>
                  <span className="interest-arrow">→</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* ============ EXPERIENCE ============ */}
      <section className="section" id="experience">
        <div className="section-head">
          <div className="section-number italic">02</div>
          <div>
            <div className="eyebrow" style={{marginBottom: '0.5rem'}}>Experience</div>
            <h2 className="section-title display">
              Where I've <em className="italic" style={{color: 'var(--gold)'}}>worked.</em>
            </h2>
          </div>
        </div>

        <div className="experience-card">
          <div className="exp-head">
            <div>
              <div className="exp-role">Data Science Intern</div>
              <div className="exp-company">Argano Software Pvt Ltd · Hyderabad</div>
            </div>
            <div className="exp-period">June 2025 — August 2025</div>
          </div>
          <ul className="exp-list">
            <li>Completed hands-on training in SQL databases, Python programming, and AI agent development.</li>
            <li>Developed Python-based solutions for data processing and automation workflows.</li>
            <li>Designed and implemented AI agents and explored real-world applications.</li>
            <li>Performed data querying, manipulation, and analysis using SQL.</li>
          </ul>
        </div>
      </section>

      <div className="divider"></div>

      {/* ============ SKILLS ============ */}
      <section className="section" id="skills">
        <div className="section-head">
          <div className="section-number italic">03</div>
          <div>
            <div className="eyebrow" style={{marginBottom: '0.5rem'}}>Toolkit</div>
            <h2 className="section-title display">
              Skills & <em className="italic" style={{color: 'var(--gold)'}}>stack.</em>
            </h2>
          </div>
        </div>

        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.title} className="skill-card">
              <h4>{group.title}</h4>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span key={item} className="skill-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider"></div>

      {/* ============ CONTACT ============ */}
      <section className="section" id="contact">
        <div className="section-head">
          <div className="section-number italic">04</div>
          <div>
            <div className="eyebrow" style={{marginBottom: '0.5rem'}}>Personal Details</div>
            <h2 className="section-title display">
              How to <em className="italic" style={{color: 'var(--gold)'}}>reach me.</em>
            </h2>
          </div>
        </div>

        <div className="contact-grid">
          <a href="tel:+918977938487" className="contact-item">
            <span className="contact-label">Phone</span>
            <span className="contact-value">+91 89779 38487</span>
          </a>
          <a href="mailto:sejalnadimatla123@gmail.com" className="contact-item">
            <span className="contact-label">Personal Email</span>
            <span className="contact-value">sejalnadimatla123@gmail.com</span>
          </a>
          <a href="mailto:se22ucse236@mahindrauniversity.edu.in" className="contact-item">
            <span className="contact-label">College Email</span>
            <span className="contact-value">se22ucse236@mahindrauniversity.edu.in</span>
          </a>
          <a href="https://github.com/sejalnadimatla123" target="_blank" rel="noopener noreferrer" className="contact-item">
            <span className="contact-label">GitHub</span>
            <span className="contact-value">github.com/sejalnadimatla123</span>
          </a>
          <div className="contact-item" style={{cursor: 'default'}}>
            <span className="contact-label">Location</span>
            <span className="contact-value">Hyderabad, India</span>
          </div>
          <div className="contact-item" style={{cursor: 'default'}}>
            <span className="contact-label">University</span>
            <span className="contact-value">Mahindra University · B.Tech CSE</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
