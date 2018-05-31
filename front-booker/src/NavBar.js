import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import permIdentity from './images/permIdentity.png'
import Button from '@material-ui/core/Button'

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  }
}

function SimpleAppBar (props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
          Alamo
          </Typography>
          <Button className={classes.btn} variant="raised" style={{backgroundColor: '#66FF33'}}>
        Vous êtes gérant de salle de sport ?
          </Button> <a href ="#" ><img src={permIdentity} className="App-logo" alt="logo" /> </a>
        </Toolbar>
      </AppBar>
    </div>
  )
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SimpleAppBar)
