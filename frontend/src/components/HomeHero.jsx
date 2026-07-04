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
          <svg
            className="home-hero__cta-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}

export default HomeHero;
