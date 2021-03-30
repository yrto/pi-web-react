import { useState } from "react";

const MiniChat = () => {
  //
  const [msg, setMsg] = useState({ texto: "" });

  const [mensagens, setMensagens] = useState([]);

  const handleChange = (event) => {
    setMsg({ texto: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (msg.texto) setMensagens([...mensagens, msg]);
    setMsg({ texto: "" });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="msg"
          value={msg.texto}
          placeholder="Digite sua mensagem"
          onChange={handleChange}
        />
        <button type="submit">Adicionar mensagem</button>
      </form>
      <hr />
      <div>
        <ul>
          {mensagens.map((item, index) => (
            <li key={index}>{item.texto}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MiniChat;
