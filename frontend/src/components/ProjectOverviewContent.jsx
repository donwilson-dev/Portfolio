import { useState } from 'react';
import { Link } from 'react-router-dom';
import arrowLeftIcon from '../assets/icons/arrow-left.svg';
import ImageViewer from './ImageViewer.jsx';

const projectOverviewTabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'features', label: 'Screenshots' },
  { id: 'release-notes', label: 'Release Notes' },
  { id: 'lessons-learned', label: 'Lessons Learned' },
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
  const screenshots = project.screenshots ?? [];
  const activeScreenshot = screenshots[activeScreenshotIndex] ?? null;
  const expandedScreenshot =
    expandedScreenshotIndex === null ? null : screenshots[expandedScreenshotIndex];
  const glance = project.glance ?? {};
  const glanceRows = [
    {
      key: 'status',
      label: 'Status',
      value: project.cardStatus ?? project.status,
      tone: project.cardStatusTone ?? 'default',
    },
    {
      key: 'type',
      label: 'Type',
      value: glance.type ?? project.title,
    },
    {
      key: 'architecture',
      label: 'Architecture',
      value: glance.architecture ?? project.technologyStack,
    },
    {
      key: 'highlights',
      label: 'Highlights',
      value: glance.highlights ?? [],
    },
    {
      key: 'version',
      label: 'Version',
      value: glance.version ?? 'Pending',
    },
  ];

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

              <aside className="project-detail-card project-detail-card--glance" aria-labelledby="project-overview-glance-title">
                <h2 id="project-overview-glance-title">At a Glance</h2>
                <dl className="project-glance-list">
                  {glanceRows.map((row) => (
                    <div
                      className={`project-glance-list__row project-glance-list__row--${row.key}${
                        row.tone ? ` project-glance-list__row--${row.tone}` : ''
                      }`}
                      key={row.key}
                    >
                      <dt>{row.label}</dt>
                      <dd>
                        {row.key === 'status' ? (
                          <span className={statusClassName}>{row.value}</span>
                        ) : Array.isArray(row.value) ? (
                          row.key === 'highlights' ? (
                            <ul className="project-glance-list__bullets">
                              {row.value.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          ) : row.key === 'architecture' ? (
                            <span className="project-glance-list__architecture">
                              {row.value.map((item, index) => (
                                <span className="project-glance-list__architecture-item" key={item}>
                                  {index > 0 && index < 3 ? (
                                    <span className="project-glance-list__architecture-dot" aria-hidden="true" />
                                  ) : null}
                                  {item}
                                </span>
                              ))}
                            </span>
                          ) : (
                            <span className="project-glance-list__inline">
                              {row.value.map((item) => (
                                <span key={item}>{item}</span>
                              ))}
                            </span>
                          )
                        ) : (
                          row.value
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </aside>
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
              </section>

              {screenshots.length > 0 ? (
                <div className="project-detail-card project-feature-thumbnails" aria-label="Select screenshot">
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

            </div>
          </section>

          <section
            className="project-overview__tab-panel"
            id="project-panel-release-notes"
            role="tabpanel"
            aria-labelledby="project-tab-release-notes"
            hidden={activeTab !== 'release-notes'}
          >
            <div className="project-overview__dashboard project-overview__dashboard--single">
              <section className="project-detail-card project-detail-card--pending" aria-labelledby="project-release-notes-title">
                <h2 id="project-release-notes-title">Release Notes</h2>
                <p>Pending</p>
              </section>
            </div>
          </section>

          <section
            className="project-overview__tab-panel"
            id="project-panel-lessons-learned"
            role="tabpanel"
            aria-labelledby="project-tab-lessons-learned"
            hidden={activeTab !== 'lessons-learned'}
          >
            <div className="project-overview__dashboard project-overview__dashboard--single">
              <section className="project-detail-card project-detail-card--pending" aria-labelledby="project-lessons-title">
                <h2 id="project-lessons-title">Lessons Learned</h2>
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
