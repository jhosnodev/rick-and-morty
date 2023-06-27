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
    <article className="card">
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
            <svg
              fill="#c8df6a"
              width="1rem"
              height="1rem"
              viewBox="0 0 32 32"
              enable-background="new 0 0 32 32"
              id="Glyph"
              version="1.1"
            >
              <path
                d="M29.946,15.675C27.954,9.888,22.35,6,16,6S4.046,9.888,2.054,15.675c-0.072,0.21-0.072,0.44,0,0.65  C4.046,22.112,9.65,26,16,26s11.954-3.888,13.946-9.675C30.018,16.115,30.018,15.885,29.946,15.675z M16,22c-3.309,0-6-2.691-6-6  s2.691-6,6-6s6,2.691,6,6S19.309,22,16,22z"
                id="XMLID_320_"
              />
            </svg>
            See more
          </NavLink>
        </div>
      </div>
      <img src={image} alt="" />
      <h2>{name}</h2>
    </article>
  );
}
