import { connect } from 'react-redux'
import { deleteResource } from '../actions/actions';
import Resources from '../components/Resources/Resources';


const mapStateToProps = state => ({
  resources: state.resources
})

const mapDispatchToProps = dispatch => ({
  deleteResource: link => dispatch(deleteResource(link))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Resources)
