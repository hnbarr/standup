import React from 'react'
import './styles/dash.css'
import Tasks from './Tasks'
import Blockers from './Blockers'
import Stats from './Stats'
import Projects from './Projects'
import Nav from './Nav'
// import PropTypes from 'prop-types'

// styles
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
// import { purple } from '@material-ui/core/colors';

const Dashboard = props => {
    const theme = createMuiTheme({
        palette: {
          primary: { main: '#102D5C' }, //green C5E0A5
          secondary: { main: '#3C649D'} //purple C5CAE9
        }
      });
        return(
            <div className='dashboard'>
              <ThemeProvider theme={theme}>
                <Nav/>
                <Projects />
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