import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faSnowflake,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";

import "./QuenteFrio.css";

const QuenteFrio = () => {
  //
  const [destaque, setDestaque] = useState();

  const handleClick = () => {};

  return (
    <div id="cards-container">
      <div className="card">
        <div className="quente">
          <h2>Temp</h2>
          <div className="card-icon">
            <FontAwesomeIcon icon={faSun} size="6x" />
          </div>
          <div className="minima-maxima">
            <div>
              <FontAwesomeIcon icon={faArrowUp} className="icon" />
              34°C
            </div>
            <div>
              <FontAwesomeIcon icon={faArrowDown} className="icon" />
              29°C
            </div>
          </div>
        </div>
        <button className="destacar" onClick={handleClick}>
          Destacar
        </button>
      </div>
      <div className="card">
        <div className="quente">
          <h2>Temp</h2>
          <div className="card-icon">
            <FontAwesomeIcon icon={faSnowflake} size="6x" />
          </div>
          <div className="minima-maxima">
            <div>
              <FontAwesomeIcon icon={faArrowUp} className="icon" />
              12°C
            </div>
            <div>
              <FontAwesomeIcon icon={faArrowDown} className="icon" />
              2°C
            </div>
          </div>
        </div>
        <button className="destacar" onClick={handleClick}>
          Destacar
        </button>
      </div>
    </div>
  );
};

export default QuenteFrio;
