import React from "react";
import "./App.css";

// import NomeComCPF from "./routes/exercicio-02";
// import CitacaoContainer from "./routes/exercicio-01/CitacaoContainer";
// import SorteieUmNumero from "./routes/exercicio-03";
// import QuenteFrio from "./routes/exercicio-04";
// import CardTempoContainer from "./routes/exercicio-04-alt";
// import MiniChat from "./routes/exercicio-05";
// import MiniChat from "./routes/exercicio-05-alt";
import TodoListContainer from "./routes/exercicio-06";
// import PrevisaoDoTempoContainer from "./routes/exercicio-07";
// import Pokedex from "./routes/exercicio-08-pokedex";
// import Pokedex from "./routes/exercicio-08-pokedex-alt";
// import GiphyMoodContainer from "./routes/exercicio-09-giphy";
// import WeatherContainer from "./routes/exercicio-10-weather/WeatherContainer";

/*
 * Componentes:
 * - Nome deve começar com letra maiúscula
 * - Ser função ou classe
 * - Retorna um único elemento JSX (JavaScript XML)
 * - (opcional) Ele pode receber props, que é um objeto com propriedades
 *              props: são públicas e imutáveis
 * - (opcional) Ele pode ter estados (ou states)
 *              states: são privadas e mutáveis após a primeira renderização
 */

function App() {
  return (
    <div className="app">
      <TodoListContainer />
    </div>
  );
}

export default App;
