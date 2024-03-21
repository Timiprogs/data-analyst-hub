import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Newsletter from "./components/Newsletter";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Company from "./components/Company";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import PrivacyPolicy from "./components/PrivacyPolicy";
import NoMatch from "./components/NoMatch";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />

        <Route path="services" element={<Contact />}>
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route path="company" element={<Company />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
