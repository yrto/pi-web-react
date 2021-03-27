import { useState } from "react";
import "./NomeComCPF.css";

/*
 * To do:
 * - Add dropdown de gênero (masc, dem, outro)
 * - Modificar "portador(a)" pelo gênero
 * - Add uma data na frase
 * - Validar campos (não aceitar texto no CPF e não aceitar campos vazios)
 */

const NomeComCPF = () => {
  //
  const [pessoaAtual, setPessoaAtual] = useState({
    nome: "",
    cpf: "",
  });

  const [pessoa, setPessoa] = useState({
    nome: "",
    cpf: "",
  });

  const handleChange = (event) => {
    const propriedade = event.target.name;
    setPessoaAtual({
      ...pessoaAtual,
      [propriedade]: event.target.value,
    });
  };

  const handleClick = () => setPessoa(pessoaAtual);

  return (
    <div className="nome-com-cpf">
      <div className="campo">
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          name="nome"
          placeholder="Seu nome"
          onChange={handleChange}
        ></input>
      </div>
      <div className="campo">
        <label htmlFor="cpf">CPF:</label>
        <input
          type="text"
          name="cpf"
          placeholder="Seu CPF"
          onChange={handleChange}
        ></input>
      </div>
      <button onClick={handleClick}>Gerar frase</button>
      <hr />
      <p>
        Eu, <strong>{pessoa.nome}</strong>,<br /> portador(a) do CPF{" "}
        <strong>{pessoa.cpf}</strong>,<br /> aceito os termos deste contrato.
      </p>
    </div>
  );
};

export default NomeComCPF;
