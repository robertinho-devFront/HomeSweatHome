
import { Link } from 'react-router-dom';
import useLogements from "../hooks/useLogements";
import Welcome from '../components/Welcome/Welcome'; 

import '../components/Card/card.scss';



 

const Card = ({ title, cover, id }) => {
  return (
    <Link to={`/logement/${id}`} className="card">
      <img src={cover} alt={title} className="card_image" />
      <h3>{title}</h3>
    </Link>
  );
};

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

export const Home = () => {
  const logements = useLogements();

  return (
    <section>
      <Welcome /> 
      <CardList logements={logements} />
    </section>
  );
};

export default Home;

