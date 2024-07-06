import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Results() {
  const [resultsRecipes, setResultsRecipes] = useState([]);
  let params = useParams();

  const getResults = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipes = await data.json();
    setResultsRecipes(recipes.results);
  };

  useEffect(() => {
    getResults(params.result);
  }, [params.result]);

  return (
    <Grid>
      {resultsRecipes.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    padding: 1rem;
    text-align: center;
  }
`;

export default Results;
