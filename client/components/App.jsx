import React, { Component } from 'react';
import ApplicationDetails from './ApplicationDetails.jsx'

class App extends Component {
    render(){
        return(
            <div>
              <h1>header from React</h1>
              <ApplicationDetails />
            </div>
        )
    }
}

export default App;