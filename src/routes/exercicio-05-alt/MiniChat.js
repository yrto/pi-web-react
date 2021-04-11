import React from "react";
import MensagensWrapper from "./MensagensWrapper";
import InputWrapper from "./InputWrapper";

class MiniChat extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: { texto: "" },
      mensagens: [],
    };
  }
  handleChange = (event) => {
    this.setState(() => ({ msg: { texto: event.target.value } }));
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.msg.texto)
      this.setState((prevState) => ({
        mensagens: [...prevState.mensagens, this.state.msg],
      }));
    this.setState(() => ({ msg: { texto: "" } }));
  };
  render() {
    return (
      <>
        <InputWrapper
          msg={this.state.msg}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <hr />
        <MensagensWrapper mensagens={this.state.mensagens} />
      </>
    );
  }
}

export default MiniChat;
