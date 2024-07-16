import Pages from "./pages/Pages";
import styled from "styled-components";
import Category from "./components/Category";
import { GiKnifeFork } from "react-icons/gi";
import Searchbar from "./components/Searchbar";
import { BrowserRouter, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <Logo to={"/"}>
            <GiKnifeFork />
            foodie
          </Logo>
          <Searchbar />
          <Category />
        </Nav>
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  margin: 1rem;
  padding: 1rem;
  font-weight: 400;
  font-size: 1.5rem;
  text-decoration: none;
  font-family: "Lobster Two", cursive;
  filter: drop-shadow(5px 5px 4px #000000);
`;

const Nav = styled.div`
  display: flex;
  padding-top: 0rem;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 2rem;
  }
`;

export default App;
