import React from "react";
import Card from "./Card";

import './card.scss'

const CardList = ({ logements }) => {
  return (
    <div className="container_cards">
      {logements.map((logement) => (
        <Card
          key={logement.id}
          id={logement.id}
          title={logement.title}
          cover={logement.cover}
        />
      ))}
    </div>
  );
};

export default CardList;
