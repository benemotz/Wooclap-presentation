import React from 'react';
import '../styles/text-area.css';

/**
 * 
 * @param {Object} options -
 * @param {string} options.text - The text to display in the text area.
 * @param {function} options.onChange - Callback function to handle text changes when chainging slides.
 * @returns {ReactNode} A text area component.
 */
export default function TextArea({text,onChange}) {
  return (
    <textarea value={text} onChange={onChange} className="text-area" />
  );
}