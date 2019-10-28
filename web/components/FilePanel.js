import React from "react";
import ReactDOM from "react-dom";

class FilePanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                    </a>

                    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                        <div class="navbar-item">
                            <div class="buttons">
                                <div class="file has-name">
                                    <label class="file-label">
                                        <input class="file-input" type="file" name="resume" />
                                        <span class="file-cta">
                                            <span class="file-icon">
                                                <i class="fas fa-upload"></i>
                                            </span>
                                            <span class="file-label">                                                        Choose a file…      </span>
                                        </span>
                                        <span class="file-name">                                                    Screen Shot 2017-07-29 at 15.54.25.png    </span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <a class="navbar-item">Documentation</a>

                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">More</a>

                            <div class="navbar-dropdown">
                                <a class="navbar-item">About</a>
                                <a class="navbar-item">Jobs</a>
                                <a class="navbar-item">Contact</a>
                                <hr class="navbar-divider" />
                                <a class="navbar-item">Report an issue</a>
                            </div>
                        </div>
                    </div>

                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="buttons">
                                <a class="button is-primary">
                                    <strong>Sign up</strong>
                                </a>
                                <a class="button is-light">Log in</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default FilePanel;
