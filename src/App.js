import React from 'react'

// Compnents Import (do this in containers instead)
// import { Article, Brand, CTA, Navbar, Feature } from './components';
import { Footer, Blog, Features, Header, Possibility, WhatAlpha } from './container';
import { Brand, CTA, Navbar } from './components';

const App = () => {
  return (
    <div className='App'>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatAlpha />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App