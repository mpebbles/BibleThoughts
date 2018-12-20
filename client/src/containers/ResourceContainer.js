import { connect } from 'react-redux'
import { deleteResource } from '../actions/actions';
import Resources from '../components/Resources'


const mapStateToProps = state => ({
  resources: state.resources
})

const mapDispatchToProps = dispatch => ({
  deleteResource: id => dispatch(deleteResource(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Resources)
