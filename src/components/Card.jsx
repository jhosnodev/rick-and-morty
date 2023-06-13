import './Card.css'
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
  return (
    <div className="card">
      {" "}
      <button onClick={onClose}>X</button>
      <div className='card___info-content'>
      <p>{id}</p>
      <h2>{name}</h2>
      <p>{status}</p>
      <p>{species}</p>
      <p>{gender}</p>
      <personalbar>{origin}</personalbar>
      </div>
   
      <img src={image} alt="" />
    </div>
  );
}
