import "./Card.css";
import { NavLink } from "react-router-dom";
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
          <button onClick={getIDToClose}>X</button>
        </div>
        <div className="card___info-body">
          <NavLink to={`detail/${id}`}>
            <h2>{name}</h2>
          </NavLink>
          <NavLink to={`detail/${id}`} className={"navbar___search-random-btn"}>
            See more
          </NavLink>
        </div>
      </div>
      <img src={image} alt="" />
      <h2>{name}</h2>
    </div>
  );
}
