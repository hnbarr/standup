// mapDispatchToProps & mapStateToProps
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
      updateBlocker: () => dispatch(updateBlocker()),
      listBlockers: () => dispatch(listBlockers()),
      createBlocker: () => dispatch(createBlocker()),
      deleteBlocker: () => dispatch(deleteBlocker())
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Blockers);
