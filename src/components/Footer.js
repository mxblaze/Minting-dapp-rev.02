import React, { lazy, Suspense } from "react";
import styled from "styled-components";
import LogoFooter from "../assets/cc-zero.png";
// import Banner from './Banner'
import Logo from "./Logo";

import Facebook from "../Icons/Facebook";
import Instagram from "../Icons/Instagram";
import Twitter from "../Icons/Twitter";
import LinkedIn from "../Icons/LinkedIn";
import Loading from "./Loading";

// const Banner = lazy(() => import("./Banner"));

const Section = styled.section`
  height: 12vh;
  width: 100vw;
  background-color: #3F78DC;
  position: relative;
  color: ${(props) => props.theme.text};

  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  flex-direction: column;
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${(props) => props.theme.text};

  @media (max-width: 48em) {
    width: 90%;

    h1 {
      font-size: ${(props) => props.theme.fontxxxl};
    }
  }
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 48em) {
    width: 100%;
  }
`;

const IconList = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem auto;

  & > * {
    padding-right: 0.5rem;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
`;
const MenuItems = styled.ul`
  list-style: none;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;

  @media (max-width: 48em) {
    display: none;
  }
`;
const Item = styled.li`
  width: fit-content;
  cursor: pointer;

  &::after {
    content: " ";
    display: block;
    width: 0%;
    height: 2px;
    background: ${(props) => props.theme.text};
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
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
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color : #3F78DC;

  a {
    text-decoration: underline;
  }
  @media (max-width: 48em) {
    flex-direction: column;
    width: 100%;

    span {
      margin-bottom: 1rem;
    }
  }
`;

const Footer = () => {
  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <Section>
      <ContainerFooter></ContainerFooter>
      <Bottom>
        <span>
        <a
              href="https://creativecommons.org/share-your-work/public-domain/cc0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LogoFooter} width="100px"></img>
        </a>
        </span>
        <span style = {{color:"orange"}}> Da mother and da father  of meeble has waived all copyright and related  rights  to da  lost meeble
          
           
        </span>
      </Bottom>
    </Section>
  );
};

export default Footer;
