import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Logo from "./Logo";
import Twitter from "../assets/social-media-icons/twitter.png";
import Ether from "../assets/social-media-icons/Ether_logo.png";
import OpenSea from "../assets/social-media-icons/Opensea_logo.png";

const Section = styled.section`
  width: 100%;
  /* background-color: #4079dc; */
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  /* height: ${(props) => props.theme.navHeight}; */
  margin: 0 auto;
  .mobile {
    display: none;
  }
  @media (max-width: 64em) {
    .desktop {
      display: none;
    }
    .mobile {
      display: inline-block;
    }
  }
`;
const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  @media (max-width: 64em) {
    /* 1024 px */
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
    transform: ${(props) =>
      props.click ? "translateY(0)" : `translateY(1000%)`};
    transition: all 0.3s ease;
    flex-direction: column;
    justify-content: center;

    touch-action: none;
  }
`;

// const LogoLink = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   /* align-items: center; */
//   filter: drop-shadow(1px 2px 5px Black);
//   padding-top: 10px;
//   @media (max-width: 48em) {
//     width: 100%;
//     padding-top: 10px;
//   }
// `;

const MenuItem = styled.li`
  margin: 0 1rem;
  color: ${(props) => props.theme.text};
  cursor: pointer;
  :hover {
    animation: shake 0.5s;
    animation-iteration-count: infinite;
  }
  @keyframes shake {
    0% {
      transform: translate(1px, 1px) rotate(0deg);
    }
    10% {
      transform: translate(-1px, -2px) rotate(-1deg);
    }
    20% {
      transform: translate(-3px, 0px) rotate(1deg);
    }
    30% {
      transform: translate(3px, 2px) rotate(0deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
      transform: translate(-1px, 2px) rotate(-1deg);
    }
    60% {
      transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(3px, 1px) rotate(-1deg);
    }
    80% {
      transform: translate(-1px, -1px) rotate(1deg);
    }
    90% {
      transform: translate(1px, 2px) rotate(0deg);
    }
    100% {
      transform: translate(1px, -2px) rotate(-1deg);
    }
  }

  &::after {
    content: " ";
    display: block;
    width: 0%;
    height: 2px;
    /* background: ${(props) => props.theme.text}; */
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }

  @media (max-width: 64em) {
    margin: 1rem 0;
    &::after {
      display: none;
    }
  }
`;

const HamburgerMenu = styled.span`
  width: ${(props) => (props.click ? "2rem" : "1.5rem")};
  height: 2px;
  background: ${(props) => props.theme.text};
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

  @media (max-width: 64em) {
    /* 1024 px */
    display: flex;
  }

  &::after,
  &::before {
    content: " ";
    width: ${(props) => (props.click ? "1rem" : "1.5rem")};
    height: 2px;
    right: ${(props) => (props.click ? "-2px" : "0")};
    background: ${(props) => props.theme.text};
    position: absolute;
    transition: all 0.3s ease;
  }

  &::after {
    top: ${(props) => (props.click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.click ? "rotate(-40deg)" : "rotate(0)")};
  }
  &::before {
    bottom: ${(props) => (props.click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.click ? "rotate(40deg)" : "rotate(0)")};
  }
`;

const Navigation = ({ accounts, setAccounts }) => {
  // Connect function ------------------------------------------------ //
  const isConnected = Boolean(accounts[0]);

  async function connectAccount() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    }
  }
  // ---------------------------------------------------------------- //
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
    <>
      <NavBar>
        <Logo />
        <HamburgerMenu click={click} onClick={() => setClick(!click)}>
          &nbsp;
        </HamburgerMenu>

        <Menu click={click}>
          {/* <MenuItem onClick={() => scrollTo("home")}></MenuItem>
          <MenuItem onClick={() => scrollTo("about")}></MenuItem> */}
          <MenuItem>
            <a
              href="http://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Twitter} width="80px"></img>
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="http://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Ether} width="80px"></img>
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="http://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={OpenSea} width="70px"></img>
            </a>
          </MenuItem>

          {/* Connect Desktop */}
          {/* {isConnected ? (
            <div className="mobile">
              <Button text="Connect Wallet" />
            </div>
          ) : (
            <div className="mobile">
              <Button text="Connect Wallet" onClick={connectAccount} />
            </div>
          )} */}
        </Menu>

        {/* Connect Desktop */}
        {/* {isConnected ? (
          <div className="desktop">
            <Button text="Connect Wallet" />
          </div>
        ) : (
          <div className="desktop">
            <Button text="Connect Wallet" onClick={connectAccount} />
          </div>
        )} */}

        {isConnected ? (
          <div>
            <p>Connected</p>
          </div>
        ) : (
          <div>
            <Button text="Connect Wallet" onClick={connectAccount} />
          </div>
        )}
      </NavBar>
    </>
  );
};

export default Navigation;
