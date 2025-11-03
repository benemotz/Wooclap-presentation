import '../styles/slide-bar.css';

/**
 * Slidebar Component
 *
 * Displays a scrollable list of slide thumbnails. Clicking on a thumbnail
 * updates the currently displayed slide in the main view.
 *
 * @component
 * @param {Object} options - Component props
 * @param {Array} options.slides - Array of slide objects with `id` and `img` properties
 * @param {number} options.currentSlideIndex - Index of the currently selected slide
 * @param {Function} options.setCurrentSlideIndex - Function to update the selected slide index
 *
 * @returns {ReactNode} The rendered Slidebar component
 */

export default function Slidebar({
  slides,
  currentSlideIndex,
  setCurrentSlideIndex,
}) {
  return (
    <div className="slide-bar">
      <form className="slide-bar-form">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide-wrapper ${currentSlideIndex === index ? 'active' : ''}`}
          >
            <span className="slide-number">{index + 1}</span>
            <img
              key={slide.id}
              src={slide.img}
              alt={`Slide ${index + 1}`}
              className="slide"
              onClick={() => setCurrentSlideIndex(index)}
            />
          </div>
        ))}
      </form>
    </div>
  );
}
