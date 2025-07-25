import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";

function App() {
  return (
    <div className="relative bg-[#08060E] overflow-hidden">
      {/* Spotlight at Top-Left */}
      <div className="absolute top-[-200px] left-[-200px] w-[700px] h-[700px] bg-[#0B037A] opacity-30 rounded-full blur-[200px] pointer-events-none z-0 " />
      <Navbar/>
      <Hero/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
