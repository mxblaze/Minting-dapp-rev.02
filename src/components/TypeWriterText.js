import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Button from "./Button";

const Title = styled.h2`
  font-size: 28px;
  text-shadow :1px 1px black;
  text-transform: capitalize;
  width: 100%;
  /* padding-bottom: 100px; */
  color: white;
  align-self: flex-start;
  align-items: center;

  span {
    text-transform: uppercase;
    font-family: "Gwibble", cursive;
  }
  .text-1 {
    color: orange;
  }
  .text-2 {
    color: yellow;
  }
  .text-3 {
    color: #FF4500;
  }
  }
  .text-4 {
    color: #DDA0DD;
  }
  }
  .text-5 {
    color: #7FFF00;
  }
  }
  .text-6 {
    color: #FFA07A;
  }
  .text-7 {
    color: #C71585;
  }
  .text-8 {
    color: #40E0D0;
  }
  .text-9 {
    color: #DC143;
  }
  @media (max-width: 70em) {
    font-size: 28px;
  }
  @media (max-width: 48em) {
    font-size: 28px;
    align-self: center;
    text-align: center;
  }
  @media (max-width: 32em) {
    font-size: 23px;
    width: 90%;
  }
`;
const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontmd};
  text-shadow: 1px 1px grey;
  color: ${(props) => `rgba(${props.theme.textRgba}, 0.2)`};
  font-weight: 600;
  margin-bottom: 1rem;
  width: 80%;
  align-self: center;
  align-tem: center;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontsm};
  }

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
`;

const ButtonContainer = styled.div`
  width: 90%;
  align-self: flex-start;

  @media (max-width: 400em) {
    align-self: center;
    text-align: center;

    button {
      margin: 0 auto;
    }
  }
`;
const TypeWriterText = () => {
  return (
    <>
      <Title>
        <br />
        1 free plus gas fees per wallet
        <div>
          Want to find more? : 0.006969 ETH <br />6 max per wallet{" "}
        </div>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(`<span class="text-7">#SaveMeebles</span>`)
              .pauseFor(2000)
              .deleteAll()
              .typeString(`<span class="text-5">#SaveMeebles</span>`)
              .pauseFor(2000)
              .deleteAll()
              .typeString(`<span class="text-1">#SaveMeebles</span>`)
              .pauseFor(2000)
              .deleteAll()
              .typeString(`<span class="text-8">#SaveMeebles</span>`)
              .pauseFor(2000)
              .deleteAll()
              .typeString(`<span class="text-6">#SaveMeebles</span>`)
              .pauseFor(2000)
              .deleteAll()
              .typeString(`<span class="text-9">#SaveMeebles</span>`)
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(`<span class="text-5">#FindTheLostMeebles</span>`)
              .pauseFor(2000)
              .deleteAll()
              .typeString(`<span class="text-4">#FindTheLostMeebles</span>`)
              .pauseFor(2000)
              .deleteAll()
              .typeString(`<span class="text-6">#FindTheLostMeebles</span>`)
              .pauseFor(2000)
              .deleteAll()
              .typeString(`<span class="text-2">#FindTheLostMeebles</span>`)
              .pauseFor(2000)
              .deleteAll()
              .typeString(`<span class="text-1">#FindTheLostMeebles</span>`)
              .pauseFor(2000)
              .deleteAll()
              .typeString(`<span class="text-3">#FindTheLostMeebles</span>`)
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(`<span class="text-1">Nuu DISCOD.</span>`)
              .pauseFor(1000)
              .deleteAll()
              .typeString(`<span class="text-2">Nuu RODMARP.</span>`)
              .pauseFor(1000)
              .deleteAll()
              .typeString(`<span class="text-3">Nuu UTILITEE.</span>`)
              .pauseFor(1000)
              .deleteAll()
              .typeString(`<span class="text-9">JUST VIB 'N CCo</span>`)
              .pauseFor(1000)
              .deleteAll()
              .typeString(`<span class="text-7">Nuu DISCOD.</span>`)
              .pauseFor(1000)
              .deleteAll()
              .typeString(`<span class="text-5">Nuu RODMARP.</span>`)
              .pauseFor(1000)
              .deleteAll()
              .typeString(`<span class="text-8">Nuu UTILITEE.</span>`)
              .pauseFor(1000)
              .deleteAll()
              .typeString(`<span class="text-6">JUST VIB 'N CCo</span>`)
              .pauseFor(1000)
              .deleteAll()
              .start();
          }}
        />
      </Title>
      <SubTitle style={{ color: "black" }}>
        TEAM RESERVE : 669 BECUASE WE NEED TOO
      </SubTitle>
      {/* <ButtonContainer>
        <Button text="MINT" link="#home" />
      </ButtonContainer> */}
      
    </>
  );
};

export default TypeWriterText;
