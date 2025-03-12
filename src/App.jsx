import React from 'react'
import Contact from './Components/Contact/Contact'
import Hero from './Components/Hero/Hero'
import NavBar from './Components/NavBar/NavBar'
import Projects from './Components/Projects/Projects'
import Footer from './Components/Footer/Footer'
export const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Hero/>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App
