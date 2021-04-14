import React, { useState, useEffect } from "react";

const PokemonCard = (props) => {
  //
  const [pokemonInfo, setPokemonInfo] = useState({ types: [] });

  useEffect(() => {
    const fetchPokemonInfo = async () => {
      const response = await fetch(props.url);
      const pokemonJson = await response.json();
      setPokemonInfo(pokemonJson);
    };
    fetchPokemonInfo();
  }, [props.url]);

  return (
    <div className="pokemon-card">
      <div>
        <p>{pokemonInfo.id}</p>
        <h3>{pokemonInfo.name}</h3>
        <ul>
          {pokemonInfo.types.map((element) => (
            <li key={element.type.name}>{element.type.name}</li>
          ))}
        </ul>
      </div>
      <img
        src={`https://pokeres.bastionbot.org/images/pokemon/${pokemonInfo.id}.png`}
        alt={pokemonInfo.name}
      />
    </div>
  );
};

export default PokemonCard;
