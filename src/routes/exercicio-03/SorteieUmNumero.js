import { useState } from "react";
import "./SorteieUmNumero.css";

const SorteieUmNumero = () => {
  //
  const [minMax, setMinMax] = useState({
    min: 0,
    max: 10,
  });

  const [numero, setNumero] = useState(0);

  const handleChange = (event) => {
    const n = event.target.name;
    setMinMax({
      ...minMax,
      [n]: parseInt(event.target.value),
    });
  };

  const gerarAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const handleClick = () => {
    setNumero(gerarAleatorio(minMax.min, minMax.max));
    console.log(minMax);
  };

  return (
    <div>
      <h2>Sorteie um número</h2>
      <div>
        <label htmlFor="min">Entre </label>
        <input
          type="number"
          name="min"
          defaultValue={minMax.min}
          onChange={handleChange}
        />{" "}
        <label htmlFor="max">e </label>
        <input
          type="number"
          name="max"
          defaultValue={minMax.max}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleClick}>Gerar sorte</button>
      <hr />
      <p>O número sorteado é:</p>
      <h2>{numero}</h2>
    </div>
  );
};

export default SorteieUmNumero;
