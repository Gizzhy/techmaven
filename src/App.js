import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import Home from "./pages/Home";
import Body from "./pages/Body";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

import Blog from "./pages/Blog";
import Notfound from "./pages/Notfound";
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
          <Route path="/Terms" element={<Terms />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/*" element={<Notfound />} />
        </Routes>
      </Animate>
    </BrowserRouter>
  );
}

export default App;
