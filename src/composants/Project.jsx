import React from 'react'
import Navbar from './Navbar'
import AllProjectsPage from './AllProjectsPage'
import Footer from './Footer'
import SocialSidebar from './SocialSidebar'

export default function Project() {
  return (
    <div>
      <SocialSidebar/>
      <Navbar/>
      <AllProjectsPage/>
      <Footer/>
    </div>
  )
}
