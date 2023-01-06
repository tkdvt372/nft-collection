import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import DrawSvg from "../DrawSvg";

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
  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 50%;
    font-size: ${(props) => props.theme.fontxl};
  }
`;
const Container = styled.div`
  width: 80%;
  height: 200vh;
  background-color: ${(props) => props.theme.body};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 48em) {
    width: 100%;
  }
`;
const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Items = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 48em) {
    width: 90%;
  }
  & > *:nth-of-type(2n + 1) {
    justify-content: start;
    @media (max-width: 48em) {
      justify-content: center;
    }
    div {
      border-radius: 50px 0 50px 0;
      text-align: right;
      p {
        border-radius: 40px 0 40px 0;
      }
    }
  }
  & > *:nth-of-type(2n) {
    justify-content: end;
    @media (max-width: 48em) {
      justify-content: center;
    }
    div {
      border-radius: 0 50px 0 50px;
      text-align: left;
      p {
        border-radius: 0 40px 0 40px;
      }
      @media (max-width: 48em) {
        border-radius: 50px 0 50px 0;
        text-align: right;
        p {
          border-radius: 40px 0 40px 0;
        }
      }
    }
  }
`;
const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  @media (max-width: 48em) {
    justify-content: flex-end !important;
  }
`;
const ItemContainer = styled.div`
  width: 40%;
  height: fit-content;
  padding: 1rem;
  border: 3px solid ${(props) => props.theme.text};
  @media (max-width: 48em) {
    width: 70%;
  }
`;
const Box = styled.p`
  height: fit-content;
  background-color: ${(props) => props.theme.carouselColor};
  color: ${(props) => props.theme.text};
  padding: 1rem;
  position: relative;
  border: 1px solid ${(props) => props.theme.text};
`;
const SubTitle = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 600;
  }
`;
const SubText = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontsm};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  font-weight: 400;
  margin: 0.5rem 0;
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxs};
    font-weight: 100;
  }
`;
const RoadMapItem = ({ title, subtext, addToRefs }) => {
  return (
    <Item ref={addToRefs}>
      <ItemContainer>
        <Box>
          <SubTitle>{title}</SubTitle>
          <SubText>{subtext}</SubText>
        </Box>
      </ItemContainer>
    </Item>
  );
};
const RoadMap = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];
  gsap.registerPlugin(ScrollTrigger);
  const addToRefs = (e) => {
    if (e && !revealRefs.current.includes(e)) {
      revealRefs.current.push(e);
    }
  };
  useLayoutEffect(() => {
    let t1 = gsap.timeline();
    revealRefs.current.forEach((e, index) => {
      t1.fromTo(
        e.childNodes[0],
        {
          y: "0",
        },
        {
          y: "-40%",
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: e,
            start: "top center+=200px",
            end: "bottom center",
            scrub: true,
            // markers: true
          },
        }
      );
    });
    return () => {};
  }, []);
  return (
    <Section id="roadmap">
      <Title>Roadmap</Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        <Items>
          <Item>&nbsp;</Item>
          <RoadMapItem
            addToRefs={addToRefs}
            title="Grand Opening"
            subtext="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."
          />
          <RoadMapItem
            addToRefs={addToRefs}
            title="Great Benefits"
            subtext="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."
          />
          <RoadMapItem
            addToRefs={addToRefs}
            title="Early Access"
            subtext="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."
          />
          <RoadMapItem
            addToRefs={addToRefs}
            title="New Merch"
            subtext="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."
          />
          <RoadMapItem
            addToRefs={addToRefs}
            title="Holders Ranking"
            subtext="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."
          />
        </Items>
      </Container>
    </Section>
  );
};

export default RoadMap;
