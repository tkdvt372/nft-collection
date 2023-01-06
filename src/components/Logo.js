import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoText = styled.h1`
  font-family: "Akaya Telivigala", cursive;
  font-size: ${(props) => props.theme.fontxxxl};
  & > a {
    color: ${(props) => props.theme.text};
  }
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 1024px) {
    font-size: ${(props) => props.theme.fontxxl};
  }
`;

const Logo = () => {
  return (
    <LogoText>
      <Link to="/">DVT.</Link>
    </LogoText>
  );
};

export default Logo;
