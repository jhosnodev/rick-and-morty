import "./SearchBar.css";
import { useState } from "react";
export default function SearchBar({ onSearch }) {
  const [id, setID] = useState("");
  const [alert, setAlert] = useState(false);

  const handleChange = (e) => {
    setAlert(!/^\d+$/.test(e.target.value));
    setID(e.target.value);
  };
  const searchElement = () => {
    if (id && !alert) onSearch(id);
    setID("");
  };
  const getRandom = ()=>{
    onSearch(Math.floor(Math.random() * 826))
  }
  return (
    <div className="navbar___search-content">
      <div>
        <input
          className={`navbar___search-input ${
            alert ? "navbar___search-input-alert" : ""
          }`}
          type="search"
          placeholder="search ID..."
          value={id}
          onChange={handleChange}
        />
        <button onClick={searchElement} className="navbar___search-search-btn">
          🔍
        </button>
        <button className="navbar___search-random-btn"
        onClick={getRandom}>Random</button>
      </div>
      <span
        className={`navbar___search-alert ${
          alert ? "navbar___search-input-alert-vissible" : ""
        }`}
      >
        Debes colocar solo números
      </span>
    </div>
  );
}
