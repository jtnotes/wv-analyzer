import React from "react"
import ReactDOM from "react-dom"
import Constants from '../Constants'

class FilePanel extends React.Component {
    constructor(props) {
        super(props);
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
                            <div class="file has-name">
                                <label class="file-label">
                                    <input class="file-input" type="file" name="resume" />
                                    <span class="file-cta">
                                        <span class="file-icon">
                                            <i class="fas fa-upload"></i>
                                        </span>
                                        <span class="file-label">                                                        Choose a file�     </span>
                                    </span>
                                    <span class="file-name">                                                    Screen Shot 2017-07-29 at 15.54.25.png    </span>
                                </label>
                            </div>
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
