import '../styles/slide-display.css';
/**
 * SlideDisplay Component
 *
 * Displays the current slide image and provides navigation controls
 * to move between slides.
 *
 * @component
 * @example
 * // Usage example:
 * <SlideDisplay
 *   slide={{ id: 1, img: "/slides/slide1.png", title: "Outline" }}
 *   currentSlideIndex={0}
 *   totalSlides={5}
 *   setCurrentSlideIndex={(index) => console.log(index)}
 * />
 *
 * @param {Object} options - Component props
 * @param {Object} options.slide - The current slide object
 * @param {number} options.currentSlideIndex - Index of the current slide
 * @param {number} options.totalSlides - Total number of slides
 * @param {Function} options.setCurrentSlideIndex - Function to update the current slide index
 *
 * @returns {ReactNode} The rendered SlideDisplay component
 */

export default function SlideDisplay({
  slide,
  totalSlides,
  currentSlideIndex,
  setCurrentSlideIndex,
}) {
  const showNext = () => {
    if (currentSlideIndex < totalSlides - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const showPrevious = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  return (
    <div className="slide-display">
      <div className="slide-container">
        <img
          src={slide.img}
          alt={`Slide ${currentSlideIndex + 1}`}
          className="slide-image"
        />
      </div>
      <div className="slide-navigation">
        <div className="nav-buttons">
          <button
            onClick={showPrevious}
            className="nav-button"
            disabled={currentSlideIndex === 0}
          >
            &lt;
          </button>
          <span>
            {currentSlideIndex + 1}/{totalSlides}
          </span>
          <button
            onClick={showNext}
            className="nav-button"
            disabled={currentSlideIndex === totalSlides - 1}
          >
            &gt;
          </button>
        </div>
        <button className="help-button">?</button>
      </div>
    </div>
  );
}
