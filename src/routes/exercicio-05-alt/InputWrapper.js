import React from "react";

class InputWrapper extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }
  handleKeyDown = (event) => {
    if (event.key === "enter") {
      this.props.onSubmit();
    }
  };
  render() {
    const { msg, onChange, onSubmit } = this.props;
    return (
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="msg"
          value={msg.texto}
          placeholder="Digite sua mensagem"
          onChange={onChange}
          onKeyDown={this.handleKeyDown}
        />
        <button type="submit">Adicionar mensagem</button>
      </form>
    );
  }
}

export default InputWrapper;
