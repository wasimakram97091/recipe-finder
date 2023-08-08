import React from "react";
import { Button, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";

function RecipeListItem({ recipe }) {
  return (
    <>
      <Card className="card-item">
        <img src={recipe.image_url} alt="thumbnail" style={{ height: 200 }} className="card-img" />
        <Card.Content>
          <Card.Header content={recipe.title} />
          <Card.Description className="card-des">
            <h4>{recipe.publisher}</h4>
          </Card.Description>
        </Card.Content>
        <Card.Content>
          <Button as={Link} to={`/recipes/${recipe.recipe_id}`} content="Details" color="blue" size="tiny" />
          <Button href={recipe.source_url} target="blank" content="Recipe URL" color="green" size="tiny" />
        </Card.Content>
      </Card>
    </>
  );
}

export default RecipeListItem;
