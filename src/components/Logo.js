import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import styled from "styled-components";
import Meeble from "../assets/teest.gif";

const LogoText = styled.div`
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  /* align-items: center; */
  filter: drop-shadow(1px 2px 5px Black);
  padding-top: 10px;

  @media (max-width: 48em) {
    width: 100%;
    padding-top: 10px;
  }

  /* @keyframes like-gif {
    0% {
      background-position: 0%;
    }
    100% {
      background-position: 100%;
    }
  }
  display: block;
  margin: 0;
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/349115/like_animation.png)
    0 0 no-repeat;

  animation: like-gif steps(28) 1s infinite both; */
`;

const Logo = () => {
  return (
    <Left>
      {/* <LogoText> */}
      
      <Link to="/">
        {/* <Meeble/> */}
        <img src={Meeble} width="130px"></img>
      </Link>
      {/* </LogoText> */}
      
    </Left>
  );
};

export default Logo;
