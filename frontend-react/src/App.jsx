import { useState } from 'react'
import './assets/css/style.css'
import Main from './components/Main'
import Register from './components/Register'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'
import AuthProvider from './AuthProvider'

function App() {

  return (
    <>
    <AuthProvider>
      <BrowserRouter >
      <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </AuthProvider>
      
    </>
  )
}

export default App
