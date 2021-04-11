const MensagensWrapper = (props) => {
  return (
    <div className="caixa-mensagens">
      <ul>
        {props.mensagens.map((item, index) => (
          <li key={index}>{item.texto}</li>
        ))}
      </ul>
    </div>
  );
};

export default MensagensWrapper;
