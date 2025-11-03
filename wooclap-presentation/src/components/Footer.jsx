import '../styles/footer.css';

/**
 * @returns {ReactNode} A footer component with a discard button.
 */

export default function Footer() {
  return (
    <footer>
      <button className="discard-footer">Discard</button>
      <button className="save-footer">Save</button>
    </footer>
  );
}
