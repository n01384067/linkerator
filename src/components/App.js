import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import { getLinks } from "../api";
import SearchResults from "./SearchResults";

const App = () => {
  const [links, setLinks] = useState("");

  useEffect(() => {
    getLinks()
      .then((response) => {
        console.log(response);
        setLinks([]);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div className="App">
      <h1>Search for links</h1>
      <SearchBar setResults={setLinks}></SearchBar>
      <SearchResults results={links} />
    </div>
  );
};

export default App;
