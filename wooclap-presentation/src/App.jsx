import './App.css';
import TextArea from './components/TextArea.jsx';
import Footer from './components/Footer.jsx';
import SlideDisplay from './components/SlideDisplay.jsx';
import Slidebar from './components/Slidebar.jsx';
import { useState } from 'react';
import Sidebar from './components/SideBar.jsx';

const slides = [
  { id: 1, img: '/slides/Slide1.JPG' },
  { id: 2, img: '/slides/Slide2.JPG' },
  { id: 3, img: '/slides/Slide3.JPG' },
  { id: 4, img: '/slides/Slide4.JPG' },
  { id: 5, img: '/slides/Slide5.JPG' },
  { id: 6, img: '/slides/Slide6.JPG' },  
  { id: 7, img: '/slides/Slide7.JPG' },
  { id: 8, img: '/slides/Slide8.JPG' },
  { id: 9, img: '/slides/Slide9.JPG' },
  { id: 10, img: '/slides/Slide10.JPG' },
];

function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [slideNotes, setSlideNotes] = useState({});

  return (
    <div className="App">
      <div className="overall-content-wrapper">
        <div className="display-content-wrapper">
          <SlideDisplay
            slide={slides[currentSlideIndex]}
            currentSlideIndex={currentSlideIndex}
            totalSlides={slides.length}
            setCurrentSlideIndex={setCurrentSlideIndex}
          />

          <TextArea
            text={slideNotes[currentSlideIndex] || ''}
            onChange={(event) => {
              setSlideNotes({ ...slideNotes, [currentSlideIndex]: event.target.value });
            }}
          />
        </div>
        <Slidebar
          slides={slides}
          currentSlideIndex={currentSlideIndex}
          setCurrentSlideIndex={setCurrentSlideIndex}
        />
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
