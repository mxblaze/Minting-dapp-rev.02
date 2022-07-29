import React, { useState, lazy, Suspense, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { ToastContainer, toast } from 'material-react-toastify';
//------------------------------------//
import Logo from "../Logo";
import Twitter from "../../assets/social-media-icons/twitter(1).png";
import Ether from "../../assets/social-media-icons/Etherscan1.png";
import OpenSea from "../../assets/social-media-icons/Opensea1.png";
import Lookrere from "../../assets/social-media-icons/lookrare1.png";
import X2Y2 from "../../assets/social-media-icons/x2y2.png";
//-----------------------------------//
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Loading from "../Loading";
import img from "../../assets/bg.gif";

import { ethers, BigNumber } from "ethers";
import abi from "../../utils/meeble-abi.json";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import About from "./components/sections/About";

const TypeWriterText = lazy(() => import("../TypeWriterText"));
const meebleNFTAddress = "0xE38D6DF722b2AaCCDF090b20942267Bb97Df8649";


//-------------------------------------------------//

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
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
    top: 150px;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
    z-index: 50;
    background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.85)`};
    backdrop-filter: blur(2px);
    transform: ${(props) => props.click ? "translateY(0)" : `translateY(70%)`};
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
  top: 4rem;
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

//-------------------------------------------------//

const Section = styled.section`
  min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
  width: 100vw;
  height: 100vh;
  /* min-height: 100vh;
  width: 100%; */
  position: relative;
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  // @media (max-width: 64em) {
  //   /* 1024 px */
  //   min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
  // width: 100vw;
  // height: 100vh;
  // /* min-height: 100vh;
  // width: 100%; */
  // position: relative;
  // background-image: url(${img});
  // background-size: cover ;
  // background-position : center;
  // }
`;

const Container = styled.div`
  width: 85%;
  min-height: 50vh;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
    width: 85%;
  }
  @media (max-width: 48em) {
    flex-direction: column-reverse;
    width: 100%;
    & > *:first-child {
      width: 100%;
      margin-top: 2rem;
    }
  }
`;
const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home = ({ accounts, setAccounts }) => {
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
  const [mintAmount, setMintAmount] = useState(1);
  async function handleMint() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(meebleNFTAddress,abi.abi,signer);
      try {
        const response = await contract.mint(BigNumber.from(mintAmount), {
          value: ethers.utils.parseEther((0.006969 * mintAmount).toString()),
        });
        console.log("response:", response);
      } catch (err) {
        console.log("error: ", err);
      }
    }
  }

  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1);
  };

  const handleIncrement = () => {
    if (mintAmount >= 6) return;
    setMintAmount(mintAmount + 1);
  };

  // parallax------------------------------------------------------------------ //

  const [click, setClick] = useState(false);
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
//-----------------------------------------------------------------------------//
  return (
    <Section id="home" style={{ transform: `translateY(${offsetY * 0.15}px)` }}>
      {/*  */}
      
      <NavBar>
        <Logo />
        
      </NavBar>

      {/*  */}
      <Container style={{ transform: `translateY(${offsetY * 0.25}px)` }}>
        <Box>
          <Suspense fallback={<Loading />}>
            <TypeWriterText />
            <br />
            {isConnected ? (
              <div>
                <Flex align="center" justify="center">
                  <Button
                    backgroundColor="#4079DC"
                    borderRadius="50px"
                    boxShadow="0px 2px 2px 1px #0F0F0F"
                    color="white"
                    width="50px"
                    cursor="pointer"
                    fontFamily="inherit"
                   
                    padding="15px"
                    marginTop="10px"
                    onClick={handleDecrement}
                  >
                    <Text style={{fontFamily:"Ghostmeat"}}>-</Text>
                  </Button>
                  <Input
                    readOnly
                    fontFamily="inherit"
                    width="80px"
                    height="40px"
                    textAlign="center"
                    paddingLeft="15px"
                    marginTop="10px"
                    type="number"
                    value={mintAmount}
                  />
                  <Button
                    backgroundColor="#4079DC"
                    borderRadius="50px"
                    boxShadow="0px 2px 2px 1px #0F0F0F"
                    width="50px"
                    color="white"
                    cursor="pointer"
                    fontFamily="inherit"
                    padding="15px"
                    marginTop="10px"
                    onClick={handleIncrement}
                  >
                    <Text style={{fontFamily:"Ghostmeat"}}>+</Text>
                  </Button>
                </Flex>
                <Button
                  backgroundColor="#4079DC"
                  borderRadius="30px"
                  boxShadow="0px 2px 2px 1px #0F0F0F"
                  color="white"
                  cursor="pointer"
                  fontFamily="inherit"
                  fontSize="20px"
                  padding="10px"
                  marginTop="10px"
                  marginLeft="64px"
                  onClick={handleMint}
                >
                  MINT
                </Button>
              </div>
            ) : (
              <Text
                marginTop="70px"
                fontSize="30px"
                etterSpacing="-5.5%"
                fontFamily="Gwibble"
                textShadow="0 3px #0F0F0F"
                color="orange"
              >
                Connect before finding Meebles
              </Text>
            )}
          </Suspense>
        </Box>
        <Box>
          <Suspense fallback={<Loading />}></Suspense>
        </Box>
      </Container>
    </Section>
  );
};

export default Home;
