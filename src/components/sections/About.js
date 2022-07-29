import React, { lazy, Suspense, useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
// import Carousel from '../Carousel'
import Button from "../Button";
import { dark } from "../../styles/Themes";
import Loading from "../Loading";
import img from "../../assets/bg1.gif";
import LogoFooter from "../../assets/cc-zero.png";
const Carousel = lazy(() => import("../Carousel"));

const Section = styled.section`
  min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
  height: 100vh;
  width: 100vw;
  /* opacity: 0.9; */
  /* background-color: #3f78dc; */
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  position: relative;
  /* overflow: hidden; */
  /* //  @media (max-width: 64em) { */
  //      /* 1024 px */

  //    width: 100vw;
  //    height: 160vh;
  //    /* min-height: 100vh;
  //    width: 100%; */
  //    position: relative;

  //    background-size: cover ;
  //    background-position : center;
`;

const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  /* background-color: lightblue; */

  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 70em) {
    width: 85%;
  }

  @media (max-width: 64em) {
    width: 100%;
    flex-direction: column;

    & > *:last-child {
      width: 80%;
    }
  }
  @media (max-width: 40em) {
    & > *:last-child {
      width: 90%;
    }
  }
`;

const Box1 = styled.div`
  width: 50%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
    min-height: 50px;
    margin-top: 70px;
  }
`;
const Box2 = styled.div`
  width: 50%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
    top: -12px;
    min-width: 100%;
    min-height: 100%;
  }
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
  margin: 0 auto;
  text-shadow: 3px 3px black;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxl};
    width: 100%;
    text-align: center;
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;
const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  text-align: center;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;
  text-shadow: 2px 2px black;
  //font-color: black;
  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontlg};
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
  }
`;

const ContainerFooter = styled.div`
  width: 95%;
  margin: 0.5rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 2px solid ${(props) => props.theme.text};

  @media (max-width: 48em) {
    width: 90%;
    h1 {
      font-size: ${(props) => props.theme.fontxxxl};
    }
  }
`;

const Bottom = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 21px;
  text-shadow: 2px 2px grey;

  a {
    text-decoration: underline;
  }

  @media (max-width: 64em) {
    font-size: 18px;
  }
  @media (max-width: 36em) {
    flex-direction: column;
    text-align: center;
    font-size: 18px;
  }
  span {
    padding-bottom: 0px;
  }
`;

const About = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Section id="about">
      <Container style={{ transform: `translateY(${offsetY * 0.08}px)` }}>
        <Box1 style={{ transform: `translateY(${-offsetY * 0.1}px)` }}>
          <Suspense fallback={<Loading />}>
            <Carousel />{" "}
          </Suspense>{" "}
        </Box1>
        <Box2>
          <Title style={{ color: "Orange" }}>
            <span style={{ color: "#FF7F50" }}>T</span>
            <span style={{ color: "#FFF8DC" }}>H</span>
            <span style={{ color: "#ADFF2F" }}>E</span>
            <span style={{ color: "#DDA0DD" }}> L</span>
            <span style={{ color: "#87CEFA" }}>O</span>
            <span style={{ color: "#FFB6C1" }}>S</span>
            <span style={{ color: "#9370DB" }}>T </span>
            <span style={{ color: "#C71585" }}>M</span>
            <span style={{ color: "#FFD700" }}>E</span>
            <span style={{ color: "#DC143C" }}>E</span>
            <span style={{ color: "#E0FFFF" }}>B</span>
            <span style={{ color: "#40E0D0" }}>L</span>
            <span style={{ color: "#FFF0F5" }}>E</span>
            <span style={{ color: "#BA55D3" }}>S</span>
          </Title>
          <SubText>
            <br /> MEEBLES ARE DA WEIRD CREATURES, <br />
            WHO BORN FROM LOVE OF DA MOTHER <br />
            AND DA FATHER.
          </SubText>
          <SubText>
            <br />
            ON DA VERY SIMPLY DAY OF <br />
            MEEBLES, STRANGE LIGHT COMES <br />
            ACROSS THE SKY N'
          </SubText>
          {<Title style={{ color: "#dbff00" }}>
            <br />
            BOOM!!! <br />
            <br />
          </Title> }
          <SubText>
            <br /> IT'S ALL GONE, All DA MEEBLE IS <br />
            GONE, WHERE ARE THEY?
            <br />
            <br /> #SAVEMEEBLES <br />
            #FindTheLostMeebles
          </SubText>
        </Box2>
      </Container>
      <ContainerFooter
        style={{ transform: `translateY(${offsetY * 0.08}px)` }}
      ></ContainerFooter>
      <Bottom style={{ transform: `translateY(${offsetY * 0.08}px)` }}>
        <span>
          <a
            href="https://creativecommons.org/share-your-work/public-domain/cc0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LogoFooter} width="150px"></img>
          </a>
        </span>
        <span style={{ paddingLeft: "20px", color: "black" }}>
          Da mother and da father of meeble has waived all copyright and related
          rights to da lost meeble
        </span>
      </Bottom>
    </Section>
  );
};

export default About;
