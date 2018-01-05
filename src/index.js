import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

// const store = configureStore()

const Root = () => (
  // <Provider store={store}>
    <App />
  // </Provider>
)
ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
