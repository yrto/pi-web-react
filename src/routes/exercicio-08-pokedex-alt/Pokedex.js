import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import "./Pokedex.css";

const Pokedex = () => {
  //
  const PKM_NUMBER = "3";

  const pokeApiUrl = `https://pokeapi.co/api/v2/pokemon?limit=${PKM_NUMBER}`;

  const [pokeList, setPokeList] = useState([]);

  useEffect(() => {
    const fetchPokedex = async () => {
      const result = await fetch(pokeApiUrl);
      const pokemons = await result.json();
      setPokeList(pokemons.results);
    };
    fetchPokedex();
  }, [pokeApiUrl]);

  // main app

  return (
    <div>
      {pokeList.map((pokemon) => (
        <PokemonCard key={pokemon.name} url={pokemon.url} />
      ))}
    </div>
  );
};

export default Pokedex;
