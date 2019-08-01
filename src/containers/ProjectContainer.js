// mapDispatchToProps & mapStateToProps
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
      updateProject: () => dispatch(updateProject()),
      listProjects: () => dispatch(listProjects()),
      showProject: () => dispatch(showProject()),
      createProject: (project) => dispatch(createProject(project)),
      deleteProject: (project) => dispatch(deleteProject(project))
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Projects);