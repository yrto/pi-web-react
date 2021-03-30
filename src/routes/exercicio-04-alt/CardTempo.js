import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faSnowflake,
  faArrowUp,
  faArrowDown,
  faCloud,
  faCloudShowersHeavy,
} from "@fortawesome/free-solid-svg-icons";

import "./CardTempo.css";

function CardTempo(props) {
  //
  const [destaque, setDestaque] = useState(false);

  const { data, icone, temperatura } = props.dadoPrevisao;

  const handleClick = () => setDestaque(!destaque);

  return (
    <>
      <div className={`card ${destaque === true ? "ativo" : ""}`}>
        <h3>{data}</h3>
        <FontAwesomeIcon icon={icone} size="3x" />
        <div>
          <FontAwesomeIcon icon={faArrowUp} />
          <span>{temperatura.max}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faArrowDown} />
          <span>{temperatura.min}</span>
        </div>
      </div>
      <button onClick={handleClick}>Destacar card</button>
    </>
  );
}

export default CardTempo;
