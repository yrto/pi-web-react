import React, { useState, useEffect } from "react";
import "./Pokedex.css";

const Pokedex = () => {
  //
  // consts
  //

  const maxPokemonNumber = 893;

  // pokemon list

  const getPokemonFromLocalStorage = () =>
    JSON.parse(localStorage.getItem("pokemon-list")) || {
      string: "",
      number: [],
    };

  const [pokemonList, setPokemonList] = useState(getPokemonFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("pokemon-list", JSON.stringify(pokemonList));
  });

  const updatePokemonListString = (event) => {
    setPokemonList({
      ...pokemonList,
      string: event.target.value,
    });
  };

  //
  // pokemon data (objects)
  //

  const [pokemonData, setPokemonData] = useState([]);

  const updatePokemonData = (data) => {
    setPokemonData((prevData) => {
      return [...prevData, data];
    });
  };

  useEffect(() => {
    pokemonList.number.forEach((id) => {
      const pokeData = `https://pokeapi.co/api/v2/pokemon/${id}`;
      const pokeImage = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
      fetch(pokeData)
        .then((response) => response.json())
        .then((data) => {
          const singlePokemonData = formatPokemonInfo(data, pokeImage);
          updatePokemonData(singlePokemonData);
        });
    });
  }, [pokemonList.number]);

  //
  // help
  //

  const isValidPokemonArray = (array) => {
    if (array.some((item) => isNaN(item))) {
      alert(`Apenas números, ok? 😉`);
      return false;
    }
    if (array.some((item) => item > maxPokemonNumber || item < 1)) {
      alert(`Existem apenas, ${maxPokemonNumber} sabia? 😉`);
      return false;
    }
    return true;
  };

  const splitToUniqueArray = (string, char) => {
    let array = string.replace(/\s+/g, "").split(char);
    array = array.map((item) => parseInt(item));
    array = [...new Set(array)];
    return array;
  };

  const formatPokemonInfo = (data, image) => {
    const { id, name, types } = data;
    return {
      id: id,
      name: name.charAt(0).toUpperCase() + name.slice(1),
      types: types.reduce(
        (acc, type) => [
          ...acc,
          type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1),
        ],
        []
      ),
      image: image,
    };
  };

  //
  // submit actions
  //

  const updatePokemonList = (event) => {
    event.preventDefault();
    setPokemonList(pokemonList.string.trim());
    if (!pokemonList.string) return alert("Sem números? 🤔");
    const pokemonNumberArrayTemp = splitToUniqueArray(pokemonList.string, ",");
    if (!isValidPokemonArray(pokemonNumberArrayTemp)) return;
    setPokemonData([]);
    setPokemonList({
      string: pokemonNumberArrayTemp.join(", "),
      number: pokemonNumberArrayTemp,
    });
  };

  const handleKeyDown = (event) => {
    if (event.key === "enter") updatePokemonList();
  };

  //
  // main app
  //

  return (
    <div id="pokedex-container">
      <form onSubmit={updatePokemonList}>
        <input
          type="text"
          name="selected-pokemon"
          value={pokemonList.string}
          onChange={updatePokemonListString}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          autoFocus
        />
        <button type="submit">Catch 'em!</button>
      </form>
      <ul className="pokemon-card-list">
        {pokemonData.map((pokemon) => (
          <li key={pokemon.id} className="pokemon-card">
            <div className="pokemon-card-info">
              <p className="poke-id">ID: {pokemon.id}</p>
              <h3 className="poke-name">{pokemon.name}</h3>
              <ul className="poke-types">
                {pokemon.types.map((type) => (
                  <li key={type}>{type}</li>
                ))}
              </ul>
            </div>
            <img
              src={pokemon.image}
              alt={pokemon.name}
              className="pokemon-card-image"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pokedex;
