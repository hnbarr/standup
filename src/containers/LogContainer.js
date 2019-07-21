// mapDispatchToProps & mapStateToProps
import Log from "../components/Log";
import { connect } from "react-redux";
import { listLogs, createLog, updateLog, showLog, deleteLog } from '../redux/actions/logActions'

function mapStateToProps(state) {
    return {
    logs: state.logs
  };
}

const mapDispatchToProps = (dispatch) => {
    return {
      updateLog: () => dispatch(updateLog()),
      listLogs: () => dispatch(listLogs()),
      showLog: () => dispatch(showLog()),
      createLog: () => dispatch(createLog()),
      deleteLog: () => dispatch(deleteLog())
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Log);