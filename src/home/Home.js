import React from "react";
import Header from "../components/common/Header";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Header title="Our Recipes" bgClass="bg-image" className="bg-btn">
        <Button content="SEARCH RECIPES" color="blue" as={Link} to="/recipes" size="big" />
      </Header>
    </>
  );
}

export default Home;
