import "./App.css";
import Layout from "./Component/Layout/Layout";
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import PageNotFound from "./Pages/PageNotFound";
import Menu from "./Pages/Menu";
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/"        element={<Home />} />
            <Route path="/menu"    element={<Menu />} />
            <Route path="/about"   element={<About />} />
            <Route path="/contact" element={<Contact />} />
           
            <Route path="*"        element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
