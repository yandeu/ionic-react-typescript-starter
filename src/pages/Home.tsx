import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel
} from '@ionic/react'
import React from 'react'
import { RouteComponentProps } from 'react-router'

const Home: React.FC<RouteComponentProps> = props => {
  const users = [
    { id: 0, name: 'Fred' },
    { id: 1, name: 'Sabrina' },
    { id: 2, name: 'Vanessa' },
    { id: 3, name: 'Ive' },
    { id: 4, name: 'Martin' },
    { id: 5, name: 'Monika Mila' }
  ]

  const { history } = props

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <p>A simple paragraph.</p>
        <IonList>
          {users.map((user, i) => {
            return (
              <IonItem
                key={i}
                onClick={() => {
                  console.log('onClick')
                  history.push(
                    `/home/${user.name.toLowerCase().replace(/\s/g, '-')}`,
                    user
                  )
                }}
              >
                <IonLabel>{user.name}</IonLabel>
              </IonItem>
            )
          })}
        </IonList>
      </IonContent>
    </IonPage>
  )
}

export default Home
