import { useState, useEffect } from "react";
import CardTempo from "./CardTempo";
import dadosPrevisao from "../../data/dadosPrevisao";

function CardTempoContainer() {
  //
  const [dados, setDados] = useState();

  useEffect(() => {
    setDados(dadosPrevisao);
  });

  return (
    <div>
      {dadosPrevisao.map((item) => (
        <CardTempo key={item.data} dadoPrevisao={item} />
      ))}
    </div>
  );
}

export default CardTempoContainer;
