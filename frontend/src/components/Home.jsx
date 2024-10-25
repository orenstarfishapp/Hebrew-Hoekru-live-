// import { BrowserRouter } from 'react-router-dom';
import Hero from './Hero.jsx';
import Features from './Features.jsx';
import LearningIntro from './learningIntro.jsx';
import HowitWork from './howitwork.jsx';
import Testimonial from './Testimonial.jsx';
import Question from './question.jsx';
import ReadyJourney from './readyJourney.jsx';

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <LearningIntro />
      <HowitWork />
      <Testimonial />
      <Question />
      <ReadyJourney />
    </>
  );
}

export default Home;
