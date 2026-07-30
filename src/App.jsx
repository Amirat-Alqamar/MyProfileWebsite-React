import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './style/style.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Loader from './Components/Loder'
import TechStack from './Components/TechStack'
import Experience from './Components/Experience'
import Certificates from './Components/Certificates'
import CurrentGoals from './Components/CurrentGoals'
import WhyHireMe from './Components/WhyHireMe'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Loader/>
      <Navbar/>
      <Home/>
      <About/>
      <TechStack/>
      <Projects/>
      <Experience/>
      <Certificates/>
      <WhyHireMe/>
      <CurrentGoals/>
      <Contact/>
      <Footer/>
      
     

    </>
  )
}

export default App
