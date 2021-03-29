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
  const [tempInfo, setTempInfo] = useState({
    destaque: null,
    cardsInfo: [
      {
        id: "quente",
        data: "26/03",
        icon: <FontAwesomeIcon icon={faSun} size="6x" />,
        max: "34°C",
        min: "29°C",
      },
      {
        id: "frio",
        data: "27/03",
        icon: <FontAwesomeIcon icon={faSnowflake} size="6x" />,
        max: "12°C",
        min: "2°C",
      },
    ],
  });

  const handleStyles = (id) =>
    tempInfo.destaque === id ? "card destaque" : "card sem-destaque";

  const handleClick = (id) => {
    setTempInfo({
      ...tempInfo,
      destaque: id,
    });
  };

  return (
    <ul className="temp-cards">
      {tempInfo.cardsInfo.map((element) => (
        <li key={element.id}>
          <div
            className={handleStyles(element.id)}
            onClick={() => {
              handleClick(element.id);
            }}
          >
            <h2>{element.data}</h2>
            <div className="main-icon">{element.icon}</div>
            <div className="minima-maxima">
              <div>
                <FontAwesomeIcon icon={faArrowUp} className="icon" />
                {element.max}
              </div>
              <div>
                <FontAwesomeIcon icon={faArrowDown} className="icon" />
                {element.min}
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              handleClick(element.id);
            }}
          >
            Destacar
          </button>
        </li>
      ))}
    </ul>
  );
};

export default QuenteFrio;
