import "./Card.css";
export default function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
}) {
  const getIDToClose = () => {
    onClose(id);
  };
  return (
    <div className="card">
      {" "}
      <div className="card___info-content">
        <div className="card___info-header">
          <p>{id}</p>
          <h2>{name}</h2>
          <button onClick={getIDToClose}>X</button>
        </div>
        <p>{status}</p>
        <p>{species}</p>
        <p>{gender}</p>
        <p>{origin}</p>
      </div>
      <img src={image} alt="" />
      <h2>{name}</h2>
    </div>
  );
}
