import React from 'react'
import PropTypes from 'prop-types'

class App extends React.Component{
  render(){
    let text = this.props.txt
    return (
      <div>
        <h1>{text}</h1>
      </div>
    )
  }
}

App.propTypes = {
  txt : PropTypes.String
}
export default App
