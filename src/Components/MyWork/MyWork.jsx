import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const projects = [
  {
    title: "Restaurant Management Website",
    desc: "A responsive restaurant website with menu display, table booking UI, and smooth animations.",
    tech: "HTML • CSS • JavaScript",
    role: "Frontend Development",
    demo: "https://your-restaurant-demo-link.com",
    github: "https://github.com/your-restaurant-repo",
  },
  {
    title: "Personal Portfolio",
    desc: "A modern single-page portfolio built with React, reusable components, and theme support.",
    tech: "React • CSS",
    role: "Frontend Development",
    demo: "https://your-portfolio-link.com",
    github: "https://github.com/your-portfolio-repo",
  },
  {
    title: "MERN Blog Application",
    desc: "Full-stack blog app with authentication, CRUD blog posts, and protected routes.",
    tech: "MongoDB • Express • React • Node",
    role: "Full Stack Development",
    demo: "https://your-blog-demo-link.com",
    github: "https://github.com/your-blog-repo",
  },
];

const MyWork = () => {
  return (
    <section className="mywork" id="project">
      <div className="mywork-header">
        <div className="mywork-title">
          <h1>My Work</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <p className="mywork-subtitle">
          A selection of projects that showcase my skills in frontend development
          and the MERN stack.
        </p>
      </div>

      <div className="mywork-grid">
        {projects.map((project, index) => (
          <article className="mywork-card" key={index}>
            <div className="mywork-card-header">
              <span className="mywork-pill">{project.role}</span>
            </div>

            <h2>{project.title}</h2>
            <p className="mywork-desc">{project.desc}</p>

            <p className="mywork-tech">
              <strong>Tech stack: </strong>
              {project.tech}
            </p>

            <div className="mywork-actions">
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="btn primary"
              >
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn outline"
              >
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MyWork;

