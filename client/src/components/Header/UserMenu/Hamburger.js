import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';

const options = [
  'Your Profile',
  'Sign Out'
];

const ITEM_HEIGHT = 48;

class LongMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <IconButton
          aria-label="More"
          aria-owns={anchorEl ? 'long-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200,
            },
          }}
        >
        <Link to="./profile">
        <MenuItem key='Your Profile' onClick={this.handleClose}>Your Profile</MenuItem>
        </Link>

        <Link to="./welcome">
        <MenuItem key='Sign Out' onClick={this.handleClose}>Sign Out </MenuItem>
        </Link>
          {/* {options.map(option => (
              <Link to='./{option}'>
            <MenuItem key={option} onClick={this.handleClose}>
              {option}
            </MenuItem>
            </Link> */}
          ))}
        </Menu>
      </div>
    );
  }
}

export default LongMenu;