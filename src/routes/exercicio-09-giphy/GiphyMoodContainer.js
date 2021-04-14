import React, { useState, useEffect } from "react";
import GiphyGIF from "./GiphyGIF";
import "./GiphyMood.css";

const GiphyMoodContainer = () => {
  //
  const limit = 20;
  const apiKey = process.env.REACT_APP_GIPHY_API_KEY;

  const [randomNumber, setRandomNumber] = useState(0);
  const getRandomNumber = (limit) => Math.floor(Math.random() * limit);

  const [searchText, setSearchText] = useState("");

  const ghipyEndpoints = {
    trending: `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=${limit}`,
    search: `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=${limit}&q=${searchText}`,
  };
  const [giphyEndpointUrl, setGiphyEndpointUrl] = useState(
    ghipyEndpoints.trending
  );
  const [gifUrl, setGifUrl] = useState("");

  useEffect(() => {
    const url = giphyEndpointUrl;
    const fetchGiphyGIFs = async () => {
      const result = await fetch(url);
      const giphyList = await result.json();
      setGifUrl(giphyList.data[randomNumber].images.original.url);
    };
    fetchGiphyGIFs();
  }, [giphyEndpointUrl, randomNumber]);

  //

  const submitForm = (event) => {
    event.preventDefault();
    changeRandomNumber();
    searchText
      ? setGiphyEndpointUrl(ghipyEndpoints.search)
      : setGiphyEndpointUrl(ghipyEndpoints.trending);
  };

  const changeRandomNumber = () => {
    setRandomNumber(getRandomNumber(limit));
  };

  const updateSearchText = (event) => {
    setSearchText(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "enter") updateSearchText();
  };

  return (
    <div>
      <h2 className="rainbow_text_animated">Seu humor hoje</h2>
      <p>
        {randomNumber + 1}/{limit}
      </p>
      <GiphyGIF url={gifUrl} />
      <form onSubmit={submitForm}>
        <input
          type="text"
          value={searchText}
          placeholder="Digite seu humor..."
          onChange={updateSearchText}
          onKeyDown={handleKeyDown}
          autoComplete="off"
        />
        <button type="submit" className="btn">
          Gerar novo humor
        </button>
      </form>
    </div>
  );
};

export default GiphyMoodContainer;
