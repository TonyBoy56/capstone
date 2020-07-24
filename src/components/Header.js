import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CapstoneHeader = styled.h1`
  font-size: 24px;
  text-align: center;
  color: black;
`;

const StyledWrapper = styled.section`
  background-color: orange;
`;
function Header() {
  return (
    <StyledWrapper>
      <>
        <CapstoneHeader>
          Where We Droppin'?
        </CapstoneHeader>
        <ul>
          <li>
            <Link to = "/">Home</Link>
          </li>
          <li>
            <Link to = "/signin">Sign In</Link>
          </li>
        </ul>
      </>
    </StyledWrapper>
  );
}

export default Header;