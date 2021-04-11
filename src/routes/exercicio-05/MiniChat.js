import { useState } from "react";
import MensagensWrapper from "./MensagensWrapper";
import InputWrapper from "./InputWrapper";

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
      <InputWrapper msg={msg} onChange={handleChange} onSubmit={handleSubmit} />
      <hr />
      <MensagensWrapper mensagens={mensagens} />
    </>
  );
};

export default MiniChat;
