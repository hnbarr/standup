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
      updateStat: (stat) => dispatch(updateStat(stat)),
      listStats: () => dispatch(listStats()),
      deleteStat: (stat) => dispatch(deleteStat(stat))
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Stats);