import React from "react";
import CoinSearch from "../components/CoinSearch";

const Home = (props) => {
  return (
    <div>
      <CoinSearch coins={props.coins}></CoinSearch>
    </div>
  );
};

export default Home;
