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
  const getRandom = () => {
    onSearch(Math.floor(Math.random() * 826));
  };
  return (
    <div className="navbar___right-content">
      <div className="navbar___search-content navbar___links">
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
          <button
            onClick={searchElement}
            className="navbar___search-search-btn"
          >
            <svg
              fill="#c8df6a"
              width="1rem"
              height="1rem"
              viewBox="0 0 1920 1920"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1458.948 1305.626c104.637-136.95 167.527-307.187 167.527-492.388C1626.475 364.764 1261.711 0 813.238 0 364.764 0 0 364.764 0 813.238c0 448.473 364.764 813.237 813.238 813.237 185.201 0 355.547-62.89 492.496-167.527L1766.678 1920 1920 1766.678l-461.052-461.052Zm-645.71 103.986c-328.874 0-596.375-267.61-596.375-596.374 0-328.765 267.501-596.375 596.375-596.375 328.873 0 596.374 267.61 596.374 596.375s-267.501 596.374-596.374 596.374Z"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <span
          className={`navbar___search-alert ${
            alert ? "navbar___search-input-alert-vissible" : ""
          }`}
        >
          Debes colocar solo números
        </span>
      </div>

      <button
        className="navbar___search-random-btn navbar___links"
        onClick={getRandom}
      >
        <svg
          fill="#c8df6a"
          width="1.2rem"
          height="1.2rem"
          viewBox="0 0 256 256"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M80 123.996A4.002 4.002 0 0 1 75.996 128H52.004A4.002 4.002 0 0 1 48 123.996v-23.992A4.002 4.002 0 0 1 52.004 96h23.992A4.002 4.002 0 0 1 80 100.004v23.992zm32 80a4.002 4.002 0 0 1-4.004 4.004H84.004A4.002 4.002 0 0 1 80 203.996v-23.992A4.002 4.002 0 0 1 84.004 176h23.992a4.002 4.002 0 0 1 4.004 4.004v23.992zm96-64a4.002 4.002 0 0 1-4.004 4.004h-23.992a4.002 4.002 0 0 1-4.004-4.004v-23.992a4.002 4.002 0 0 1 4.004-4.004h23.992a4.002 4.002 0 0 1 4.004 4.004v23.992zm-96 16a4.002 4.002 0 0 0 4.004 4.004h23.992a4.002 4.002 0 0 0 4.004-4.004v-23.992a4.002 4.002 0 0 0-4.004-4.004h-23.992a4.002 4.002 0 0 0-4.004 4.004v23.992zm32-80A4.002 4.002 0 0 0 148.004 80h23.992A4.002 4.002 0 0 0 176 75.996V52.004A4.002 4.002 0 0 0 171.996 48h-23.992A4.002 4.002 0 0 0 144 52.004v23.992z"
            fillRule="evenodd"
          />
        </svg>{" "}
        Random
      </button>
      
    </div>
  );
}
