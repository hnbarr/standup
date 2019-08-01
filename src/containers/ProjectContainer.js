import Projects from "../components/Projects";
import { connect } from "react-redux";
import { listProjects, createProject, updateProject, showProject, deleteProject } from '../redux/actions/projectActions'


function mapStateToProps(state) {
    return {
    projects: state.projects
  };
}

const mapDispatchToProps = (dispatch) => {
    return {
      updateProject: (project) => dispatch(updateProject(project)),
      listProjects: () => dispatch(listProjects()),
      showProject: (project) => dispatch(showProject(project)),
      createProject: (project) => dispatch(createProject(project)),
      deleteProject: (project) => dispatch(deleteProject(project))
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Projects);