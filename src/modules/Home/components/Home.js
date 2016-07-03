import React from 'react'
import { connect } from 'react-redux'

export class Home extends React.Component {

  render () {
    return (
      <div className='container text-center'>
        <h1>Welcome to the React-Redux Starter Kit!</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})
export default Home
