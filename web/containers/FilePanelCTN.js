import { connect } from 'react-redux'

import FilePanel from '../components/FilePanel'
import { changeView, setFile, setStat } from '../actions/Index'
import Constants from '../Constants'

const mapStateToProps = (state) => ({
    view: state.view,
    wvFile: state.wvFile,
    wvType: state.wvType,
    wvLoaded: state.wvLoaded,
    wvStat: state.wvStat
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    changeView: (view) => dispatch(changeView(view)),
    setFile: (wvFile) => dispatch(setFile(wvFile)),
    setStat: (wvStat) => dispatch(setStat(wvStat))
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(FilePanel);