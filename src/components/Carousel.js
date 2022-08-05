import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import "swiper/modules/effect-cards/effect-cards.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";

import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";

import img1 from "../assets/Nfts-2/1.png";
import img2 from "../assets/Nfts-2/2.png";
import img3 from "../assets/Nfts-2/3.png";
import img4 from "../assets/Nfts-2/4.png";
import img5 from "../assets/Nfts-2/5.png";
import img6 from "../assets/Nfts-2/6.png";
import img7 from "../assets/Nfts-2/7.png";
import img8 from "../assets/Nfts-2/8.png";
import img9 from "../assets/Nfts-2/9.png";
import img10 from "../assets/Nfts-2/10.png";
import img11 from "../assets/Nfts-2/11.png";

import Arrow from "../assets/Arrow.svg";

const Container = styled.div`
  width: 25vw;
  height: 50vh;

  @media (max-width: 75em) {
    height: 40vh;
  }

  @media (max-width: 64em) {
    height: 43vh;
    width: 30vw;
  }
  @media (max-width: 54em) {
    height: 43vh;
    width: 35vw;
  }
  @media (max-width: 48em) {
    height: 45vh;
    width: 40vw;
  }
  @media (max-width: 44em) {
    height: 40vh;
    width: 40vw;
  }
  @media (max-width: 40em) {
    height: 38vh;
    width: 45vw;
  }
  @media (max-width: 30em) {
    height: 35vh;
    width: 50vw;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    background-color: #EEEDDE ;

    border-radius: 20px;

    display: flex;

    justify-content: center;
    align-items: center;

    img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }

  .swiper-button-next {
    color: ${(props) => props.theme.text};
    right: 0;
    width: 4rem;
    top: 60%;

    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after {
      display: none;
    }

    @media (max-width: 64em) {
      width: 3rem;
    }
    @media (max-width: 30em) {
      width: 2rem;
    }
  }
  .swiper-button-prev {
    color: ${(props) => props.theme.text};
    left: 0;
    top: 60%;
    width: 4rem;
    transform: rotate(180deg);
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after {
      display: none;
    }
    @media (max-width: 64em) {
      width: 3rem;
    }
    @media (max-width: 30em) {
      width: 2rem;
    }
  }
`;

const Carousel = () => {
  return (
    <Container>
      <Swiper
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          type: "fraction",
        }}
        scrollbar={{
          draggable: true,
        }}
        modules={[EffectCards, Navigation, Autoplay]}
        // , Pagination => count img
        // navigation={true}
        effect={"cards"}
        grabCursor={true}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <img width={500} height={400} src={img1} alt="Meeble" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img width={500} height={400} src={img2} alt="Meeble" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img width={500} height={400} src={img3} alt="Meeble" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img width={500} height={400} src={img4} alt="Meeble" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img width={500} height={400} src={img5} alt="Meeble" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img width={500} height={400} src={img6} alt="Meeble" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img width={500} height={400} src={img7} alt="Meeble" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img width={500} height={400} src={img8} alt="Meeble" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img width={500} height={400} src={img9} alt="Meeble" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img width={500} height={400} src={img10} alt="Meeble" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img width={500} height={400} src={img11} alt="Meeble" />{" "}
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Carousel;
