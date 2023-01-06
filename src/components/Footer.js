import React from "react";
import styled from "styled-components";
import Facebook from "../Icons/Facebook";
import Instagram from "../Icons/Instagram";
import LinkedIn from "../Icons/LinkedIn";
import Twitter from "../Icons/Twitter";
import Banner from "./Banner";
import Logo from "./Logo";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.text};
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const IconList = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;

  & > * {
    padding-right: 0.5rem;
    transform: all 0.2s ease;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
const MenuItem = styled.ul`
  list-style: none;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;
`;
const Item = styled.li`
  width: fit-content;
  cursor: pointer;
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
`;
const Bottom = styled.div`
width:75%;
margin:0 auto;
display:flex;
justify-content: space-between;
align-items: center;
a{
  text-decoration: none;

}

`
const Footer = () => {
  const scrollTo = (id)=>{
    let element = document.getElementById(id);
    element.scrollIntoView({
      behavior: 'smooth',
      block:'start',
      inline:'nearest',
    })
}
  return (
    <Section>
      <Banner />
      <Container>
        <Left>
          <Logo />
          <IconList>
            <a
              href="https://www.facebook.com/dvt372/"
              target="_blank"
              rel="noopener   noreferrer"
            >
              <Facebook />
            </a>
            <a
              href="https://www.facebook.com/dvt372/"
              target="_blank"
              rel="noopener   noreferrer"
            >
              <Instagram />
            </a>
            <a
              href="https://www.facebook.com/dvt372/"
              target="_blank"
              rel="noopener   noreferrer"
            >
              <Twitter />
            </a>
            <a
              href="https://www.facebook.com/dvt372/"
              target="_blank"
              rel="noopener   noreferrer"
            >
              <LinkedIn />
            </a>
          </IconList>
        </Left>
        <MenuItem>
          <Item onClick={()=> scrollTo('home')} >Home</Item>
          <Item onClick={()=> scrollTo('about')} >About</Item>
          <Item onClick={()=> scrollTo('roadmap')} >Roadmap</Item>
          <Item onClick={()=> scrollTo('showcase')} >Showcase</Item>
          <Item onClick={()=> scrollTo('team')} >Team</Item>
          <Item onClick={()=> scrollTo('faq')} >Faq</Item>
        </MenuItem>
      </Container>
      <Bottom>
        <span>
          &copy; {new Date().getFullYear()} DVT club.All right reserved.
        </span>
        <span>
          Made with &#10084; by <a href="https://www.facebook.com/dvt372/" target="_blank" rel="noopeber noreferrer">Duong Van Tuan</a>.
        </span>
      </Bottom>
    </Section>
  );
};

export default Footer;
