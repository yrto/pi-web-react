const InputWrapper = (props) => {
  //
  const { msg, onChange, onSubmit } = props;

  // useEffect(() => {
  //   const body = document.querySelector("body");
  //   body.addEventListener("keydown", (event) => {
  //     if (event.key === "enter") {
  //       onSubmit();
  //     }
  //   });
  // });

  const handleKeyDown = (event) => {
    if (event.key === "enter") {
      onSubmit();
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="msg"
        value={msg.texto}
        placeholder="Digite sua mensagem"
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
      <button type="submit">Adicionar mensagem</button>
    </form>
  );
};

export default InputWrapper;
