import React from 'react'
import MainLayout from '../layouts/MainLayout'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Industry from '../components/Industry'
import About from '../components/About'
import Services from '../components/Services'

function Home() {
  return <MainLayout>
    <Hero/>
    <Features />
    <Industry />
    <About />
    <Services />
  </MainLayout>
}

export default Home