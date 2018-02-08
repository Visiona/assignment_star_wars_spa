import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch } from 'react-router-dom'
import Search  from './Search'
import ResourcesContainer  from './ResourcesContainer'
import PaginationContainer from './PaginationContainer'

const NavLinks = () => (
  <div className='NavLinks'>
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
    <NavLink activeClassName='active' exact to='/search'>
    Search
    </NavLink>{' | '}
  </div>
)

const App = () => (
  <Router>
    <div>
      <div className='title-container'>
        <h1 className='justify-content-center'>Star Wars Encyclopedia</h1>
        <NavLinks />
        <PaginationContainer />
      </div>
      <div className='container'>
        <Switch>
          <Route exact path='/search' component={Search} />
          <Route exact path='/:resource' component={ResourcesContainer} />
        </Switch>
      </div>
    </div>
  </Router>
)

export default App;
