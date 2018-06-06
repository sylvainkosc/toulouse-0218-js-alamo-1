import React from 'react'
import NavBar from './components/NavBar'
import SearchLocationBar from './components/SearchBar'
import { withStyles } from '@material-ui/core/styles'
import IconeSport from './components/Icones'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import IconePresentation from './components/IconePresentation'
import './index.css'

const styles = theme => ({
  paper: {
    backgroundColor: '#E6EAF0'
  }
})
class Homepage extends React.Component {
  render () {
    const { classes } = this.props
    return (<div>
      <Paper className={classes.paper}>
        < NavBar />
        < SearchLocationBar />
        < IconeSport />
      </Paper>
      <Paper className={classes.paperIcones}>
        < IconePresentation />
      </Paper>

    </div>
    )
  }
}
Homepage.propTypes = {
  classes: PropTypes.object
}
export default withStyles(styles)(Homepage)
