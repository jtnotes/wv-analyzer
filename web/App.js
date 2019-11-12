import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

import Constants from './Constants'
import FilePanelCTN from './containers/FilePanelCTN'
import Summary from './components/views/Summary'

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var viewElement;

        if (this.props.view == Constants.VIEW_NULL) {
            viewElement = (
                <div>null</div>
            );
        } else if (this.props.view == Constants.VIEW_SUMMARY) {
            viewElement = (
                <Summary />
            );
        }

        return (
            <div>
                <FilePanelCTN />
                {viewElement}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    view: state.view,
    wvStat: state.wvStat
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    changeView: (view) => dispatch(changeView(view))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);