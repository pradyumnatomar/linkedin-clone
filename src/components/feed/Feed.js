import React from "react";
import "./Feed.scss";
//components
import Recommendation from "../recommendation/Recommendation";
import FeedItem from "../feed-item/FeedItem";
//images
import Bunny from "../../assets/bunny.jpeg";
import BunnyTwo from "../../assets/bunnytwo.jpg";
import Courage from "../../assets/courage.jpg";
import Dexter from "../../assets/dexter.jpg";

const Feed = () => {
  return (
    <div className="feed">
      <Recommendation />
      <FeedItem image={Bunny} connectionComment />
      <FeedItem image={Dexter} />
      <FeedItem image={BunnyTwo} />
      <FeedItem image={Courage} connectionComment />
    </div>
  );
};

export default Feed;
