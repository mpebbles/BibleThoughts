import { connect } from 'react-redux'
import { deleteEntry } from '../actions/actions';
import Entries from '../components/Entries/Entries';


const mapStateToProps = state => ({
  entries: state.entries,
})

const mapDispatchToProps = dispatch => ({
  deleteEntry: id => dispatch(deleteEntry(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Entries)
