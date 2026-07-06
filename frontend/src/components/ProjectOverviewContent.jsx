import { useState } from 'react';
import { Link } from 'react-router-dom';
import arrowLeftIcon from '../assets/icons/arrow-left.svg';
import ImageViewer from './ImageViewer.jsx';

const projectOverviewTabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'features', label: 'Screenshots' },
  { id: 'summary', label: 'Summary' },
];

function ProjectOverviewContent({ project }) {
  const [activeTab, setActiveTab] = useState(projectOverviewTabs[0].id);
  const [activeScreenshotIndex, setActiveScreenshotIndex] = useState(0);
  const [expandedScreenshotIndex, setExpandedScreenshotIndex] = useState(null);
  const statusClassName = [
    'project-card__status',
    project.cardStatusTone ? `project-card__status--${project.cardStatusTone}` : null,
  ]
    .filter(Boolean)
    .join(' ');
  const keyHighlights = project.showcase?.features ?? [];
  const screenshots = project.screenshots ?? [];
  const activeScreenshot = screenshots[activeScreenshotIndex] ?? null;
  const expandedScreenshot =
    expandedScreenshotIndex === null ? null : screenshots[expandedScreenshotIndex];
  const aboutCopy = project.showcase?.overview ?? project.summary;

  const viewAdjacentScreenshot = (direction) => {
    setExpandedScreenshotIndex((currentIndex) => {
      if (currentIndex === null || screenshots.length === 0) {
        return currentIndex;
      }

      return (currentIndex + direction + screenshots.length) % screenshots.length;
    });
  };

  return (
    <article className="project-overview" aria-labelledby="project-overview-title">
      <h1 className="sr-only" id="project-overview-title">
        {project.title}
      </h1>

      <header className="project-overview__header">
        <div className="project-overview__header-nav">
          <Link
            className="project-action project-action--secondary"
            to="/projects"
            state={{ restoreProjectId: project.slug, restoreTrackScroll: true }}
          >
            <img src={arrowLeftIcon} alt="" aria-hidden="true" />
            Back to Projects
          </Link>

          <div className="project-overview__tab-list" role="tablist" aria-label="Project overview sections">
            {projectOverviewTabs.map((tab) => (
              <button
                className="project-overview__tab"
                type="button"
                role="tab"
                key={tab.id}
                id={`project-tab-${tab.id}`}
                aria-selected={activeTab === tab.id}
                aria-controls={`project-panel-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="project-overview__masthead">
          {project.artwork.cardTitleImage ? (
            <img src={project.artwork.cardTitleImage} alt={project.title} />
          ) : (
            <h1 id="project-overview-title">{project.title}</h1>
          )}
        </div>
      </header>

      <div className="project-overview__workspace" aria-label={`${project.title} project sections`}>
        <div className="project-overview__tab-window">
          <section
            className="project-overview__tab-panel"
            id="project-panel-overview"
            role="tabpanel"
            aria-labelledby="project-tab-overview"
            hidden={activeTab !== 'overview'}
          >
            <div className="project-overview__dashboard project-overview__dashboard--overview">
              <section className="project-overview__brand-preview" aria-label={`${project.title} overview`}>
                <img src={project.artwork.showcase} alt="" />
              </section>
            </div>
          </section>

          <section
            className="project-overview__tab-panel"
            id="project-panel-features"
            role="tabpanel"
            aria-labelledby="project-tab-features"
            hidden={activeTab !== 'features'}
          >
            <div className="project-overview__dashboard project-overview__dashboard--features">
              <section className="project-detail-card project-detail-card--scroll" aria-labelledby="project-walkthrough-title">
                <h2 id="project-walkthrough-title">Walkthrough</h2>
                {activeScreenshot ? (
                  <>
                    <h3>{activeScreenshot.title}</h3>
                    <p>{activeScreenshot.description}</p>
                  </>
                ) : (
                  <p>{project.screenshotPlaceholder}</p>
                )}
              </section>

              <section className="project-feature-stage" aria-label={`${project.title} screenshot walkthrough`}>
                {activeScreenshot ? (
                  <button
                    className="project-feature-stage__image"
                    type="button"
                    onClick={() => setExpandedScreenshotIndex(activeScreenshotIndex)}
                    aria-label={`Open full-size screenshot of ${project.title}: ${activeScreenshot.title}`}
                  >
                    <img
                      src={activeScreenshot.image}
                      alt={`Screenshot of ${project.title}: ${activeScreenshot.title}`}
                    />
                  </button>
                ) : (
                  <div className="project-feature-stage__image project-feature-stage__image--placeholder">
                    <img src={project.artwork.showcase} alt="" />
                  </div>
                )}

                {screenshots.length > 0 ? (
                  <div className="project-feature-thumbnails" aria-label="Select screenshot">
                    {screenshots.map((screenshot, index) => (
                      <button
                        className="project-feature-thumbnail"
                        type="button"
                        key={screenshot.title}
                        aria-current={activeScreenshotIndex === index ? 'true' : undefined}
                        onClick={() => setActiveScreenshotIndex(index)}
                      >
                        <img src={screenshot.image} alt="" />
                        <span>{screenshot.title}</span>
                      </button>
                    ))}
                  </div>
                ) : null}
              </section>

            </div>
          </section>

          <section
            className="project-overview__tab-panel"
            id="project-panel-summary"
            role="tabpanel"
            aria-labelledby="project-tab-summary"
          hidden={activeTab !== 'summary'}
        >
          <div className="project-overview__dashboard project-overview__dashboard--summary">
              <section className="project-detail-card project-detail-card--scroll" aria-labelledby="project-summary-about-title">
                <h2 id="project-summary-about-title">About</h2>
                <p>{aboutCopy}</p>
                <h3>Key Highlights</h3>
                <ul className="project-highlight-list">
                  {keyHighlights.map((highlight) => (
                    <li key={highlight.title}>
                      <span>{highlight.title}</span>
                      {highlight.description}
                    </li>
                  ))}
                </ul>
              </section>

              <aside className="project-detail-card project-detail-card--glance" aria-labelledby="project-summary-glance-title">
                <h2 id="project-summary-glance-title">At a Glance</h2>
                <dl className="project-glance-list">
                  <div>
                    <dt>Status</dt>
                    <dd>
                      <span className={statusClassName}>{project.cardStatus ?? project.status}</span>
                    </dd>
                  </div>
                  <div>
                    <dt>Project</dt>
                    <dd>{project.title}</dd>
                  </div>
                  <div>
                    <dt>Stack</dt>
                    <dd>{project.technologyStack.join(', ')}</dd>
                  </div>
                  <div>
                    <dt>Release</dt>
                    <dd>{project.cardStatus ?? project.status}</dd>
                  </div>
                </dl>
              </aside>

              <section className="project-detail-card project-detail-card--pending" aria-labelledby="project-lessons-title">
                <h2 id="project-lessons-title">Lessons Learned</h2>
                <p>Pending</p>
              </section>

              <section className="project-detail-card project-detail-card--pending" aria-labelledby="project-release-notes-title">
                <h2 id="project-release-notes-title">Release Notes</h2>
                <p>Pending</p>
              </section>
            </div>
          </section>
        </div>
      </div>

      <ImageViewer
        title={expandedScreenshot ? `${project.title}: ${expandedScreenshot.title}` : ''}
        image={expandedScreenshot?.image}
        imageAlt={
          expandedScreenshot
            ? `Full-size screenshot of ${project.title}: ${expandedScreenshot.title}`
            : ''
        }
        onClose={() => setExpandedScreenshotIndex(null)}
        onPrevious={() => viewAdjacentScreenshot(-1)}
        onNext={() => viewAdjacentScreenshot(1)}
        previousLabel="View previous screenshot"
        nextLabel="View next screenshot"
        initialFocus="dialog"
        variant="screenshot"
      />
    </article>
  );
}

export default ProjectOverviewContent;
