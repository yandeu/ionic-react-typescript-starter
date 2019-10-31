import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { IonApp } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'

ReactDOM.render(
  <IonReactRouter>
    <IonApp>
      <App />
    </IonApp>
  </IonReactRouter>,
  document.getElementById('root')
)
