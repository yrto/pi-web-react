import { useState } from "react";
import "./CitacaoContainer.css";

/*
 * To do:
 * - Mudar cores a cada mudança de texto
 * - Add estilos
 */

const CitacaoContainer = () => {
  //
  let quoteDefault = "Lorem ipsum dolor sit.";
  let newQuote;

  const [quote, setQuote] = useState(`${quoteDefault}`);

  const handleClick = () => {
    setQuote(newQuote);
  };

  const handleChange = (event) => {
    newQuote = event.target.value;
  };

  return (
    <>
      <blockquote>
        <span className="abre-aspas">“</span>
        {quote}
        {/* <span className="fecha-aspas">”</span> */}
      </blockquote>
      <div className="form-input">
        <textarea
          type="text"
          placeholder="Insira uma nova citação"
          onChange={handleChange}
        />
        <button onClick={handleClick}>Inserir citação</button>
      </div>
    </>
  );
};

export default CitacaoContainer;
