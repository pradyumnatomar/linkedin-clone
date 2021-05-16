import React from "react";
import "./RecommendationItem.scss";
import background from "../../assets/background.jpg";

const RecommendationItem = ({ logo }) => {
  return (
    <div className="recommendation-item">
      <div className="company-background-holder">
        <div className="recommendation-background">
          <img src={background} className="recommendation-image" />
        </div>
        <div className="company-image-holder">
          <img src={logo} className="company-image" />
        </div>
      </div>
      <div className="company-details">
        <span>Software Deveopment Engineer II</span>
        <span>Google Inc.</span>
        <span>
          Unitech Signature Tower 2 Tower B, Gurgaon Sector 15 Part 2, Gurgaon
        </span>
        <span>2 days ago</span>
      </div>
    </div>
  );
};

export default RecommendationItem;
