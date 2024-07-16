import { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Searchbar() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/results/" + input);
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`

  div {
    width: 95%;
    display: flex;
    margin: 0.5rem;
    padding: 0.5rem;
    align-items: right;
    position: relative;
  }
  input {
    width: 100%;
    border: none;
    color: white;
    border: none;
    outline: none;
    font-size: 1.5rem;
    padding: 1rem 3rem;
    border-radius: 1rem;
    background: linear-gradient(35deg, #494949, #313131);
  }
  svg {
    top: 50%;
    left: -4%;
    color: white;
    position: absolute;
    transform: translate(100%, -50%);
  }
`;

export default Searchbar;
