import React from "react";
// import React, { useState, useEffect } from "react";

const GiphyGIF = (props) => {
  //
  const gifInfo = {
    url: props.url,
  };

  return (
    <div className="giphy-gif">
      <img src={gifInfo.url} alt="" />
    </div>
  );
};

export default GiphyGIF;
