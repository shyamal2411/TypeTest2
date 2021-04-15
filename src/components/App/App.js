import React from 'react'
import "./App.css"
import Nav from './../Navbar/Navbar' 
import Main from './../Main/Main'
class App extends React.Component {
  render() {
    return (
      <div className="app">
        {/* Navbar Section */}
          <Nav/>
          {/* Landing page */}
        <Main/>
        {/* Challenge Section */}

        {/* Footer */}
      </div>
    )
  }
}
export default App;