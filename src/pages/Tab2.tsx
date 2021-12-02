import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import ProfileCard from '../components/profileCard'

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen>
      <div>
      <div className="body-container">
        <div className="header">
          <p>Encontre o seu fotógrafo favorito</p>
          {/* <div className="search-icon"></div> */}
          <div className="location">
            <span>Onde você está?</span>
            <div className="location-icon"></div>
          </div>
          <div className="card-photogr">
            <div>
              <div className="photo-photogr"></div>
            </div>
            <div>
              <p>Nome fotógrafo</p>
              <div className="evaluations"></div>
              <button className="toProfile" onClick={ProfileCard}> Ver Perfil</button>
            </div>
          </div>
        </div>
      </div>
    </div>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
    
  );
};

export default Tab2;
