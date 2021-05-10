import React from "react";

const GiphyMoodForm = (props) => {
  //
  const { value, onChange, onSubmit } = props;

  const handleKeyDown = (event) => {
    if (event.key === "enter") onSubmit();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={value}
        placeholder="Digite seu humor..."
        onChange={onChange}
        onKeyDown={handleKeyDown}
        autoComplete="off"
      />
      <button type="submit" className="btn">
        Gerar novo humor
      </button>
    </form>
  );
};

export default GiphyMoodForm;
