import { connect } from 'react-redux'

import FilePanel from '../components/FilePanel'
import { changeView } from '../actions/Index'
import Constants from '../Constants'

const mapStateToProps = (state) => ({
    view: state.view
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    changeView: (view) => dispatch(changeView(view))
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(FilePanel);