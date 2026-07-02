import ProjectTrack from '../components/ProjectTrack.jsx';
import '../styles/projects.css';

function Projects() {
  return (
    <div className="projects-page">
      <section className="projects-hero page-container" aria-labelledby="projects-title">
        <p className="projects-page__eyebrow">Projects</p>
        <h1 id="projects-title">Applications and case studies</h1>
        <p>
          A focused library of software work with overviews, visual showcases, workflow notes, and source
          repository references where available.
        </p>
      </section>

      <ProjectTrack />
    </div>
  );
}

export default Projects;
