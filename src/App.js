/* eslint-disable */
import React, { useState, useEffect, Suspense } from "react";
import { ethers, BigNumber } from "ethers";
import { ToastContainer, toast } from 'material-react-toastify';
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import About from "./components/sections/About";

import './App.css';
import 'material-react-toastify/dist/ReactToastify.css';
import styled from "styled-components";
import Loading from "./components/Loading";
import abi from "./utils/Meeble.json";

import miningSVG from './assets/3dprinting.svg';
import confirmedSVG from './assets/checked_contract.svg';
import dropSVG from './assets/drop.svg';

//------------------------------------//
import img from './assets/bg.gif';
import Logo from "./components/Logo";
import Twitter from "./assets/social-media-icons/twitter(1).png";
import Ether from "./assets/social-media-icons/Etherscan1.png";
import OpenSea from "./assets/social-media-icons/Opensea1.png";
import Lookrere from "./assets/social-media-icons/lookrare1.png";
import X2Y2 from "./assets/social-media-icons/x2y2.png";
import { light } from "./styles/Themes";
import { BrowserRouter } from "react-router-dom";
import { Button, ChakraProvider, Flex, Input, Text } from "@chakra-ui/react";
import TypeWriterText from "./components/TypeWriterText";

//-----------------------------------//
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
    background-color: ${(props) => `rgba(${props.theme.bodyRgba})`};
    opacity : 0.85;
    backdrop-filter: blur(25px);
    transform: ${(props) => props.click ? "translateY(0)" : `translateY(95%)`};
    transition: all 0.3s ease;
    flex-direction: column;
    justify-content: center;
    aligh-item : start;

    touch-action: none;
  }
`;

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
  justify-content: left;
  align-items: left;

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
  padding-top: 30px;
`;


const TESTNET_SITE = true;

// ** Immutables
const BUILDSPACE_TWITTER_HANDLE = "_buildspace";
const BUILDSPACE_TWITTER_LINK = `https://twitter.com/${BUILDSPACE_TWITTER_HANDLE}`;
const TWITTER_HANDLE = 'andreasbigger';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;
const CONTRACT_ADDRESS = TESTNET_SITE ?
  "0xC26a682B7883Eb177c7A9770D2F54E7AdC62f190":
//"0x9548a49f25b1C80FB451ec40cC0401C067D4F6AF" :
  "0x0"
;
const CONTRACT_ABI = abi.abi;
const OPENSEA_COLLECTION_URL = TESTNET_SITE ?
  "https://testnets.opensea.io/collection/the-epics-v2" :
  "https://opensea.io/collection/the-epics-v2"
;

const DEPLOYED_CHAINS = [4];

export default function App() {
  const [currAccount, setCurrentAccount] = useState(null);
  const [currMintCount, setCurrMintCount] = useState(0);
  const [maxMintCount, setMaxMintCount] = useState(6969);
  const [myEpicNfts, setMyEpicNfts] = useState([]);
  const [toastLink, setToastLink] = useState("");
  const [chainId, setChainId] = useState(1);
  const [FreeCount, setFreeCount] = useState(0);
  const [TotalFreeCount,setTotalFreeCount] = useState(3000);

  // ** Mining state variables
  const [isMining, setIsMining] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  // ** Gallery Vars
  const [initialLoading, setInitialLoading] = useState(true);
  const [loadingGallery, setLoadingGallery] = useState(false);


  // ** Refactored get chain id logic from provider
  const getChainId = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const { chainId } = await provider.getNetwork()
    setChainId(chainId);
  }

  // ** Try to connect to wallet
  const checkIfWalletIsConnected = () => {
    const { ethereum } = window;
    if(!ethereum) {
      toast.error('🦊 Missing Metamask!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return
    }  

    // ** Try to get access to the user's wallet
    ethereum.request({ method: 'eth_accounts' })
    .then((accounts) => {
      // ** There could be multiple accounts
      if(accounts.length !== 0) {
        // ** Get the first account
        let account = accounts[0].toString().toLowerCase();

        // ** Get the chainId
        getChainId();

        // ** Store the account
        setCurrentAccount(account);

        // ** Load Account Gallery
        //loadGallery(account);

        // ** Get the contract mint count info
        getMintCounts();

        // **Get te contract total FreeCount
        

        // ** Set up our event listener
        setupEventListener(account);
      } else {
        // toast.error('No authorized accounts found! Please connect a metamask account!', {
        //   position: "bottom-right",
        //   autoClose: 3000,
        //   hideProgressBar: true,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        // });
      }
    })
  }

  // const loadGallery = async (account) => {
  //   setLoadingGallery(true);
  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   const signer = provider.getSigner();
  //   const eContract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
  //   let eventFilter = eContract.filters.EpicMinted();
  //   let events = await eContract.queryFilter(eventFilter)
  //   let tokens = [];
  //   await Promise.all(events.map(async (e, i) => {
  //     let tx_res = await e.getTransaction();
  //     let address = tx_res.from.toString().toLowerCase();
  //     if(address.trim() === account.trim()) {
  //       tokens.push({ tokenId: i, address: address });
  //     }
  //   }));
  //   setMyEpicNfts(tokens);
  //   setLoadingGallery(false);
  // }

  const connectWallet = () => {
    const { ethereum } = window;

    if(!ethereum) {
      toast.error('🦊  Metamask!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }

    ethereum.request({ method: 'eth_requestAccounts' })
    .then((accounts) => {
      let account = accounts[0].toString().toLowerCase();
      setCurrentAccount(account);

      // ** Get the chainId
      getChainId();

      // ** Get the contract mint count info
      getMintCounts();

      // ** Set up our event listener
      setupEventListener(account);

      // ** Refresh page
      checkIfWalletIsConnected();
    })
    .catch((e) => {
      toast.error('Failed to load metamask accounts! Please refresh the page!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    })
  }
  const [_qty, setMintAmount] = useState(1);
  const askContractToMintNft = async () => {
    
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

        console.log("Going to pop wallet now to pay gas...")
        let nftTxn;
        
        
        try {
          nftTxn = await connectedContract.FindMeeble(BigNumber.from(_qty), {
            value: ethers.utils.parseEther((0.006969 * _qty).toString()),
          });
        } catch (er) {
          toast.error('Rejected Transaction', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          return;
        }
        setIsMining(true);

        console.log("Minting...please wait.")
        await nftTxn.wait();
        setIsMining(false);

        console.log(`Minted, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`);
        setIsConfirmed(true);
        setTimeout(() => setIsConfirmed(false), 4000);
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      toast.error('Failed to mint, please try again!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }
  // const askContractToxMintNft = () => {
  //   let cost = 6969000000;
  //   let gasLimit = 3000000;
  //   let totalCostWei = String(cost * _qty);
  //   let totalGasLimit = String(gasLimit * _qty);
  //   console.log("Cost: ", totalCostWei);
  //   console.log("Gas limit: ", totalGasLimit);
    
  //   setClaimingNft(true);
  //   blockchain.smartContract.methods
  //     .FindMeeble(_qty)
  //     .send({
  //       gasLimit: String(totalGasLimit),
  //       to: 0x3500b4fd854bb1523b0c086c5497084689859aec,
  //       from: blockchain.account,
  //       value: totalCostWei,
  //     })
  //     .once("error", (err) => {
  //       console.log(err);
  //       setFeedback("Sorry, something went wrong please try again later.");
  //       setClaimingNft(false);
  //     })
  //     .then((receipt) => {
  //       console.log(receipt);
  //       setFeedback(
  //         `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
  //       );
  //       setClaimingNft(false);
  //       dispatch(fetchData(blockchain.account));
  //     });
  // };
  // ** Refactor logic to fetch the MAX_MINT_COUNT and the current tokenId
  const getMintCounts = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const eContract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
      let max_count = await eContract.MeebleCreatures();
      setMaxMintCount(max_count.toNumber());
      let curr_count = await eContract.totalSupply();
      setCurrMintCount(curr_count.toNumber());
      let free_count = await eContract.TotalFreeCount();
      setFreeCount(free_count.toNumber());
      let totalfree_count = await eContract.TotalFreeMeeble();
      setTotalFreeCount(totalfree_count.toNumber());
    } catch (e) {
      toast.error('Wrong network, Connect to the Ethereum network now!!!', {
        position: "bottom-right",
        
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }

  // ** Setup our listener
  const setupEventListener = async (account) => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

        connectedContract.on("FindMeeble", (id, from) => {
          let tokenId = id.toNumber();
          // let sender = from;

          // ** Update the current minted count
          setCurrMintCount(tokenId + 1);

          // ** Load new Gallery
          loadGallery(account);

          // ** Set toast link
          setToastLink(`https://testnets.opensea.io/assets/${CONTRACT_ADDRESS}/${tokenId}`);

          toast(`You save The Meebles`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });

          // ** Reset Toast link after toast duration
          setTimeout(() => setToastLink(OPENSEA_COLLECTION_URL), 5000);
        });
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      toast.warn('Not your fault, we failed to set up notifications for minting! This means you\'ll have to refresh the page when you finish minting :)', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }
  const handleDecrement = () => {
    if (_qty <= 1) return;
    setMintAmount(_qty - 1);
  };

  const handleIncrement = () => {
    if (_qty >= 6) return;
    setMintAmount(_qty + 1);
  };
  const [click, setClick] = useState(false);
  useEffect(() => {
    checkIfWalletIsConnected();
    // ** After 4 seconds (one dropping animation cycle) we want to set initial load to false
    setTimeout(() => setInitialLoading(false), 4000);
  }, [])
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      <BrowserRouter>
      <GlobalStyles />
      <ThemeProvider theme={light}>
    <Section id="home" style={{ transform: `translateY(${offsetY * 0.15}px)` }}>
      
    
      <a
        href={toastLink}
        target="_blank"
        rel="noreferrer"
      >
        <ToastContainer />
      </a>
      <NavBar>
      <Logo/>
      <HamburgerMenu click={click} onClick={() => setClick(!click)}>
          &nbsp;
        </HamburgerMenu>
        
        <Menu click={click}>
          <MenuItem>
            <a
              href="https://twitter.com/TheLostMeebles"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Twitter} width="60px"></img>
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="http://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Ether} width="60px"></img>
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="http://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={OpenSea} width="60px"></img>
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="http://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Lookrere} width="60px"></img>
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="http://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={X2Y2} width="60px"></img>
            </a>
          </MenuItem>
         </Menu>
         {/* if user is not connect wallet show connect button*/}
        <div>
         {currAccount ? ( DEPLOYED_CHAINS.includes(chainId) ? (
         <div>
            <Box margin="0 15px">
              <Text fontSize="25px" color="orange">
                Connected
              </Text>
            </Box>
          </div>
              ) : (
            <Box margin="0 15px">
              <Text fontSize="25px" color="orangered" align="center">
                  Wrong Network
              </Text>
              </Box>) 
          ) : (
              <div style={{display: 'flex', flexDirection: 'column', margin: 'auto'}}>
                <Button backgroundColor="#4079DC"
              borderRadius="50px"
              boxShadow="0px 2px 2px 1px #0F0F0F"
              color="white"
              cursor="pointer"
              fontFamily="inherit"
              padding="15px"
              margin="0 15px" onClick={connectWallet}>
                  Connect Wallet
                </Button>
              </div>
            )}
        </div>
      </NavBar>

      <Container style={{ transform: `translateY(${offsetY * 0.25}px)` }}>
              <Box>
                <Suspense fallback={<Loading />}>
                  
                  <TypeWriterText />
                </Suspense>
              
       
      
    
          
          {/* show how many NFTs were minted after connect wallet*/}
          {DEPLOYED_CHAINS.includes(chainId) ? (
            <div style={{padding : '20px'}}>
              <span className="bio-text">{currMintCount}/{maxMintCount}</span> 
            </div>
          ) : null}

            {/* show mint button*/}
          <div style={{display: 'flex', flexDirection:'column'}}>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: 'auto'}}>
              {currAccount && !isMining && !isConfirmed ? (
                <><Flex align="center" justify="center">
                        <Button
                          backgroundColor="#4079DC"
                          borderRadius="50px"
                          boxShadow="0px 2px 2px 1px #0F0F0F"
                          color="white"
                          width="50px"
                          cursor="pointer"
                          fontFamily="inherit"
                          marginRight="5px"
                          padding="15px"
                          marginTop="10px"
                          onClick={handleDecrement}
                        >
                          <Text style={{ fontFamily: "Ghostmeat" }}>-</Text>
                        </Button>
                        <Input
                          readOnly
                          fontFamily="inherit"
                          borderRadius="50px"
                          fontSize="30px"
                          width="80px"
                          height="40px"
                          textAlign="center"
                          paddingLeft="15px"
                          marginTop="10px"
                          type="number"
                          value={_qty} />
                        <Button
                          backgroundColor="#4079DC"
                          borderRadius="50px"
                          boxShadow="0px 2px 2px 1px #0F0F0F"
                          width="50px"
                          color="white"
                          cursor="pointer"
                          fontFamily="inherit"
                          marginLeft="5px"
                          padding="15px"
                          marginTop="10px"
                          onClick={handleIncrement}
                        >
                          <Text style={{ fontFamily: "Ghostmeat" }}>+</Text>
                        </Button>
                      </Flex>
                      
                     {FreeCount <= TotalFreeCount ? (
                        <Button
                        disabled={(currMintCount >= maxMintCount || !DEPLOYED_CHAINS.includes(chainId)) ? true : false}
                        
                        marginTop="20px"
                        background="-webkit-linear-gradient(left, #ce73da, #35aee2)"
                        background-size=" 200% 200%"
                        animation="gradient-animation 4s ease infinite"
                        // backgroundColor="#4079DC"
                        borderRadius="50px"
                        boxShadow="0px 2px 2px 1px #0F0F0F"
                        color="white"
                        cursor="pointer"
                        fontFamily="inherit"
                        fontSize="20px"
                        color="black"
                        padding="10px"
                        onClick={askContractToMintNft}
                        style={{
                          opacity: (currMintCount >= maxMintCount || !DEPLOYED_CHAINS.includes(chainId)) ? 0.5 : 1,
                        }}
                      >
                          Mint
                        </Button>
                      ) : ( 
                        <Button
                        disabled={(currMintCount >= maxMintCount || !DEPLOYED_CHAINS.includes(chainId)) ? true : false}
                        
                        marginTop="20px"
                        background="-webkit-linear-gradient(left, #ce73de, #35aee2)"
                        background-size=" 200% 200%"
                        animation="gradient-animation 4s ease infinite"
                        // backgroundColor="#4079DC"
                        borderRadius="50px"
                        boxShadow="0px 2px 2px 1px #0F0F0F"
                        color="white"
                        cursor="pointer"
                        fontFamily="inherit"
                        fontSize="20px"
                        color="black"
                        padding="10px"
                        onClick={askContractToMintNft}
                        style={{
                          opacity: (currMintCount >= maxMintCount || !DEPLOYED_CHAINS.includes(chainId)) ? 0.5 : 1,
                        }}
                      >
                          Mint
                        </Button>)
                      }
                        </>
              ) : null}

              
              
            </div>

            {/*minting loading logo*/}
            {currAccount && isMining && !isConfirmed ? (
              <div style={{display: 'flex', flexDirection: 'column', margin: 'auto'}}>
                <img alt="Mining Logo" className="mining-logo" src={miningSVG} />
                <p style={{ fontStyle: 'italic', color: 'white', paddingBottom: '0.5em' }}>your transaction is being mined...</p>
              </div>
            ) : null}

            {/*confirm tx logo*/}
            {currAccount && !isMining && isConfirmed ? (
              <div style={{display: 'flex', flexDirection: 'column', margin: 'auto'}}>
                <img alt="Confirmed Logo" className="confirmed-logo" src={confirmedSVG} /
                >
              </div>
            ) : null}
              {/* if user is not connect wallet show connect button*/}
            {currAccount ? null : (
              <div style={{display: 'flex', flexDirection: 'column', margin: 'auto'}}>
                <Button backgroundColor="#4079DC"
              borderRadius="50px"
              boxShadow="0px 2px 2px 1px #0F0F0F"
              color="white"
              cursor="pointer"
              fontFamily="inherit"
              padding="15px"
              margin="0 15px" onClick={connectWallet}>
                  Connect Wallet
                </Button>
                <div style={{display: 'flex', flexDirection: 'column', margin: 'auto' }}>
                <p className="sub-text" style={{padding: '20px'}}>
                  Connect wallet to start finding Meebles
                </p>
              </div>
              </div>
            )}
          </div>
          
          
        </Box>
        </Container>
    
    
    </Section>
    <About/>
    </ThemeProvider>
    </BrowserRouter>
    </main>
  );
}

const A = (props) => <a className="text-blue-500 no-decoration" {...props} />;