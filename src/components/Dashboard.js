import React from 'react'
import './styles/dash.css'
import Tasks from './Tasks'
import Blockers from './Blockers'
import Stats from './Stats'
import Progress from './Progress'
import Nav from './Nav'
// import PropTypes from 'prop-types'

// styles
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
// import { purple } from '@material-ui/core/colors';

const Dashboard = props => {
    const theme = createMuiTheme({
        palette: {
          primary: { main: '#C5CAE9' }, //green C5E0A5
          secondary: { main: '#E8EAF6'} //purple C5CAE9
        }
      });
        return(
            <div className='dashboard'>
              <ThemeProvider theme={theme}>
                <Nav/>
                <Progress />
                <Stats />
                <Tasks />
                <Blockers />
              </ThemeProvider>
            </div>
        )
}


Dashboard.propTypes = {

}

export default Dashboard