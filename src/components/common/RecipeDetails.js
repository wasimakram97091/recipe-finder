import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Grid, Header, Segment } from "semantic-ui-react";
import { getRecipe } from "../../services/Api";
import { Link } from "react-router-dom";

function RecipeDetails() {
  const [recipe, setRecipe] = useState({});

  const { recipeId } = useParams();
  useEffect(() => {
    const getData = async () => {
      let result = await getRecipe(recipeId);
      console.log(result);

      if (result && result.recipe) {
        setRecipe(result.recipe);
      }
    };
    getData();
  }, [recipeId]);
  return Object.keys(recipe).length > 0 ? (
    <Grid container stackable columns={2} className="detailsPageContent">
      <Grid.Column>
        <h2>
          <Button as={Link} to="/recipes" content="Back to recipe List" color="yellow" style={{ marginBottom: 10 }} />
        </h2>

        <div className="details-img-div">
          <img src={recipe.image_url} style={{ width: 500 }} alt="Recipe pics" />
        </div>
      </Grid.Column>

      <Grid.Column>
        <Header size="medium">{recipe.title}</Header>
        <p>Provided By : {recipe.publisher}</p>
        <Button as={"a"} href={recipe.publisher_url} target="_blank" content="Publisher Webpage" color="blue" />
        <Button as={"a"} href={recipe.source_url} target="_blank" content="Recipe URL" color="green" />

        <Header size="large" content="Ingredients" />
        <Segment.Group>
          {recipe &&
            recipe.ingredients.map((data) => (
              <Segment>
                <p className="nav-li">{data}</p>
              </Segment>
            ))}
        </Segment.Group>
      </Grid.Column>
    </Grid>
  ) : null;
}

export default RecipeDetails;
