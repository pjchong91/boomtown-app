import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Link } from 'react-router-dom'
import BoomtownLogo from './../../images/boomtown.svg'
import ShareButton from './ShareButton/ShareButton'
import HamburgerMenu from './UserMenu/Hamburger'
import styles from './styles'

function NavBar(props) {
  const { classes } = props

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.navBar}>
          <Link to="/items">
            <img
              src={BoomtownLogo}
              alt="Boomtown Logo"
              style={{ display: 'inline', maxHeight: '50px', margin: '10px' }}
            />
          </Link>

          <div className={classes.rightSideNav}>
            <Link to="/share">
              <ShareButton />
            </Link>
            <HamburgerMenu />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(NavBar)
