import './App.css';
import TextArea from './components/TextArea.jsx';
import Footer from './components/Footer.jsx';
import SlideDisplay from './components/SlideDisplay.jsx';
import { useState } from 'react';

const slides = [
  { id: 1, img: '/slides/Slide1.JPG' },
  { id: 2, img: '/slides/Slide2.JPG' },
  { id: 3, img: '/slides/Slide3.JPG' },
  { id: 4, img: '/slides/Slide4.JPG' },
  { id: 5, img: '/slides/Slide5.JPG' },
];

function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  return (
    <div className="App">
      <div className="content-wrapper">
      <SlideDisplay
        slide={slides[currentSlideIndex]}
        currentSlideIndex={currentSlideIndex}
        totalSlides={slides.length}
        setCurrentSlideIndex={setCurrentSlideIndex}
      />

      <TextArea />
      </div>
      <Footer />
    </div>
  );
}

export default App;
