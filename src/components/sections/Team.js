import React from "react";
import styled from "styled-components";
import img1 from "../../assets/Nfts/bighead.svg";
import img2 from "../../assets/Nfts/bighead-1.svg";
import img3 from "../../assets/Nfts/bighead-2.svg";
import img4 from "../../assets/Nfts/bighead-3.svg";
import img5 from "../../assets/Nfts/bighead-4.svg";
import img6 from "../../assets/Nfts/bighead-5.svg";
import img7 from "../../assets/Nfts/bighead-6.svg";
import img8 from "../../assets/Nfts/bighead-7.svg";
import img9 from "../../assets/Nfts/bighead-8.svg";
import ConfettiComponent from "../ConfettiComponent";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;
  @media (max-width: 48em) {
      animation-duration: 15s;
  }
`;
const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 64em) {
    width: 80%;
    justify-content:center;
  }
  @media (max-width: 48em) {
    width: 90%;
    justify-content:center;
  }
`;
const ImageContainer = styled.div`
  width: 15rem;
  margin: 0 1rem;
  background-color: ${(props) => props.theme.carouselColor};
  border-radius: 20px;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.text};
  img {
    width: 100%;
    height: auto;
    transition: all 0.3s ease;
  }
`;

const Item = styled.div`
  width: calc(20rem - 4vw);
  padding: 1rem 0;
  color: ${(props) => props.theme.body};
  margin: 2rem 1rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  backdrop-filter: blur(4);
  z-index: 5;
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 20px;
  &:hover {
    img {
      transform: translateY(-2rem) scale(1.2);
    }
  }
  @media (max-width: 64em) {
      width: 70vw;
    }
`;
const Name = styled.h2`
  font-size: ${(props) => props.theme.fontlg};
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  margin-top: 1rem;
`;
const Position = styled.h2`
  font-size: ${(props) => props.theme.fontmd};
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  color: ${(props) => `rgba(${props.theme.textRgba},0.6)`};
  font-weight: 400;
`;
const MemberComponent = ({ img, name = " ", position = " " }) => {
  return (
    <Item>
      <ImageContainer>
        <img src={img} alt="img" />
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  );
};

const Team = () => {
  return (
    <Section id="team">
      <Title>Team</Title>
      <Container>
        <MemberComponent img={img1} name={"Huong Trinh"} position={"Manager"} />
        <MemberComponent img={img2} name={"Tuan Duong"} position={"Founder"} />
        <MemberComponent img={img3} name={"Nam Tran"} position={"Co-Founder"} />
        <MemberComponent
          img={img4}
          name={"Giao Nguyen"}
          position={"Director"}
        />
        <MemberComponent img={img5} name={"Dat Trinh"} position={"Artist"} />
        <MemberComponent
          img={img6}
          name={"Khanh Duong"}
          position={"Social Media Manager"}
        />
        <MemberComponent
          img={img7}
          name={"Nam Nguyen"}
          position={"Blockchain Specialist"}
        />
        <MemberComponent
          img={img8}
          name={"Thang Trinh"}
          position={"Web3 Developer"}
        />
        <MemberComponent
          img={img9}
          name={"Trieu Trinh"}
          position={"Graphic Designer"}
        />
      </Container>
      <ConfettiComponent />
    </Section>
  );
};

export default Team;
