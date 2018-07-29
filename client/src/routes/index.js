import React, { Fragment } from 'react'
import { Redirect, Route, Switch } from 'react-router'
import Home from './../pages/Home'
import Items from './../pages/Items'
import Share from './../pages/Share'
import Profile from './../pages/Profile'
import NavBar from './../components/Header'
import { ViewerContext } from '../context/ViewerProvider'
//TODO: EVENTUALLY NEED TO IMPORT A LOADER

export default () => (
  <ViewerContext.Consumer>
    {({ loading, viewer, error }) => {
      if (loading) return 'Loading stuff'
      // <FullScreenLoader />
      if (!viewer) {
        return (
          <Switch>
            <Route
              exact
              path="/welcome"
              name="/home"
              component={Home}
              // THIS PART IS CALLED LOADABLE CODE SPLITTING - ADVANCED STUFF.
              // component={Loadable({
              //   loader: () => import('../Pages/HomePage'),
              //   loading: FullScreenLoader
              // })}
            />
            <Redirect from="*" to="/welcome" />
          </Switch>
        )
      }
      return (
        <React.Fragment>
          <NavBar />
          <Switch>
            <Route exact path="/items" component={Items} />

            <Route exact path="/share" component={Share} />

            <Route exact path="/profile" component={Profile} />

            <Route exact path="/profile/:userid" component={Profile} />

            <Redirect from="/" exact to="/items" component={Items} />
            <Redirect to="/items" component={Items} />
          </Switch>
        </React.Fragment>
      )
    }}
  </ViewerContext.Consumer>
)
