import React from "react";
import "./Card.scss";

const Card = ({ isFixed }) => {
  return (
    <div className={`card ${isFixed && `card-fixed`}`}>
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

export default Card;
