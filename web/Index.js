import React from 'react'
import ReactDOM from 'react-dom'

import FilePanel from './component/FilePanel'
// import Content from './Content'

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <FilePanel />
                
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));