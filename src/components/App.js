import React, { useState, useEffect } from "react";

import { getLinks } from "../api";

const App = () => {
  const [links, setLinks] = useState("");

  useEffect(() => {
    getLinks()
      .then((response) => {
        console.log(response);
        setLinks(response.links);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div className="App">
      <h1>Search for links</h1>
      <div>
        {links ? links.map((link) => <div>{link.linkname}</div>) : <div></div>}
      </div>
    </div>
  );
};

export default App;
