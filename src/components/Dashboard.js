import React from 'react'
import './styles/dash.css'
import TaskContainer from '../containers/TaskContainer'
import BlockerContainer from '../containers/BlockerContainer'
import Stats from './Stats'
import ProjectContainer from '../containers/ProjectContainer'
import Nav from './Nav'
// import PropTypes from 'prop-types'

// styles
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

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
                <ProjectContainer />
                <Stats />
                <TaskContainer />
                <BlockerContainer />
              </ThemeProvider>
            </div>
        )
}


Dashboard.propTypes = {

}

export default Dashboard