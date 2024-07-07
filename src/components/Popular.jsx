import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    // Check if there is anything Popular item in local storage [To minimize overusing API Quota]
    const check = localStorage.getItem("popular");

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      const data = await api.json();

      // localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };

  return (
    <div>
      <Wrapper>
        <h3>Popular Picks</h3>
        <Splide
          options={{
            perPage: 4,
            gap: "5rem",
            drag: "free",
            arrows: false,
            pagination: false,
          }}
        >
          {popular.map((recipe) => {
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
  margin: 4rem 0rem;
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgb(0, 0, 0, 0), rgb(0, 0, 0, 0.5));
`;

const Card = styled.div`
  overflow: hidden;
  min-height: 15rem;
  position: relative;
  border-radius: 2rem;

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

export default Popular;
