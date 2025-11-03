import "../styles/questions.css";

/**
 * Question Component
 * Displays a question with an icon and text.
 * @param {Object} options - Component properties
 * @param {string} options.icon - The icon representing the question type
 * @param {string} options.text - The text of the question
 * @returns {ReactNode} The rendered Question component
 */

export default function Question({ icon, text }) {
  return (
    <div className="questions">
      <span className="question-icon">{icon}</span>
      <span className="question-text">{text}</span>
    </div>
  );
}
