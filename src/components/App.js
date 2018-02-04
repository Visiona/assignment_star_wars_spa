import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route } from 'react-router-dom'
import Search  from './Search'
import ResourcesContainer  from './ResourcesContainer'

// Add later!!! //
// <Route exact path='/people' component={Home} />
// <Route exact path='/planets' component={Home} />
// <Route exact path='/species' component={Home} />
// <Route exact path='/starships' component={Home} />
// <Route exact path='/vehicles' component={Home} />

const App = () => (
  <Router>
    <Route exact path='/search' component={Search} />
    <Route exact path='/:resources' component={ResourcesContainer} />
  </Router>
)



// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
