import React from "react";

class MensagensWrapper extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }
  render() {
    return (
      <div className="caixa-mensagens">
        <ul>
          {this.props.mensagens.map((item, index) => (
            <li key={index}>{item.texto}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MensagensWrapper;
