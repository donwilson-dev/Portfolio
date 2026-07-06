import { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import arrowLeftIcon from '../assets/icons/arrow-left.svg';
import arrowRightIcon from '../assets/icons/arrow-right.svg';
import ProjectCard from './ProjectCard.jsx';
import {
  PROJECT_TRACK_SCROLL_KEY,
  PROJECT_TRACK_SELECTED_KEY,
  orderedProjects,
  projectLibrarySettings,
} from '../data/projects.js';

const scrollAmount = 360;
const dragThreshold = 8;
const trackLoopCount = 3;
const activeTrackSet = 1;

const getScrollBehavior = () => {
  if (typeof window === 'undefined' || !window.matchMedia) {
    return 'auto';
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return 'auto';
  }

  return 'smooth';
};

const getStoredScrollLeft = () => {
  const storedScrollLeft = Number(sessionStorage.getItem(PROJECT_TRACK_SCROLL_KEY));

  return Number.isFinite(storedScrollLeft) ? storedScrollLeft : null;
};

function ProjectTrack() {
  const location = useLocation();
  const trackRef = useRef(null);
  const dragStateRef = useRef({
    isDragging: false,
    pointerId: null,
    pointerStart: 0,
    scrollStart: 0,
    didDrag: false,
  });
  const [selectedProject, setSelectedProject] = useState(() => {
    return location.state?.restoreProjectId || sessionStorage.getItem(PROJECT_TRACK_SELECTED_KEY) || null;
  });
  const trackProjects = useMemo(
    () =>
      Array.from({ length: trackLoopCount }, (_, setIndex) =>
        orderedProjects.map((project, projectIndex) => ({
          ...project,
          trackKey: `${project.slug}-${setIndex}`,
          trackSet: setIndex,
          trackIndex: projectIndex,
        })),
      ).flat(),
    [],
  );

  const getSequenceWidth = () => {
    const track = trackRef.current;
    if (!track) {
      return 0;
    }

    const firstSetCard = track.querySelector('[data-track-set="0"][data-track-index="0"]');
    const activeSetCard = track.querySelector(
      `[data-track-set="${activeTrackSet}"][data-track-index="0"]`,
    );

    if (!firstSetCard || !activeSetCard) {
      return 0;
    }

    return activeSetCard.offsetLeft - firstSetCard.offsetLeft;
  };

  const jumpToScrollLeft = (scrollLeft) => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const previousScrollBehavior = track.style.scrollBehavior;
    track.style.scrollBehavior = 'auto';
    track.scrollLeft = scrollLeft;
    track.style.scrollBehavior = previousScrollBehavior;
  };

  const normalizeTrackPosition = () => {
    const track = trackRef.current;
    const sequenceWidth = getSequenceWidth();

    if (!track || sequenceWidth <= 0) {
      return;
    }

    const lowerBoundary = sequenceWidth * 0.5;
    const upperBoundary = sequenceWidth * 1.5;

    if (track.scrollLeft < lowerBoundary) {
      jumpToScrollLeft(track.scrollLeft + sequenceWidth);
    } else if (track.scrollLeft > upperBoundary) {
      jumpToScrollLeft(track.scrollLeft - sequenceWidth);
    }
  };

  const scrollToActiveSetStart = () => {
    const track = trackRef.current;
    const activeSetCard = track?.querySelector(
      `[data-track-set="${activeTrackSet}"][data-track-index="0"]`,
    );

    if (!track || !activeSetCard) {
      return;
    }

    jumpToScrollLeft(activeSetCard.offsetLeft);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const positionTrack = () => {
      const projectToRestore = location.state?.restoreProjectId;
      const shouldRestoreScroll = Boolean(location.state?.restoreTrackScroll);
      const restoredScrollLeft = shouldRestoreScroll ? getStoredScrollLeft() : null;

      if (projectToRestore && restoredScrollLeft !== null) {
        jumpToScrollLeft(restoredScrollLeft);
        normalizeTrackPosition();
        setSelectedProject(projectToRestore);
        sessionStorage.setItem(PROJECT_TRACK_SELECTED_KEY, projectToRestore);
      } else if (projectToRestore) {
        setSelectedProject(projectToRestore);
        sessionStorage.setItem(PROJECT_TRACK_SELECTED_KEY, projectToRestore);
      } else {
        scrollToActiveSetStart();
      }
    };

    positionTrack();
    const frameId = window.requestAnimationFrame(positionTrack);
    const timerId = window.setTimeout(positionTrack, 120);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(timerId);
    };
  }, [location.state]);

  const handleTrackScroll = () => {
    normalizeTrackPosition();
  };

  const selectProject = (projectSlug) => {
    setSelectedProject(projectSlug);
    sessionStorage.setItem(PROJECT_TRACK_SELECTED_KEY, projectSlug);
    if (trackRef.current) {
      sessionStorage.setItem(PROJECT_TRACK_SCROLL_KEY, String(trackRef.current.scrollLeft));
    }
  };

  const scrollTrack = (direction) => {
    trackRef.current?.scrollBy({ left: direction * scrollAmount, behavior: getScrollBehavior() });
    window.setTimeout(normalizeTrackPosition, 420);
  };

  const viewAllProjects = () => {
    setSelectedProject(null);
    sessionStorage.removeItem(PROJECT_TRACK_SCROLL_KEY);
    sessionStorage.removeItem(PROJECT_TRACK_SELECTED_KEY);
    if (trackRef.current) {
      scrollToActiveSetStart();
      trackRef.current.focus({ preventScroll: true });
    }
  };

  const beginDrag = (event) => {
    if (!trackRef.current || event.button > 0) {
      return;
    }

    dragStateRef.current = {
      isDragging: true,
      pointerId: event.pointerId,
      pointerStart: event.clientX,
      scrollStart: trackRef.current.scrollLeft,
      didDrag: false,
    };
  };

  const continueDrag = (event) => {
    const dragState = dragStateRef.current;
    if (!dragState.isDragging || dragState.pointerId !== event.pointerId || !trackRef.current) {
      return;
    }

    const distance = event.clientX - dragState.pointerStart;
    if (Math.abs(distance) > dragThreshold) {
      if (!dragState.didDrag) {
        trackRef.current.setPointerCapture?.(event.pointerId);
      }
      dragState.didDrag = true;
    }

    if (!dragState.didDrag) {
      return;
    }

    event.preventDefault();
    trackRef.current.scrollLeft = dragState.scrollStart - distance;
    normalizeTrackPosition();
  };

  const endDrag = (event) => {
    if (dragStateRef.current.pointerId !== event.pointerId) {
      return;
    }

    if (dragStateRef.current.didDrag) {
      trackRef.current?.releasePointerCapture?.(event.pointerId);
    }
    dragStateRef.current.isDragging = false;
    dragStateRef.current.pointerId = null;
  };

  const preventClickAfterDrag = (event) => {
    if (dragStateRef.current.didDrag) {
      event.preventDefault();
      event.stopPropagation();
      dragStateRef.current.didDrag = false;
    }
  };

  return (
    <section className="project-library" aria-label="Projects">
      <div className="project-library__header">
        <div className="project-library__controls" aria-label="Project track controls">
          {projectLibrarySettings.showViewAllControl ? (
            <button type="button" onClick={viewAllProjects}>
              View All
            </button>
          ) : null}
          <button
            className="project-library__icon-button project-library__icon-button--previous"
            type="button"
            onClick={() => scrollTrack(-1)}
            aria-label="Scroll projects left"
            title="Scroll left"
          >
            <img src={arrowLeftIcon} alt="" aria-hidden="true" />
          </button>
          <button
            className="project-library__icon-button project-library__icon-button--next"
            type="button"
            onClick={() => scrollTrack(1)}
            aria-label="Scroll projects right"
            title="Scroll right"
          >
            <img src={arrowRightIcon} alt="" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        className="project-track"
        ref={trackRef}
        tabIndex={0}
        onScroll={handleTrackScroll}
        onPointerDown={beginDrag}
        onPointerMove={continueDrag}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
        onClickCapture={preventClickAfterDrag}
        aria-label="Scrollable project cards"
      >
        {trackProjects.map((project) => (
          <ProjectCard
            key={project.trackKey}
            project={project}
            isSelected={project.slug === selectedProject}
            onSelect={() => selectProject(project.slug)}
            trackSet={project.trackSet}
            trackIndex={project.trackIndex}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectTrack;
