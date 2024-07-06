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
          <GiKnifeFork />
          <Logo to={"/"}>Foodie</Logo>
        </Nav>
        <Searchbar />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  font-weight: 400;
  font-size: 1.5rem;
  text-decoration: none;
  font-family: "Lobster Two", cursive;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  padding: 4rem 0rem;
  justify-content: flex-start;

  svg {
    font-size: 2rem;
  }
`;

export default App;
