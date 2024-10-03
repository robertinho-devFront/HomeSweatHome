import React from "react";
import { useParams } from "react-router-dom";
import useLogements from "../hooks/useLogements"; 

import Gallery from '../components/Gallery/Gallery';
import Collapse from '../components/Collapse/Collapse';

const HostInfo = ({ host }) => {
  const hostName = host.name.split(" ");
  
  return (
    <div className="host-info">
      <p className="host-name">
        {hostName[0]} <br /> {hostName[1]}
      </p>
      <img
        src={host.picture}
        alt={host.name}
        className="host-picture"
      />
    </div>
  );
};

const Hashtags = ({ tags }) => {
  return (
    <div className="hashtags">
      {tags.map((tag, index) => (
        <span key={index} className="hashtag">
          {tag}
        </span>
      ))}
    </div>
  );
};

const FicheLogement = () => {
  const { id } = useParams(); 
  const logements = useLogements(); 
  const logement = logements.find((logement) => logement.id === id); 

  if (!logement) {
    return <div>Logement non trouvé</div>; 
  }

  return (
    <section className="fiche-logement">
      <Gallery pictures={logement.pictures} />
      
      <div className="logement_infos">
        <div className="appart_info">
          <h1 className="logement_title">{logement.title}</h1>
          <p className="logement_location">{logement.location}</p>
        </div>
        
        <HostInfo host={logement.host} />
      </div>

      <Hashtags tags={logement.tags} />

      <div className="collapse_info">
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>

        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </section>
  );
};

export default FicheLogement;
