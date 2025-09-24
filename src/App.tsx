import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import ProblemSolution from './components/ProblemSolution';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <WhoWeAre />
      <ProblemSolution />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;