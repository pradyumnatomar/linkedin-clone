import React from "react";
import "./FeedItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faCommentDots } from "@fortawesome/free-solid-svg-icons";

const FeedItem = ({ image, connectionComment }) => {
  return (
    <div className="feed-item">
      {connectionComment && (
        <div className="connection-comment">
          <span>
            <strong>Forza Horizon</strong> likes this
          </span>
          <FontAwesomeIcon icon={faCommentDots} className="feed-profile-pic" />
        </div>
      )}
      <div className="feed-item-header">
        <div className="feed-item-header-left">
          <div className="feed-item-logo">
            <FontAwesomeIcon icon={faUserCircle} className="feed-profile-pic" />
          </div>
          <div className="feed-item-details">
            <span className="feed-item-title">Pradyumna Tomar</span>
            <span className="feed-item-title">
              React Js | React Native | Javascript
            </span>
            <span className="feed-item-title">16h</span>
          </div>
        </div>
        <div className="feed-item-option"> + Follow</div>
      </div>
      <div className="feed-description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          condimentum justo id turpis finibus, et iaculis orci porttitor. In
          ullamcorper cursus dui at finibus. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Etiam ultrices lorem sit amet turpis
          rutrum sagittis. Proin eget enim at nibh auctor ornare. Donec in
          pulvinar justo. Nulla blandit erat vitae volutpat vulputate.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Duis sit amet imperdiet massa, id hendrerit
          eros. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Praesent tellus leo, dapibus nec faucibus nec, fermentum et diam.
          Praesent laoreet, turpis eu accumsan dignissim, libero ex porttitor
          diam, non ultrices ante tortor et diam. Nullam rutrum at eros in
          sollicitudin. Morbi a pharetra nunc, a pulvinar justo. Suspendisse
          sagittis augue ante, vel facilisis odio luctus nec.
        </p>
      </div>
      <div className="feed-image-holder">
        <img src={image} className="feed-image" />
      </div>
    </div>
  );
};

export default FeedItem;
