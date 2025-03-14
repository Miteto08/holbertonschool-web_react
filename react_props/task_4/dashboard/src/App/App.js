import React from 'react'
import './App.css'
import Header from '../Header/Header'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import Notifications from '../Notifications/Notifications'
import PropTypes from 'prop-types'
import CourseList from '../CourseList/CourseList'

function App({ isLoggedIn }) {
  const isIndex = true

  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        {isLoggedIn ? <CourseList /> : <Login />}
        <Footer isIndex={isIndex} />
      </div>
    </>
  )
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
}

App.defaultProps = {
  isLoggedIn: false
}

export default App