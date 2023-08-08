import React from "react";
import { Grid, Form, Input } from "semantic-ui-react";
import { useState } from "react";

function Search({ setSearchedQuerry }) {
  const [value, setValue] = useState("");

  const onFormSubmit = () => {
    setSearchedQuerry(value);
  };
  return (
    <>
      <Grid columns={2} textAlign="center" className="search-box">
        <Grid.Column className="grid-col">
          <h2 className="search-heading">
            <span style={{ color: "#2185D0" }}> Recipe Finder</span>{" "}
          </h2>
          <h4 className="search-by">Search recipes with Recipe Finder</h4>
          <Form onSubmit={onFormSubmit}>
            <Input placeholder="potato, fish, Pizza, etc" action={{ icon: "search", color: "blue" }} onChange={(e) => setValue(e.target.value)} value={value} />
          </Form>
        </Grid.Column>
      </Grid>
    </>
  );
}

export default Search;
