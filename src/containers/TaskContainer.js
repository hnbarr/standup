import Tasks from "../components/Tasks";
import { connect } from "react-redux";
import { listTasks, createTask, updateTask, deleteTask } from '../redux/actions/taskActions'

function mapStateToProps(state) {
    return {
    tasks: state.tasks
  };
}

const mapDispatchToProps = (dispatch) => {
    return {
      updateTask: () => dispatch(updateTask()),
      listTasks: () => dispatch(listTasks()),
      createTask: () => dispatch(createTask()),
      deleteTask: () => dispatch(deleteTask())
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Tasks);