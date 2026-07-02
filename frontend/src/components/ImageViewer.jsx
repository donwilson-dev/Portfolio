import { useEffect, useId, useRef } from 'react';
import { createPortal } from 'react-dom';
import arrowLeftIcon from '../assets/icons/arrow-left.svg';
import arrowRightIcon from '../assets/icons/arrow-right.svg';
import closeIcon from '../assets/icons/close.svg';

const focusableSelector = [
  'button:not([disabled])',
  '[href]',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

const getFocusableElements = (element) => {
  if (!element) {
    return [];
  }

  return Array.from(element.querySelectorAll(focusableSelector)).filter((node) => {
    return !node.hasAttribute('disabled') && node.getAttribute('aria-hidden') !== 'true';
  });
};

function ImageViewer({
  title,
  image,
  imageAlt,
  onClose,
  onPrevious,
  onNext,
  previousLabel = 'View previous image',
  nextLabel = 'View next image',
  initialFocus = 'close',
  variant = 'default',
}) {
  const closeButtonRef = useRef(null);
  const dialogRef = useRef(null);
  const titleId = useId();
  const hasNavigation = Boolean(onPrevious && onNext);

  useEffect(() => {
    if (!image) {
      return undefined;
    }

    const scrollPosition = {
      left: window.scrollX,
      top: window.scrollY,
    };
    const initialFocusElement = initialFocus === 'dialog' ? dialogRef.current : closeButtonRef.current;

    initialFocusElement?.focus({ preventScroll: true });
    window.scrollTo(scrollPosition.left, scrollPosition.top);

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      }

      if (event.key === 'ArrowLeft' && onPrevious) {
        event.preventDefault();
        onPrevious();
      }

      if (event.key === 'ArrowRight' && onNext) {
        event.preventDefault();
        onNext();
      }

      if (event.key === 'Tab') {
        const focusableElements = getFocusableElements(dialogRef.current);
        const activeElementIndex = focusableElements.indexOf(document.activeElement);

        if (focusableElements.length === 0) {
          event.preventDefault();
          return;
        }

        const nextElementIndex = event.shiftKey
          ? (activeElementIndex <= 0 ? focusableElements.length - 1 : activeElementIndex - 1)
          : (activeElementIndex === focusableElements.length - 1 ? 0 : activeElementIndex + 1);

        event.preventDefault();
        focusableElements[nextElementIndex].focus({ preventScroll: true });
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [image, initialFocus, onClose, onNext, onPrevious]);

  if (!image) {
    return null;
  }

  const viewer = (
    <div
      className={`image-viewer image-viewer--${variant}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="image-viewer__dialog" ref={dialogRef} tabIndex={-1}>
        <div className="image-viewer__header">
          <h2 className="image-viewer__title" id={titleId}>
            {title}
          </h2>
          <button
            className="image-viewer__control image-viewer__close"
            type="button"
            onClick={onClose}
            ref={closeButtonRef}
            aria-label="Close image viewer"
          >
            <img src={closeIcon} alt="" aria-hidden="true" />
          </button>
        </div>

        <div
          className={
            hasNavigation
              ? 'image-viewer__body image-viewer__body--with-navigation'
              : 'image-viewer__body'
          }
        >
          {hasNavigation ? (
            <button
              className="image-viewer__control image-viewer__nav image-viewer__nav--previous"
              type="button"
              onClick={onPrevious}
              aria-label={previousLabel}
              title={previousLabel}
            >
              <img src={arrowLeftIcon} alt="" aria-hidden="true" />
            </button>
          ) : null}

          <div className="image-viewer__image-frame">
            <img src={image} alt={imageAlt} />
          </div>

          {hasNavigation ? (
            <button
              className="image-viewer__control image-viewer__nav image-viewer__nav--next"
              type="button"
              onClick={onNext}
              aria-label={nextLabel}
              title={nextLabel}
            >
              <img src={arrowRightIcon} alt="" aria-hidden="true" />
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );

  return createPortal(viewer, document.body);
}

export default ImageViewer;
