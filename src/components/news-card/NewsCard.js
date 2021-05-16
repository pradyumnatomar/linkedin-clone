import React from "react";
import "./Newscard.scss";

const NewsCard = ({}) => {
  return (
    <div className={`news-card`}>
      <span>Recent</span>
      <span>
        <strong>#</strong> reactjs
      </span>
      <span>
        <strong>#</strong> javascript
      </span>
      <span>Groups</span>
      <span>Events</span>
      <span>Followed Hashtags</span>
      <span>
        <strong>#</strong> reactjs
      </span>
      <span>
        <strong>#</strong> javascript
      </span>
      <span>See all</span>
      <span className="discover">Discover more</span>
    </div>
  );
};

export default NewsCard;
