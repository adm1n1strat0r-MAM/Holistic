import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from './components/Aboutus';
import Curriculum from './components/Curriculum';
import WhyChooseUs from './components/WhyChooseUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className="bg-white">
      <Header /></div>
      <Hero />
      <AboutUs />
      <Curriculum />
      <WhyChooseUs />
      <ContactUs />
      <Footer />
    
    </>
  );
}

export default App;
