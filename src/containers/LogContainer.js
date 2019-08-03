// mapDispatchToProps & mapStateToProps
import Logs from "../components/Log";
import { connect } from "react-redux";
import { listLogs, createLog, updateLog, showLog, deleteLog } from '../redux/actions/logActions'

function mapStateToProps(state) {
    return {
    logs: state.logs
  };
}

const mapDispatchToProps = (dispatch) => {
    return {
      updateLog: (log) => dispatch(updateLog(log)),
      listLogs: () => dispatch(listLogs()),
      showLog: (log) => dispatch(showLog(log)),
      createLog: (log) => dispatch(createLog(log)),
      deleteLog: (log) => dispatch(deleteLog(log))
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Logs);