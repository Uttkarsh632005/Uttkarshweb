import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Contact from "./components/Contact";
import StarsCanvas from "./components/canvas/Stars";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        
        {/* GLOBAL STARS BACKGROUND */}
        <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
          <StarsCanvas />
        </div>

        {/* YAHAN CHANGE KIYA: 'bg-hero-pattern' hata diya */}
        {/* Ab ye transparent hai, to peeche ke Stars dikhenge */}
        <div className='relative z-10'>
          <Navbar />
          <Hero />
        </div>

        <div className="relative z-10">
          <About />
          <Experience />
          <Tech />
          <Works />
          
          <div className='relative z-0'>
            <Contact />
          </div>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;