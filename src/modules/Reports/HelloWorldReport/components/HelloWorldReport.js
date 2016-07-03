import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

export class HelloWorldReportContainer extends React.Component {

  render () {
    return (
      <div className='container text-center'>
        <h1>Hello World! You are authenticated to see the Hello World report!</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
})
export default connect(mapStateToProps, {

})(HelloWorldReportContainer)
