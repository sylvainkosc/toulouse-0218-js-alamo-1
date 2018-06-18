
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Divider } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Login from '../Login'
import Register from '../Register'




function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class SimpleModal extends React.Component {
  state = {
    open: false,
    display: 'login'
  };

  render() {
    const { classes } = this.props;
    let text
    let linktext
    if (this.state.display==='login'){
      text = 'Vous n\'avez pas de compte ?'
      linktext = 'Inscription'
    }
    else {
      text = 'Vous avez déjà un compte Alamo ?'
      linktext = 'Connexion'
    }
  
    return (
      <div>
        {/* <Typography gutterBottom>Click to get the full Modal experience!</Typography>
        <Button onClick={this.handleOpen}>Open Modal</Button> */}
        <Modal
          open={this.props.open}
          onClose={this.props.close}
        >
          <div style={getModalStyle()} className={classes.paper}>
          { this.state.display==='login'? <Login /> : <Register /> }
          <Divider />
          <div>
            {text} <a href='#' >{linktext}</a>
          </div>  
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;