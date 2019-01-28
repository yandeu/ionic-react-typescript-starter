import React from 'react'
import ReactDOM from 'react-dom'
import { registerIonic } from '@ionic/react'
import App from './App'

registerIonic()

ReactDOM.render(<App />, document.getElementById('root'))
