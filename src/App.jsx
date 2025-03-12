import React from 'react'
import Contact from './Components/Contact/Contact'
import Hero from './Components/Hero/Hero'
import NavBar from './Components/NavBar/NavBar'
import Projects from './Components/Projects/Projects'

export const App = () => {
  return (
    <div>
      <NavBar>wow</NavBar>
      <Hero/>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  )
}

export default App
