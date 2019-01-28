import React from 'react'
import { IonButton, IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonInput, IonApp } from '@ionic/react'

const App = () => {
  return (
    <IonApp>
      <IonButton>IonButton</IonButton>

      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>IonCardSubtitle</IonCardSubtitle>
          <IonCardTitle>IonCardTitle</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>IonCardContent</IonCardContent>
      </IonCard>

      <IonItem>
        <IonLabel position="floating">Floating Label</IonLabel>
        <IonInput />
      </IonItem>
    </IonApp>
  )
}

export default App
