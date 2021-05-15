import React from "react";
import "./Home.scss";
import Card from "../../components/card/Card";
import ProfileCard from "../../components/profile-card/ProfileCard";

const Home = () => {
  return (
    <div className="home">
      <ProfileCard />
      <Card />
    </div>
  );
};

export default Home;
