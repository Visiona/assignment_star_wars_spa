import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch } from 'react-router-dom'
import Search  from './Search'
import ResourcesContainer  from './ResourcesContainer'

// Add later!!! //
// <Route exact path='/people' component={Home} />
// <Route exact path='/planets' component={Home} />
// <Route exact path='/species' component={Home} />
// <Route exact path='/starships' component={Home} />
// <Route exact path='/vehicles' component={Home} />
const NavLinks = () => (
  <div className='NavLinks'>
    <NavLink activeClassName='active' exact to='/search'>
      Search
    </NavLink>{'  '}
    <NavLink activeClassName='active' exact to='/search'>
      People
    </NavLink>{'  '}
    <NavLink activeClassName='active' exact to='/search'>
      Planets
    </NavLink>{'  '}
    <NavLink activeClassName='active' exact to='/search'>
      Species
    </NavLink>{'  '}
    <NavLink activeClassName='active' exact to='/search'>
      Starships
    </NavLink>{'  '}
    <NavLink activeClassName='active' exact to='/search'>
      Vehicles
    </NavLink>{'  '}
  </div>
)

const App = () => (
  <Router>
    <div>
      <h1>Star Wars Encyclopedia</h1>
      <NavLinks />
      <Switch>
        <Route exact path='/search' component={Search} />
        <Route exact path='/:resources' component={ResourcesContainer} />
      </Switch>
    </div>
  </Router>
)

export default App;
