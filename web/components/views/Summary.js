import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

class Summary extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ul>
                    <li>dim: {this.props.wvStat.dim}</li>
                    <li>voc: {this.props.wvStat.voc}</li>
                    <li></li>
                </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(Summary);