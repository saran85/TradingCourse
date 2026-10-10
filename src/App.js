import React from 'react';
import Header from './component/Header';
import Hero from './component/Hero';
import Features from './component/Features';
import Testimonial from './component/Testimonial';
import FAQ from './component/FAQ';
import Map from './component/Map';
import Footer from './component/Footer';
import ScrollToTop from './component/ScrollToTop';
import './App.css'; // Importing the CSS
import { ThemeProvider } from '@ui5/webcomponents-react';
function App() {
  return (
    <ThemeProvider data="sap_fiori_3_dark">
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Testimonial />
      <FAQ />
      <Map />
      <Footer />
      <ScrollToTop/>
    </div>
    </ThemeProvider>
  );
}

export default App;
