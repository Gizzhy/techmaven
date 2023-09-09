import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import Home from "./pages/Home";
import Body from "./pages/Body";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Animate from "./utils/Animate";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Animate>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Body" element={<Body />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Portfolio" element={<Portfolio />} />
        </Routes>
      </Animate>
    </BrowserRouter>
  );
}

export default App;
