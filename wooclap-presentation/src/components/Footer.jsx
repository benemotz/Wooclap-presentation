import React from 'react';
import '../styles/footer.css';

/**
 * @returns {ReactNode} A footer component with a discard button.
 */

export default function Footer() {
    return (
        <footer>
            <button className="discard-footer">Discard</button>
        </footer>
    );
}