import React from "react";
import "./ProfileCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faBookmark, faSquare } from "@fortawesome/free-solid-svg-icons";

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <FontAwesomeIcon icon={faUserCircle} className="profile-pic" />
      <span className="profile-name">Pradyumna Tomar</span>
      <span className="profile-subtitle">
        React Js | React Native | Javascript
      </span>
      <div className="profile-details">
        <div>
          <span>Connections</span>
          <span>51</span>
        </div>
        <span>Grow your network</span>
        <div>
          <span>Who viewed your profile</span>
          <span>15</span>
        </div>
      </div>
      <div className="offers">
        <span>Access exclusive tools &amp; insights</span>
        <div className="my-items">
          <FontAwesomeIcon icon={faSquare} />
          <span>Try Premium Free for 1 Month</span>
        </div>
        <div className="my-items">
          <FontAwesomeIcon icon={faBookmark} />
          <span>My Items</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
