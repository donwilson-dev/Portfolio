import ProjectTrack from "../components/ProjectTrack.jsx";
import "../styles/projects.css";

function Projects() {
  return (
    <div className="projects-page">
      <section className="projects-hero" aria-labelledby="projects-title">
        <div className="projects-hero__content page-container">
          <header className="projects-hero__summary">
            <h1 id="projects-title">Projects</h1>
          </header>

          <ProjectTrack />
        </div>
      </section>
    </div>
  );
}

export default Projects;
