
import { useState } from 'react';
import InsertQuestion from './InsertQuestions.jsx';
import UpdatePresentation from './UpdatePresentation.jsx';
import '../styles/side-bar.css';

/**
 * Sidebar Component
 *
 * Displays two tabs: "Insert questions" and "Updated presentation".
 * Allows switching between tabs and shows corresponding content.
 *
 * @component
 * @returns {ReactNode} The rendered Sidebar component
 */
export default function Sidebar() {
  const [activeTab, setActiveTab] = useState('questions');

  return (
    <div className="sidebar">
      <div className="tabs">
        <button
          className={activeTab === 'questions' ? 'active' : ''}
          onClick={() => setActiveTab('questions')}
        >
          Insert Questions
        </button>
        <button
          className={activeTab === 'updated' ? 'active' : ''}
          onClick={() => setActiveTab('updated')}
        >
          Updated Presentation
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'questions' ? <InsertQuestion /> : <UpdatePresentation />}
      </div>
    </div>
  );
}
