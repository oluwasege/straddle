import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import { Navbar,Work,Footer } from "./components";
import Aboutus from "./pages/aboutus/Aboutus";
import Term from "./pages/term/Term";
import Contact from "./pages/contact/Contact";
import Faq from "./pages/faq/Faq";
import Privacypolicy from "./pages/privacypoilcy/Privacy";

const App = () => {
  return (
    <div className="App">
      
      <Navbar />
        <Routes>
          <Route path='/' element={<Work />} />
          <Route path='/About Us' element={<Aboutus />} />
          <Route path='/Faq' element={<Faq/>} />
          <Route path='/Term Of Use' element={<Term />} />
          <Route path='/Privacy Policy' element={<Privacypolicy />} />
          <Route path='/Contact Us' element={<Contact />} />

        </Routes>
      <Footer />
      
    </div>
  );
};

export default App;
