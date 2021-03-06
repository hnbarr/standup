import { connect } from "react-redux";
import Dashboard from "../components/Dashboard";
// import BlockerContainer from './BlockerContainer'

function mapStateToProps(state) {
    return {
      tasks: state.tasks,
      projects: state.projects,
      blockers: state.blockers,
      logs: state.logs
    };
  }

  export default connect(mapStateToProps)(Dashboard);