import React from "react"
import ReactDOM from "react-dom"
import axios from 'axios'

import Constants from '../Constants'

class FilePanel extends React.Component {
    constructor(props) {
        super(props);
    }

    load = () => {
        axios.post(`http://localhost:5000/setWVFile`, {
            file: this.props.wvFile,
            type: this.props.wvType
        }).then(res => {
            console.log(res.data);
            this.props.setStat(res.data);
            // this.setState({
            //     wvLoaded: true,
            //     wvStat: res.data
            // });
        });
    }

    setFile = (e) => {
        this.props.setFile(e.target.value);
    }

    toOverview = () => {
        this.props.changeView(Constants.VIEW_SUMMARY);
    }

    render() {
        return (
            <nav className="navbar wa-navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src="design/retro-futuristic-landscape-universe-background/2616071.svg" width="28" height="28" />
                    </a>

                    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                        <a className="navbar-item" onClick={this.toOverview}>Overview</a>
                        <div class="buttons">
                            <div class="control">
                                <input className="input is-primary wa-fp-filename" type="text" placeholder="Primary input" onChange={this.setFile} defaultValue="/home/JinReal/prog/nlpworkspace/wv-tour/" />
                            </div>
                            <a className="button" onClick={this.load}>load</a>
                        </div>
                    </div>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">More</a>

                        <div className="navbar-dropdown">
                            <a className="navbar-item">About</a>
                            <a className="navbar-item">Jobs</a>
                            <a className="navbar-item">Contact</a>
                            <hr className="navbar-divider" />
                            <a className="navbar-item">Report an issue</a>
                        </div>
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-primary">
                                <strong>Sign up</strong>
                            </a>
                            <a className="button is-light">Log in</a>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default FilePanel;
