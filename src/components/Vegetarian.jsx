import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "@splidejs/splide/dist/css/splide.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

function Vegetarian() {
  const [vegetarian, setVegetarian] = useState([]);

  useEffect(() => {
    getVegetarian();
  }, []);

  const getVegetarian = async () => {
    // Check if there is anything Vegetarian item in local storage [To minimize overusing API Quota]
    const check = localStorage.getItem("vegetarian");

    if (check) {
      setVegetarian(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      );
      const data = await api.json();

      // localStorage.setItem("vegetarian", JSON.stringify(data.recipes));
      setVegetarian(data.recipes);
    }
  };

  return (
    <div>
      <Wrapper>
        <h3>Vegetarian Picks</h3>
        <Splide
          options={{
            perPage: 3,
            gap: "5rem",
            drag: "free",
            arrows: false,
            pagination: false,
          }}
        >
          {vegetarian.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={"/recipe/" + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 2rem;
`;

const Gradient = styled.div`
  z-index: 3;
  width: 100%;
  height: 100%;
  position: absolute;
  background: linear-gradient(rgb(0, 0, 0, 0), rgb(0, 0, 0, 0.5));
`;

const Card = styled.div`
  overflow: hidden;
  min-height: 20rem;
  position: relative;
  border-radius: 2rem;
  filter: drop-shadow(5px 5px 5px #000000);

  img {
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    border-radius: 2rem;
  }

  p {
    left: 50%;
    bottom: 0%;
    width: 100%;
    z-index: 10;
    height: 40%;
    color: white;
    display: flex;
    font-size: 1rem;
    font-weight: 600;
    position: absolute;
    text-align: center;
    align-items: center;
    justify-content: center;
    transform: translate(-50%, 0%);
  }
`;

export default Vegetarian;
