import React from "react";
import { useSelector } from "react-redux";
import HobbyList from "../components/Home/HobbyList/index";

function HomePage(props) {
  const hobbyList = useSelector((state) => state.hobby.list);

  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <HobbyList hobbyList={hobbyList}></HobbyList>
    </div>
  );
}

export default HomePage;
