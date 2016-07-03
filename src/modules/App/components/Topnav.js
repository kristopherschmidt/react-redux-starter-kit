import React, { PropTypes } from 'react'
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap'
import { IndexLink } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'

function TopnavComponent ({ children }) {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <IndexLink to='#'>
            <div/>
            <span>React Redux Starter Kit</span>
          </IndexLink>
        </Navbar.Brand>
        <Navbar.Toggle/>
      </Navbar.Header>

      <Navbar.Collapse>

        <Nav>
          <NavDropdown eventKey={1} title="Reports" id="reports-nav-dropdown">
            <LinkContainer to={{ pathname: '/reports/helloWorld' }}>
              <MenuItem eventKey={1.1}>
                Hello World Report
              </MenuItem>
            </LinkContainer>
          </NavDropdown>
        </Nav>

      </Navbar.Collapse>

    </Navbar>
  )
}

TopnavComponent.propTypes = {
  children: PropTypes.element
}

export default TopnavComponent
