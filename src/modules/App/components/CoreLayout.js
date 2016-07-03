import React, { PropTypes } from 'react'
import 'styles/core.scss'
import Topnav from './Topnav'

function CoreLayout ({ children }) {
  return (
    <div className='page-container'>
      <div className='view-container'>
        <Topnav />
        {children}
      </div>
    </div>
  )
}

CoreLayout.propTypes = {
  children: PropTypes.element
}

export default CoreLayout
