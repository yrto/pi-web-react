import React, { useState, useEffect } from "react";
import GiphyGIF from "./GiphyGIF";
import GiphyMoodForm from "./GiphyMoodForm";
import "./GiphyMood.css";
import { generateRandomNumber } from "./../../utils";

const GiphyMoodContainer = () => {
  //
  // consts

  const limit = 20;
  const apiKey = process.env.REACT_APP_GIPHY_API_KEY;

  const [searchText, setSearchText] = useState("");

  const apiEndpoints = {
    trending: `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=${limit}`,
    search: `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=${limit}&q=${searchText}`,
  };

  // manage search text

  const [endpointUrl, setEndpointUrl] = useState(apiEndpoints.trending);
  const [randomNumber, setRandomNumber] = useState(0);
  const [gifUrl, setGifUrl] = useState("");
  const [gifList, setGifList] = useState();

  useEffect(() => {
    const newRandomNumber = generateRandomNumber(limit);
    setRandomNumber(newRandomNumber);
    const fetchGiphyGIFs = async () => {
      const result = await fetch(endpointUrl);
      const gifListNew = await result.json();
      setGifList(gifListNew.data);
      setGifUrl(gifListNew.data[newRandomNumber].images.fixed_height.url);
    };
    fetchGiphyGIFs();
  }, [endpointUrl]);

  const updateSearchText = (event) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let newRandom = generateRandomNumber(limit);
    while (newRandom === randomNumber) newRandom = generateRandomNumber(limit);
    setRandomNumber(newRandom);
    setGifUrl(gifList[randomNumber].images.fixed_height.url);
    searchText
      ? setEndpointUrl(apiEndpoints.search)
      : setEndpointUrl(apiEndpoints.trending);
  };

  return (
    <div>
      <h2 className="rainbow_text_animated">Seu humor hoje</h2>
      {/* <p>
        {randomNumber + 1}/{limit}
      </p> */}
      <GiphyGIF url={gifUrl} />
      <GiphyMoodForm
        value={searchText}
        onChange={updateSearchText}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default GiphyMoodContainer;
