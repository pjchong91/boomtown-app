import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import BoomtownLogo from './../../images/boomtown.svg'
import ShareButton from './ShareButton/ShareButton'
import HamburgerMenu from './UserMenu/Hamburger'

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  navBar:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  rightSideNav:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  console.log(window.location.pathname)
   
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.navBar}>
              <Link to="./items">
                  <img src={BoomtownLogo} alt='Boomtown Logo' style={{display:"inline", maxHeight:"50px", margin:"10px"}}/>
              </Link>
           <div className={classes.rightSideNav}>
            <Link to="./share">
            <ShareButton />
            </Link>
            <HamburgerMenu />
        </div>
          </Toolbar>
         
        </AppBar>
      </div>
    );
  
  
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
