import React from "react";
import { Container, Header, Grid } from "semantic-ui-react";
import RecipeListItem from "./RecipeListItem";

function RecipeList({ recipes, searchedQuerry }) {
  return (
    <>
      <Container className="card-con">
        <Header size="huge" content={`RECIPE LIST FOR ${searchedQuerry}`} textAlign="center" />
        <Grid columns={4} doubling className="grid-col-wrapper">
          {recipes &&
            recipes.map((recipe) => (
              <Grid.Column className="grid-column">
                <RecipeListItem recipe={recipe} />
              </Grid.Column>
            ))}
        </Grid>
        <div className="caption">
          <h3>“Recipes don’t work unless you use your heart!” ~ Dylan Jones</h3>
          <p>
            <i className="fa-solid fa-heart"></i> From Wasim
          </p>
        </div>
      </Container>
    </>
  );
}

export default RecipeList;
