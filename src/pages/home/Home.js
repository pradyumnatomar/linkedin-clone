import React, { useState, useEffect } from "react";
import "./Home.scss";
import Card from "../../components/card/Card";
import NewsCard from "../../components/news-card/NewsCard";
import ProfileCard from "../../components/profile-card/ProfileCard";
import Feed from "../../components/feed/Feed";
import Message from "../../components/message/Message";

const Home = () => {
  const [cardFixed, setCardFixed] = useState(false);
  useEffect(() => {
    function handleFixedCard() {
      let currentScrollPosition = 200;
      /**  if the current scroll position goes past 200px then fix the card */
      if (window.scrollY > currentScrollPosition) {
        setCardFixed(true);
      } else {
        /**if the current scroll position is past the current scroll position set below */
        setCardFixed(false);
      }
      /** then set the the current scroll value on it to be able to reference it */
      currentScrollPosition = window.scrollY;
    }
    window.addEventListener("scroll", handleFixedCard);
    return () => window.removeEventListener("scroll", handleFixedCard);
  }, []);
  return (
    <main className="home">
      <div className="home-items">
        <div className="side-cards">
          <ProfileCard />
          <Card isFixed={cardFixed} />
        </div>
        <Feed />
        <NewsCard />
      </div>
      <Message />
    </main>
  );
};

export default Home;
