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
    <NavLink activeClassName='active' exact to='/'>
      Search
    </NavLink>{' | '}
    <NavLink activeClassName='active' exact to='/people'>
      People
    </NavLink>{' | '}
    <NavLink activeClassName='active' exact to='/planets'>
      Planets
    </NavLink>{' | '}
    <NavLink activeClassName='active' exact to='/species'>
      Species
    </NavLink>{' | '}
    <NavLink activeClassName='active' exact to='/starships'>
      Starships
    </NavLink>{' | '}
    <NavLink activeClassName='active' exact to='/vehicles'>
      Vehicles
    </NavLink>{' | '}
  </div>
)

const App = () => (
  <Router>
    <div>
      <h1>Star Wars Encyclopedia</h1>
      <NavLinks />
      <Switch>
        <Route exact path='/' component={Search} />
        <Route exact path='/:resource' component={ResourcesContainer} />
      </Switch>
    </div>
  </Router>
)

export default App;
