import React from 'react'
import './App.css'
import Nav from './Components/Nav/Nav'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <>
      <Nav/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
