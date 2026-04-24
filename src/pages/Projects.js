import React from 'react';

const BASE_FIRST = 'https://github.com/sejalnadimatla123-gif/first_projects/blob/main';
const BASE_MOVIEMATE = 'https://github.com/sejalnadimatla123-gif/MovieMate-Chatbot';

const projects = [
  {
    num: '01',
    year: '2025',
    title: 'AI ',
    titleItalic: 'Summarizer',
    desc: 'An intelligent text summarization tool that condenses long documents and articles into concise, meaningful summaries using AI. Built with Python and Streamlit for a seamless interactive experience.',
    stack: ['Python', 'Streamlit', 'NLP', 'AI/LLM'],
    link: `${BASE_FIRST}/ai_summarizer`,
    repo: 'first_projects / ai_summarizer'
  },
  {
    num: '02',
    year: '2025',
    title: 'Regression ',
    titleItalic: 'Project',
    desc: 'A machine learning regression project implementing and comparing multiple regression models. Includes data preprocessing, feature engineering, model training, evaluation, and performance visualization.',
    stack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
    link: `${BASE_FIRST}/reg_project`,
    repo: 'first_projects / reg_project'
  },
  {
    num: '03',
    year: '2025',
    title: 'Streamlit ',
    titleItalic: 'App',
    desc: 'An interactive data application built with Streamlit, providing real-time visualization and analysis capabilities through a clean, browser-based UI without any frontend boilerplate.',
    stack: ['Python', 'Streamlit', 'Pandas', 'Data Visualization'],
    link: `${BASE_FIRST}/streamlit_app.py`,
    repo: 'first_projects / streamlit_app.py'
  },
  {
    num: '04',
    year: '2025',
    title: 'MovieMate —',
    titleItalic: 'NLP Chatbot',
    desc: 'A semantic movie recommendation chatbot powered by a RAG pipeline. Combines FAISS vector search with Sentence Transformers and the Gemini API for conversational, context-aware recommendations served through a real-time Streamlit interface.',
    stack: ['Python', 'FAISS', 'Sentence Transformers', 'Gemini API', 'Streamlit', 'LangChain'],
    link: BASE_MOVIEMATE,
    repo: 'MovieMate-Chatbot'
  }
];

function Projects() {
  return (
    <div className="page">
      <section className="projects-header">
        <div className="eyebrow" style={{marginBottom: '1.5rem'}}>Selected Work · 2025—2026</div>
        <h1 className="projects-title display">
          Things I've<br />
          <span className="italic">built.</span>
        </h1>
        <p className="projects-intro">
          A collection of projects spanning machine learning, natural language processing,
          and full-stack applications. Each one taught me something I did not know before.
        </p>
      </section>

      <section className="project-list">
        {projects.map((project) => (
          <a
            key={project.num}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-row"
          >
            <div className="project-num">{project.num}</div>
            <div className="project-main">
              <h2 className="project-title">
                {project.title}<em>{project.titleItalic}</em>
              </h2>
              <p className="project-desc">{project.desc}</p>
              <div className="project-stack">
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div style={{
                marginTop: '1rem',
                fontFamily: 'var(--mono)',
                fontSize: '0.7rem',
                color: 'var(--muted)',
                letterSpacing: '0.08em'
              }}>
                &#x2387; {project.repo}
              </div>
            </div>
            <div className="project-year">{project.year}</div>
            <div className="project-view">
              View on<br />GitHub &#x2197;
            </div>
          </a>
        ))}
      </section>
    </div>
  );
}

export default Projects;
