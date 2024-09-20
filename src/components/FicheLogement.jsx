// import React from "react";
// import { useParams } from "react-router-dom";
// import logements from "./logements.json"; // Assure-toi que le chemin est correct
// import Gallery from "./Gallery"; // Utilisation de la galerie d'images

// const FicheLogement = () => {
//     const { id } = useParams(); // Récupérer l'id du logement depuis l'URL
//     const logement = logements.find((logement) => logement.id === id); // Trouver le logement correspondant

//     if (!logement) {
//       return <div>Logement non trouvé</div>; // Gérer le cas où l'ID est invalide
//     }

//     // Diviser le nom de l'hôte par espace
//     const hostName = logement.host.name.split(" ");

//     return (
//       <div className="fiche-logement">
//         {/* Affichage de la galerie avec les images du logement */}
//         <Gallery pictures={logement.pictures} />
//         <div className="logement_infos">
//           <div className="appart_info">
//             <h1 className="logement_title">{logement.title}</h1>
//             <p className="logement_location">{logement.location}</p>
//           </div>

//           <div className="host-info">
//             {/* Affichage du nom de l'hôte sur deux lignes */}
//             <p className="host-name">
//               {hostName[0]} <br /> {hostName[1]}
//             </p>
//             <img src={logement.host.picture} alt={logement.host.name} className="host-picture"/>
//           </div>
//         </div>

//         <div className="logement-description">
//           <p>Description :{logement.description}</p>
//         </div>
//         <div className="logement-equipement">
//         <h3>Équipements :</h3>
//           <ul>
//             {logement.equipments.map((equipment, index) => (
//               <li key={index}>{equipment}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     );
//   };

//   export default FicheLogement;

import React from "react";
import { useParams } from "react-router-dom";
import logements from "./logements.json";
import Gallery from "./Gallery";
import Collapse from "./Collapse"; // Importer le composant Collapse

const FicheLogement = () => {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  const hostName = logement.host.name.split(" ");

  return (
    <div className="fiche-logement">
      <Gallery pictures={logement.pictures} />
      <div className="logement_infos">
        <div className="appart_info">
          <h1 className="logement_title">{logement.title}</h1>
          <p className="logement_location">{logement.location}</p>
        </div>

        <div className="host-info">
          <p className="host-name">
            {hostName[0]} <br /> {hostName[1]}
          </p>
          <img
            src={logement.host.picture}
            alt={logement.host.name}
            className="host-picture"
          />
        </div>
      </div>

      {/* <div className="hastag">
      {logement.tags}
      </div> */}

      {/* Div des hashtags */}
      <div className="hashtags">
        {logement.tags.map((tag, index) => (
          <span key={index} className="hashtag">
            {tag}
          </span>
        ))}
      </div>

      <div className="collapse_info">
        {/* Utiliser Collapse pour la description */}
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>

        {/* Utiliser Collapse pour les équipements */}
        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
};

export default FicheLogement;
