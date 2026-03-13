import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/Navbar'
import Profile from './pages/Profile'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import {Routes , Route} from 'react-router-dom'


function App() {

  return (
    <>
    
  <NavBar></NavBar>
  <Profile></Profile>
  <Education></Education>
  <Experience></Experience>
  <Skills></Skills>
  <Footer></Footer>
    
    </>
  )
}

export default App
