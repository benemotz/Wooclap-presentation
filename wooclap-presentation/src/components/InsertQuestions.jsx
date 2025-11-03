import Question from './Question.jsx';
import '../styles/insert-questions.css';
import { FaPoll, FaQuestion, FaListAlt, FaStar } from 'react-icons/fa';

/**
 * InsertQuestion Component
 *
 * Displays a list of predefined questions using the Question component.
 *
 * @component
 * @returns {ReactNode} The rendered InsertQuestion component
 */
export default function InsertQuestion() {
  return (
    <ul className="question-list">
      <div> <Question icon={<FaQuestion />} text="What is a house?" /></div>
      <div> <Question icon={<FaPoll />} text="What is your favorite color between blue and green?" /></div>
      <div> <Question icon={<FaListAlt />} text="What do you think about this presentation?" /></div>
      <div> <Question icon={<FaStar />} text="Rate this slide from 1 to 5." /></div>
    </ul>
  );
}
