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
    <h4>Keep Working</h4>
  <NavBar></NavBar>
  <a href="mailto:papa.a.barry@gmail.com">My Mail</a>
    <Routes>
      <Route path="/" element={<Profile/>}></Route>
      <Route path="/education" element={<Education/>}></Route>
      <Route path="/experiences" element={<Experience/>}></Route>
    
    </Routes>
    
    </>
  )
}

export default App
