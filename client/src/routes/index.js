import React, { Fragment } from 'react'
import { Redirect, Route, Switch } from 'react-router'
import Home from './../pages/Home'
import Items from './../pages/Items'
import Share from './../pages/Share'
import Profile from './../pages/Profile'
import NavBar from './../components/Header'
export default () => (
  <Fragment>
    {/* @TODO: Add your menu component here */}
    <NavBar />
    <Switch>
      {/**
       * @TODO: Define routes here for: /items, /profile, /profile/:userid, and /share
       *
       * Provide a wildcard redirect to /items for any undefined route using <Redirect />.
       *
       * Later, we'll add logic to send users to one set of routes if they're logged in,
       * or only view the /welcome page if they are not.
       */}

      <Route exact path="/items" component={Items} />

      <Route exact path="/welcome" component={Home} />

      <Route exact path="/share" component={Share} />

      <Route exact path="/profile" component={Profile} />

      <Route exact path="/profile/:id" component={Profile} />

      <Redirect from="/" exact to="/welcome" component={Home} />
      <Redirect to="/items" component={Items} />
    </Switch>
  </Fragment>
)
