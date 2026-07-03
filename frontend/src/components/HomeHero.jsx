import { Link } from 'react-router-dom';

function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="home-hero-title">
      <div className="home-hero__content page-container">
        <p className="home-hero__eyebrow">Software Developer Portfolio</p>
        <h1 id="home-hero-title">donwilson-dev</h1>
        <p className="home-hero__introduction">
          Software developer focused on purposeful, maintainable applications, clean architecture,
          and polished user experiences.
        </p>
        <blockquote className="home-hero__mission">
          <p>&ldquo;Does it serve a purpose, and do I enjoy looking at it?&rdquo;</p>
        </blockquote>
        <Link className="home-hero__cta" to="/projects">
          Explore Projects
        </Link>
      </div>
    </section>
  );
}

export default HomeHero;
