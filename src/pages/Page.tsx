import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Policy } from '../components/Functions';
import './Page.css';

const jarr = [
  {name: "Policy",   title: "Политика конфиденциальности",     JSX: function():  JSX.Element { return <Policy />}},

]

const Page: React.FC = () => {

  const [title, setTitle] = useState("Главная")

  const { name } = useParams<{ name: string; }>();

  useEffect(()=>{
    var commentIndex = jarr.findIndex(function(b) { 
        return b.name === name; 
    });
    if(commentIndex >= 0){
      setTitle(jarr[commentIndex].title)  
    }
  }, [name])


  function Content(props:{info}):JSX.Element {

    var commentIndex = jarr.findIndex(function(b) { 
        return b.name === props.info; 
    });
    if(commentIndex >= 0){
      return jarr[commentIndex].JSX()
    }
    return <></>
  }

  return (
    <IonPage onLoad={(e)=>{
    }}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{ title }</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent onLoad={(e)=>{
      }}>
        <Content info={ name } />
      </IonContent>
    </IonPage>
  );
};

export default Page;
