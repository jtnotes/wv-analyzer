import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

<<<<<<< HEAD
import Store from './store/Store'
import FilePanel from './components/FilePanel'
import App from './App'
=======
import FilePanel from './components/FilePanel'
// import Content from './Content'
>>>>>>> 3daa06869a36ee597a11771459b6d0fcedf88b4a

ReactDOM.render(<Provider store={Store}>
    <App />
</Provider>, document.getElementById('app'));