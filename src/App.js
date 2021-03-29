import "./App.css";
// import NomeComCPF from "./routes/exercicio-02";
// import CitacaoContainer from "./routes/exercicio-01/CitacaoContainer";
// import SorteieUmNumero from "./routes/exercicio-03";
import QuenteFrio from "./routes/exercicio-04";

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
    <div className="App">
      <QuenteFrio />
    </div>
  );
}

export default App;
