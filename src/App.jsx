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
  );
}

export default App;
