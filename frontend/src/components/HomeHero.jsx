import { Link } from "react-router-dom";

function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="home-hero-title">
      <div className="home-hero__content page-container">
        <p className="home-hero__eyebrow">Don Wilson • donwilson-dev</p>
        <h1 id="home-hero-title">Purpose-Built Software</h1>
        <p className="home-hero__introduction">
          Software should solve a problem—not create one. It should be visually
          refined, intuitive to use, and efficient from the first launch.
        </p>
        <Link className="home-hero__cta" to="/projects">
          View My Projects
        </Link>
      </div>
    </section>
  );
}

export default HomeHero;
