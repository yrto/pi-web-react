import React from "react";

const GiphyGIF = ({ url, loading }) => {
  //
  return (
    <div className="giphy-gif">
      {url ? <img src={url} alt="my mood" /> : <p>Carregando...</p>}
    </div>
  );
};

export default GiphyGIF;
