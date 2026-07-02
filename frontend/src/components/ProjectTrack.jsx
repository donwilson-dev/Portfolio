import { useEffect, useRef, useState } from 'react';
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

const getScrollBehavior = () => {
  if (typeof window === 'undefined' || !window.matchMedia) {
    return 'auto';
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return 'auto';
  }

  return 'smooth';
};

function ProjectTrack() {
  const location = useLocation();
  const trackRef = useRef(null);
  const dragStateRef = useRef({
    isDragging: false,
    pointerStart: 0,
    scrollStart: 0,
    didDrag: false,
  });
  const [selectedProject, setSelectedProject] = useState(() => {
    return location.state?.restoreProjectId || sessionStorage.getItem(PROJECT_TRACK_SELECTED_KEY) || null;
  });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const savedScrollLeft = Number(sessionStorage.getItem(PROJECT_TRACK_SCROLL_KEY) || 0);
    track.scrollLeft = savedScrollLeft;

    const projectToRestore = location.state?.restoreProjectId;
    if (projectToRestore) {
      const card = track.querySelector(`[data-project-slug="${projectToRestore}"]`);
      card?.scrollIntoView({ behavior: 'auto', inline: 'center', block: 'nearest' });
      setSelectedProject(projectToRestore);
      sessionStorage.setItem(PROJECT_TRACK_SELECTED_KEY, projectToRestore);
    }
  }, [location.state]);

  const storeScrollPosition = () => {
    if (trackRef.current) {
      sessionStorage.setItem(PROJECT_TRACK_SCROLL_KEY, String(trackRef.current.scrollLeft));
    }
  };

  const selectProject = (projectSlug) => {
    setSelectedProject(projectSlug);
    sessionStorage.setItem(PROJECT_TRACK_SELECTED_KEY, projectSlug);
    storeScrollPosition();
  };

  const scrollTrack = (direction) => {
    trackRef.current?.scrollBy({ left: direction * scrollAmount, behavior: getScrollBehavior() });
    requestAnimationFrame(storeScrollPosition);
  };

  const viewAllProjects = () => {
    setSelectedProject(null);
    sessionStorage.removeItem(PROJECT_TRACK_SELECTED_KEY);
    if (trackRef.current) {
      trackRef.current.scrollLeft = 0;
      storeScrollPosition();
      trackRef.current.focus({ preventScroll: true });
    }
  };

  const beginDrag = (event) => {
    if (!trackRef.current || event.button > 0) {
      return;
    }

    trackRef.current.setPointerCapture?.(event.pointerId);

    dragStateRef.current = {
      isDragging: true,
      pointerStart: event.clientX,
      scrollStart: trackRef.current.scrollLeft,
      didDrag: false,
    };
  };

  const continueDrag = (event) => {
    const dragState = dragStateRef.current;
    if (!dragState.isDragging || !trackRef.current) {
      return;
    }

    const distance = event.clientX - dragState.pointerStart;
    if (Math.abs(distance) > 4) {
      dragState.didDrag = true;
    }

    trackRef.current.scrollLeft = dragState.scrollStart - distance;
    storeScrollPosition();
  };

  const endDrag = (event) => {
    trackRef.current?.releasePointerCapture?.(event.pointerId);
    dragStateRef.current.isDragging = false;
  };

  const preventClickAfterDrag = (event) => {
    if (dragStateRef.current.didDrag) {
      event.preventDefault();
      event.stopPropagation();
      dragStateRef.current.didDrag = false;
    }
  };

  return (
    <section className="project-library" aria-labelledby="project-library-title">
      <div className="project-library__header">
        <div>
          <p className="projects-page__eyebrow">Software Library</p>
          <h2 id="project-library-title">Projects</h2>
        </div>
        <div className="project-library__controls" aria-label="Project track controls">
          {projectLibrarySettings.showViewAllControl ? (
            <button type="button" onClick={viewAllProjects}>
              View All
            </button>
          ) : null}
          <button
            className="project-library__icon-button"
            type="button"
            onClick={() => scrollTrack(-1)}
            aria-label="Scroll projects left"
            title="Scroll left"
          >
            <img src={arrowLeftIcon} alt="" aria-hidden="true" />
          </button>
          <button
            className="project-library__icon-button"
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
        onScroll={storeScrollPosition}
        onPointerDown={beginDrag}
        onPointerMove={continueDrag}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
        onClickCapture={preventClickAfterDrag}
        aria-label="Scrollable project cards"
      >
        {orderedProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            isSelected={project.slug === selectedProject}
            onSelect={() => selectProject(project.slug)}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectTrack;
