import React from "react";

import "./bookmark.css";

const bookmark = ({ linkname, count, comment }) => {
  return (
    <div className="Bookmark">
      <div className="url">
        <p className="linkname">{linkname}</p>
        <p className="count">{count}</p>
        <p className="comment">{comment}</p>
      </div>
    </div>
  );
};

export default bookmark;
