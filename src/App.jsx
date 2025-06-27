import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AnimatedBackground from './composants/AnimatedBackground'
import Home from './composants/Home'
import Project from './composants/Project'
import AboutPage from './composants/AboutPage'
import ContactPage from './composants/ContactPage'
import NotFoundPage from './composants/NOtFoundPage'

function App() {

  return (
<AnimatedBackground>

   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Projects' element={<Project/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
   </BrowserRouter>
</AnimatedBackground>
  )
}

export default App
