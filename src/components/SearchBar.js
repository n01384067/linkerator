import React, { useState } from "react";

import { getLinks } from "../../api";

const SearchBar = ({ setResults }) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault();

    const links = await getLinks({
      linkname,
      count,
    });

    setResults(links);
  }

  return (
    <div id="search">
      <h3>Look up links here...</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Link name"
          value={name}
          onChange={handleNameChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
