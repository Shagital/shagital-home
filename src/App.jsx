<<<<<<< HEAD
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
=======
import { BrowserRouter, Routes, Route } from "react-router"
;
import Home from './Pages/Home';
import Privacy from "./Pages/Privacy";
import Terms from "./Pages/Terms";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/privacy-policy" element={<Privacy/>}/>
        <Route path="/terms" element={<Terms/>}/>
      </Routes>
    </BrowserRouter>
>>>>>>> feature/privacy-policy
  );
}

export default App;
