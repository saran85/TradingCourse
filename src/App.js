import React from 'react';
import Header from './component/Header';
import Hero from './component/Hero';
import Features from './component/Features';
import Testimonial from './component/Testimonial';
import FAQ from './component/FAQ';
import Map from './component/Map';
import Footer from './component/Footer';
import './App.css'; // Importing the CSS

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Testimonial />
      <FAQ />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
