import Blockers from "../components/Blockers";
import { connect } from "react-redux";
import { listBlockers, createBlocker, updateBlocker, deleteBlocker } from '../redux/actions/blockerActions'

function mapStateToProps(state) {
    return {
      blockers: state.blockers
  };
}

const mapDispatchToProps = (dispatch) => {
    return {
      updateBlocker: (blocker) => dispatch(updateBlocker(blocker)),
      listBlockers: () => dispatch(listBlockers()),
      createBlocker: (blocker) => dispatch(createBlocker(blocker)),
      deleteBlocker: (blocker) => dispatch(deleteBlocker(blocker))
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Blockers);
