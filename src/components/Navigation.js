import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Logo from "./Logo";
const Section = styled.section`
  width: 100vw;
  background-color: ${(props) => props.theme.body};
`;
const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 85%;
  height: ${(props) => props.theme.navHeight};
  .mobile{
    display: none;

  }
  @media (max-width: 1024px) {
      .desktop{
        display: none;
      }
      .mobile{
        display: inline-block;
      }
  } 
`;
const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  align-items: center;
  @media (max-width: 1024px) {
    position: fixed;
    top: ${(props) => props.theme.navHeight};
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
    z-index: 50;
    background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.85)`};
    backdrop-filter: blur(2px);
    flex-direction: column;
    justify-content: center;
    transform: ${(props) =>
      props.click ? " translateY(0)" : "translateY(1000%)"};
    transition: all 0.3s ease;
  }
`;
const MenuItem = styled.li`
  margin: 0 1rem;
  color: ${(props) => props.theme.text};
  cursor: pointer;
  &::selection {
    background: transparent;
  }
  &::after {
    content: "";
    display: block;
    width: 0%;
    height: 2px;
    background: ${(props) => props.theme.text};
    transition: width 0.5s ease;
  }
  &:hover::after {
    width: 100%;
  }
  @media (max-width: 1024px) {
    margin: 1rem 0;
    &::after {
      display: none;
    }
  }
`;
const HamburgerMenu = styled.div`
  width: ${(props) => (props.click ? "2rem" : "1.5rem")};
  height: 2px;
  background-color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: ${(props) =>
    props.click
      ? "translateX(-50%) rotate(90deg)"
      : "translateX(-50%) rotate(0)"};
  display: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  @media (max-width: 1024px) {
    display: flex;
  }
  &::after,
  &::before {
    content: "";
    width: ${(props) => (props.click ? "1rem" : "1.5rem")};
    right: ${(props) => (props.click ? "-2px" : "0")};
    height: 2px;
    background-color: ${(props) => props.theme.text};
    position: absolute;
    transition: all 0.3s ease;
  }
  &::after {
    top: ${(props) => (props.click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.click ? "rotate(-45deg)" : "rotate(0)")};
  }
  &::before {
    bottom: ${(props) => (props.click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.click ? "rotate(45deg)" : "rotate(0)")};
  }
`;
const Navigation = () => {
  const [click, setClick] = useState(false);

  const scrollTo = (id) => {
    let element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    setClick(!click);
  };
  return (
    <Section id="navigation">
      <Navbar>
        <Logo />
        <HamburgerMenu click={click} onClick={() => setClick(!click)}>
          &nbsp;
        </HamburgerMenu>
        <Menu click={click}>
          <MenuItem onClick={() => scrollTo("home")}>Home</MenuItem>
          <MenuItem onClick={() => scrollTo("about")}>About</MenuItem>
          <MenuItem onClick={() => scrollTo("roadmap")}>Roadmap</MenuItem>
          <MenuItem onClick={() => scrollTo("showcase")}>Showcase</MenuItem>
          <MenuItem onClick={() => scrollTo("team")}>Team</MenuItem>
          <MenuItem onClick={() => scrollTo("faq")}>Faq</MenuItem>
          <MenuItem>
            <div className="mobile">
              <Button
                text="Connect wallet"
                link="https://www.facebook.com/dvt372/"
              />
            </div>
          </MenuItem>
        </Menu>
        <div className="desktop">
          <Button
            text="Connect wallet"
            link="https://www.facebook.com/dvt372/"
          />
        </div>
      </Navbar>
    </Section>
  );
};

export default Navigation;
