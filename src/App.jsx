import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Training from "./pages/Training";
import Contact from "./pages/Contact";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col justify-between">
        {/* navbar */}
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        {/* sidebar */}
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Routes>
          <Route path="/craft-raisebe-website" element={<Home />} />
          <Route path="/craft-raisebe-website/about" element={<About />} />
          <Route path="/craft-raisebe-website/careers" element={<Careers />} />
          <Route
            path="/craft-raisebe-website/training"
            element={<Training />}
          />
          <Route path="/craft-raisebe-website/contact" element={<Contact />} />
        </Routes>
        {/* footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
