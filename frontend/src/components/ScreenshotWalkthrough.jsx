import { useRef, useState } from 'react';
import warningIcon from '../assets/icons/warning.svg';
import ImageViewer from './ImageViewer.jsx';

function ScreenshotWalkthrough({ project }) {
  const [selectedScreenshotIndex, setSelectedScreenshotIndex] = useState(null);
  const lastFocusedElementRef = useRef(null);
  const lastScrollPositionRef = useRef({ left: 0, top: 0 });

  if (project.screenshots.length === 0) {
    return (
      <div className="showcase-placeholder" role="note" aria-label={`${project.title} screenshot status`}>
        <img src={project.artwork.showcase} alt="" loading="lazy" />
        <p>
          <span className="showcase-placeholder__status">
            <img src={warningIcon} alt="" aria-hidden="true" />
            Screenshot Pending
          </span>
          {project.screenshotPlaceholder}
        </p>
      </div>
    );
  }

  const selectedScreenshot =
    selectedScreenshotIndex === null ? null : project.screenshots[selectedScreenshotIndex];

  const openScreenshot = (index, event) => {
    lastFocusedElementRef.current = event.currentTarget;
    lastScrollPositionRef.current = {
      left: window.scrollX,
      top: window.scrollY,
    };
    setSelectedScreenshotIndex(index);
  };

  const closeScreenshot = () => {
    setSelectedScreenshotIndex(null);
    requestAnimationFrame(() => {
      window.scrollTo(lastScrollPositionRef.current.left, lastScrollPositionRef.current.top);
      lastFocusedElementRef.current?.focus({ preventScroll: true });
    });
  };

  const viewAdjacentScreenshot = (direction) => {
    setSelectedScreenshotIndex((currentIndex) => {
      if (currentIndex === null) {
        return currentIndex;
      }

      return (currentIndex + direction + project.screenshots.length) % project.screenshots.length;
    });
  };

  return (
    <>
      <div className="screenshot-grid" aria-label={`${project.title} screenshot walkthrough`}>
        {project.screenshots.map((screenshot, index) => (
          <button
            className="screenshot-card"
            type="button"
            key={screenshot.title}
            onClick={(event) => openScreenshot(index, event)}
            aria-label={`Open full-size screenshot of ${project.title}: ${screenshot.title}`}
          >
            <span className="screenshot-card__media">
              <img
                src={screenshot.image}
                alt={`Screenshot of ${project.title}: ${screenshot.title}`}
                loading="lazy"
              />
            </span>
            <span className="screenshot-card__content">
              <span className="screenshot-card__title">{screenshot.title}</span>
              {screenshot.description}
            </span>
          </button>
        ))}
      </div>

      <ImageViewer
        title={selectedScreenshot ? `${project.title}: ${selectedScreenshot.title}` : ''}
        image={selectedScreenshot?.image}
        imageAlt={
          selectedScreenshot
            ? `Full-size screenshot of ${project.title}: ${selectedScreenshot.title}`
            : ''
        }
        onClose={closeScreenshot}
        onPrevious={() => viewAdjacentScreenshot(-1)}
        onNext={() => viewAdjacentScreenshot(1)}
        previousLabel="View previous screenshot"
        nextLabel="View next screenshot"
        initialFocus="dialog"
        variant="screenshot"
      />
    </>
  );
}

export default ScreenshotWalkthrough;
