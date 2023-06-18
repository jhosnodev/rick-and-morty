import Card from "../Card/Card";
import "./Cards.css";

export default function Cards({ characters, onClose }) {
  return (
    <div className="cards">
      {characters.map((character) => (
        <Card
          id={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin.name}
          image={character.image}
          key={character.id}
          onClose={onClose}
        />
      ))}
    </div>
  );
}
