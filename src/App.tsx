import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import {
  IonApp,
  IonRouterOutlet,
  IonPage,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { home, apps } from 'ionicons/icons'
import Home from './pages/Home'
import User from './pages/User'
import About from './pages/About'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'

const App: React.FunctionComponent = props => {
  return (
    <IonPage id="main">
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact />
          <Route path="/home/:user" component={User} exact />
          <Route path="/about" component={About} exact />
          <Route path="/" exact render={() => <Redirect to="/home" />} />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="about" href="/about">
            <IonIcon icon={apps} />
            <IonLabel>About</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonPage>
  )
}

export default App
