import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import arrowLeftIcon from '../assets/icons/arrow-left.svg';
import githubIcon from '../assets/icons/github.svg';
import ImageViewer from './ImageViewer.jsx';

const projectOverviewTabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'features', label: 'Screenshots' },
  { id: 'release-notes', label: 'Release Notes' },
  { id: 'lessons-learned', label: 'Lessons Learned' },
];

function ProjectOverviewContent({ project }) {
  const [activeTab, setActiveTab] = useState(projectOverviewTabs[0].id);
  const [isMobileViewport, setIsMobileViewport] = useState(false);
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
  const releaseNotes = project.releaseNotes ?? null;
  const lessonsLearned = project.lessonsLearned ?? null;
  const glance = project.glance ?? {};
  const isReleased = (project.cardStatus ?? project.status)?.toLowerCase() === 'released';
  const showGithubLink = isReleased && Boolean(project.githubUrl);
  const visibleProjectOverviewTabs = isMobileViewport
    ? projectOverviewTabs.filter((tab) => tab.id !== 'features')
    : projectOverviewTabs;
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

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 48rem)');
    const updateViewportState = () => setIsMobileViewport(mobileQuery.matches);

    updateViewportState();
    mobileQuery.addEventListener('change', updateViewportState);

    return () => {
      mobileQuery.removeEventListener('change', updateViewportState);
    };
  }, []);

  useEffect(() => {
    if (isMobileViewport && activeTab === 'features') {
      setActiveTab(projectOverviewTabs[0].id);
    }
  }, [activeTab, isMobileViewport]);

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

          <div className="project-overview__section-nav">
            <div className="project-overview__tab-list" role="tablist" aria-label="Project overview sections">
              {visibleProjectOverviewTabs.map((tab) => (
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

            {project.launchUrl ? (
              <a
                className="project-overview__tab project-overview__tab--external"
                href={project.launchUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Launch App
              </a>
            ) : null}
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
                                  {index > 0 ? (
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
                        ) : row.key === 'version' && showGithubLink ? (
                          <span className="project-glance-list__version">
                            <span>{row.value}</span>
                            <a
                              className="project-glance-list__github"
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${project.title} GitHub repository`}
                            >
                              <img src={githubIcon} alt="" aria-hidden="true" />
                              <span>View Source</span>
                            </a>
                          </span>
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
              <section className="project-detail-card project-detail-card--scroll project-walkthrough-card" aria-labelledby="project-walkthrough-title">
                <h2 id="project-walkthrough-title">Walkthrough</h2>
                {activeScreenshot ? (
                  <div className="project-walkthrough-card__content">
                    <h3>{activeScreenshot.title}</h3>
                    {activeScreenshot.summaryTitle ? (
                      <p className="project-walkthrough-card__summary-title">
                        {activeScreenshot.summaryTitle}
                      </p>
                    ) : null}
                    <p>{activeScreenshot.description}</p>
                  </div>
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
              <section className="project-detail-card project-release-notes" aria-labelledby="project-release-notes-title">
                <div className="project-release-notes__header">
                  <div>
                    <p className="project-release-notes__eyebrow">{releaseNotes?.version ?? 'Release Notes'}</p>
                    <h2 id="project-release-notes-title">{releaseNotes?.title ?? 'Release Notes'}</h2>
                  </div>
                  {releaseNotes?.date ? (
                    <p className="project-release-notes__date">Release Date: {releaseNotes.date}</p>
                  ) : null}
                </div>

                {releaseNotes ? (
                  <>
                    {releaseNotes.overview?.map((paragraph) => (
                      <p className="project-release-notes__intro" key={paragraph}>
                        {paragraph}
                      </p>
                    ))}

                    <div className="project-release-notes__sections">
                      {releaseNotes.sections.map((section) => (
                        <article className="project-release-notes__section" key={section.title}>
                          <h3>{section.title}</h3>
                          {section.description?.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                          {section.items ? (
                            <ul>
                              {section.items.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          ) : null}
                          {section.groups ? (
                            <div className="project-release-notes__groups">
                              {section.groups.map((group) => (
                                <div className="project-release-notes__group" key={group.title}>
                                  <h4>{group.title}</h4>
                                  <ul>
                                    {group.items.map((item) => (
                                      <li key={item}>{item}</li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          ) : null}
                        </article>
                      ))}
                    </div>

                    {releaseNotes.license ? (
                      <aside className="project-release-notes__license">
                        <h3>{releaseNotes.license.title}</h3>
                        {releaseNotes.license.description.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </aside>
                    ) : null}
                  </>
                ) : (
                  <p>Pending</p>
                )}
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
              <section className="project-detail-card project-lessons" aria-labelledby="project-lessons-title">
                <div className="project-lessons__header">
                  <div>
                    <p className="project-lessons__eyebrow">{lessonsLearned?.version ?? 'Lessons Learned'}</p>
                    <h2 id="project-lessons-title">{lessonsLearned?.title ?? 'Lessons Learned'}</h2>
                  </div>
                  {lessonsLearned?.author ? (
                    <p className="project-lessons__author">Author: {lessonsLearned.author}</p>
                  ) : null}
                </div>

                {lessonsLearned ? (
                  <>
                    <div className="project-lessons__overview">
                      {lessonsLearned.overview?.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>

                    <div className="project-lessons__grid">
                      {lessonsLearned.lessons.map((lesson, index) => (
                        <article className="project-lessons__item" key={lesson.title}>
                          <p className="project-lessons__number">{String(index + 1).padStart(2, '0')}</p>
                          <h3>{lesson.title}</h3>
                          {lesson.description.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                          {lesson.items ? (
                            <ul>
                              {lesson.items.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          ) : null}
                        </article>
                      ))}
                    </div>

                    <div className="project-lessons__footer-grid">
                      {lessonsLearned.technicalGrowth ? (
                        <article className="project-lessons__support">
                          <h3>{lessonsLearned.technicalGrowth.title}</h3>
                          <ul>
                            {lessonsLearned.technicalGrowth.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </article>
                      ) : null}

                      {lessonsLearned.reflection ? (
                        <article className="project-lessons__support project-lessons__support--reflection">
                          <h3>{lessonsLearned.reflection.title}</h3>
                          {lessonsLearned.reflection.description.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </article>
                      ) : null}
                    </div>
                  </>
                ) : (
                  <p>Pending</p>
                )}
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
