import React from 'react'
import './App.css'
import Header from '../Header/Header'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import Notifications from '../Notifications/Notifications'

function App() {
  const isIndex = true

  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        <Login />
        <Footer isIndex={isIndex} />
      </div>
    </>
  )
}

export default App