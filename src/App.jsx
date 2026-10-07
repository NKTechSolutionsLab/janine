import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServicesBar from './components/ServicesBar'
import AboutSection from './components/AboutSection'
import BooksSection from './components/BooksSection'
import MusicSection from './components/MusicSection'
import JourneySection from './components/JourneySection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <ServicesBar />
      <AboutSection />
      <BooksSection />
      <MusicSection />
      <JourneySection />
      <CTASection />
      <Footer />
    </>
  )
}

export default App
