import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Video from './components/Video';
import FormSection from './components/FormSection';
import Problem from './components/Problem';
import Promise from './components/Promise';
import Method from './components/Method';
import Process from './components/Process';
import TargetAudience from './components/TargetAudience';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Video />
      <FormSection />      
      <Problem />
      <Promise />
      <Method />
      <Process />
      <TargetAudience />
      <Benefits />
      <Testimonials />
      <FAQ />     
      <Footer />
    </div>
  );
}

export default App;
