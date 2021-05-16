import React, { useRef, useState, useEffect } from "react";
import "./Recommendation.scss";
import RecommendationItem from "../recommendation-items/RecommendationItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
// logos
import reddit from "../../assets/reddit.png";
import google from "../../assets/google.jpg";
import yahoo from "../../assets/yahoo.jpg";
import accenture from "../../assets/accenture.jpg";
import amazon from "../../assets/amazon.jpg";
import netflix from "../../assets/netflix.png";
import disney from "../../assets/disney.jpg";

const Recommendation = () => {
  const scrollRef = useRef(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const moveRight = () => {
    let currentScrollPosition = scrollRef.current.scrollLeft;
    scrollRef.current.scrollLeft =
      currentScrollPosition + scrollRef.current.offsetWidth - 30;
    if (scrollRef.current.scrollLeft > 20) {
      setShowLeftArrow(true);
    }
  };
  const moveLeft = () => {
    let currentScrollPosition = scrollRef.current.scrollLeft;
    scrollRef.current.scrollLeft =
      currentScrollPosition - scrollRef.current.offsetWidth + 30;
    if (scrollRef.current.scrollLeft === 0) {
      setShowLeftArrow(false);
    }
  };

  return (
    <div className="recommendation">
      <span className="recommendation-title"> Jobs recommended for you</span>
      {showLeftArrow && (
        <FontAwesomeIcon
          icon={faArrowAltCircleLeft}
          className="left arrow"
          onClick={() => moveLeft()}
        />
      )}
      <FontAwesomeIcon
        icon={faArrowAltCircleRight}
        className="right arrow"
        onClick={() => moveRight()}
      />
      <div
        className="job-holder"
        ref={scrollRef}
        onScroll={(e) =>
          e.currentTarget.scrollLeft
            ? setShowLeftArrow(true)
            : setShowLeftArrow(false)
        }
      >
        <RecommendationItem logo={google} />
        <RecommendationItem logo={amazon} />
        <RecommendationItem logo={disney} />
        <RecommendationItem logo={netflix} />
        <RecommendationItem logo={reddit} />
        <RecommendationItem logo={accenture} />
        <RecommendationItem logo={yahoo} />
      </div>
      <div className="see-more">
        <strong>See More...</strong>
      </div>
    </div>
  );
};

export default Recommendation;
