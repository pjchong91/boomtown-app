import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    boxShadow: 'none',
    backgroundColor: 'transparent'
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  addButton:{
    color: 'white',
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '50px',
    margin: '10px'
  }
});

function FloatingActionButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="extendedFab" aria-label="Delete" className={classes.button}>
        <AddIcon className={classes.addButton}/>
        Share Something
      </Button>
     
    </div>
  );
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingActionButtons);