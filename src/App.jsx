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
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/training" element={<Training />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
