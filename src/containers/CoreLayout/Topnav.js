import React, { PropTypes } from 'react'
import Navbar from 'react-bootstrap/lib/Navbar'
import { IndexLink } from 'react-router'

function Topnav ({ children }) {
  return (
    <Navbar fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <IndexLink to='/' activeStyle={{color: '#33e0ff'}}>
            <div/>
            <span>React Redux Starter Kit</span>
          </IndexLink>
        </Navbar.Brand>
        <Navbar.Toggle/>
      </Navbar.Header>
    </Navbar>
  )
}

Topnav.propTypes = {
  children: PropTypes.element
}

export default Topnav
