import React from "react";
import PrevisaoCard from "./PrevisaoCard";
//import dadosPrevisao from "./../../data";
import "./PrevisaoCard.css";

class PrevisaoDoTempoContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      dadosPrevisao: [],
    };
  }
  componentDidMount = () => {
    const cidade = "sao paulo";
    const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}`;
    // 1. capturar os dados
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };
  formatarDadosPrevisao = (data) => {
    // 2. formatar dados
    return {
      nome: data.name,
      descricao: data.weather[0].description,
      icone: data.weather[0].main,
    };
  };
  atualizarDadosPrevisao = () => {};
  render = () => {
    return (
      <div>
        {/* {dadosPrevisao.map((previsao, index) => (
          <PrevisaoCard key={index} dadoPrevisao={previsao} />
        ))} */}
      </div>
    );
  };
}

/*

data.weather[0].main -> icone
data.weather[0].description -> descricao
data.main.temp_max
data.main.temp_min
data.name -> nome

&lang=pt
&units=metric

*/

export default PrevisaoDoTempoContainer;
