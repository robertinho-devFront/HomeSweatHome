import React from "react";
import './hastag.scss'; 

const Hashtag = ({ tags }) => {
  return (
    <div className="hashtags">
      {tags.map((tag, index) => (
        <span key={index} className="hashtag">
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Hashtag;

