// mapDispatchToProps & mapStateToProps
import Stats from '../components/Stats'
import { connect } from "react-redux"

function mapStateToProps(state) {
    return {
    stats: state.stats
  };
}

const mapDispatchToProps = (dispatch) => {
    return {
      updateStat: () => dispatch(updateStat()),
      listStats: () => dispatch(listStats()),
      deleteStat: () => dispatch(deleteStat())
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Stats);