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
      updateTask: (task, id) => dispatch(updateTask(task, id)),
      listTasks: () => dispatch(listTasks()),
      createTask: (task) => dispatch(createTask(task)),
      deleteTask: (_id) => dispatch(deleteTask(_id))
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Tasks);