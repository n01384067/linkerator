import React from "react";

import "./SearchResults.css";
import bookmark from "./bookmark";

const SearchResults = ({ results }) => {
  return (
    <div id="results">
      <h3>Links Found: ({results.length} results):</h3>
      <div className="linkList">
        {results.map((result) => (
          <bookmark
            key={result.id}
            addCardToDeck={addCardToDeck}
            removeCardFromDeck={removeCardFromDeck}
            {...result}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
