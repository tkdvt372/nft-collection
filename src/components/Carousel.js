/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation,EffectCards,Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from '../assets/Nfts/bighead.svg'
import img2 from '../assets/Nfts/bighead-1.svg'
import img3 from '../assets/Nfts/bighead-2.svg'
import img4 from '../assets/Nfts/bighead-3.svg'
import img5 from '../assets/Nfts/bighead-4.svg'
import img6 from '../assets/Nfts/bighead-5.svg'
import img7 from '../assets/Nfts/bighead-6.svg'
import img8 from '../assets/Nfts/bighead-7.svg'
import img9 from '../assets/Nfts/bighead-8.svg'
import img10 from '../assets/Nfts/bighead-9.svg'

import Arrow from '../assets/Arrow.svg';

const Container= styled.div`
width:25vw;
height:70vh;
@media (max-width: 70em) {
  height: 60vh;

}
@media (max-width: 64em) {
  height: 50vh;
  width:30vw;
  margin:2rem 0;
}
@media (max-width: 48em) {
  height: 50vh;
  width:40vw;
  margin:1rem 0;
}
@media (max-width: 40em) {
  height: 45vh;
  width:55vw;
  margin:1rem 0;

}
.swiper{
  height:100%;
  width:100%;
}

.swiper-slide{
  background-color:${props =>props.theme.carouselColor};
  border-radius:2rem;
  display: flex;
  justify-content:center;
  align-items: center;
  
}
.swiper-button-next{
  color:${props => props.theme.text};
  right:0;
  width:4rem;
  background-image:url(${Arrow});
  background-position:center;
  background-size:cover;
  top:60%;
  &::after{
    display:none;
  }
  @media (max-width: 64em) {
  width: 3rem;
  }
  @media (max-width: 30em) {
  width: 2rem;
  }
}
.swiper-button-prev{
  color:${props => props.theme.text};
  left:0;
  width:4rem;
  top:60%;
  transform:rotate(180deg);
  background-image:url(${Arrow});
  background-position:center;
  background-size:cover;
  &::after{
    display:none;
  }
  @media (max-width: 64em) {
  width: 3rem;
  }
  @media (max-width: 30em) {
  width: 2rem;
  }
}

`  
const Carousel = () => {
  return (
    <Container>
    <Swiper
        autoplay={
          {
            delay:2000,
            disableOnInteraction:false,
          }
        }
        scrollbar={{
          draggable:true,
        }}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards,Pagination, Navigation,Autoplay]}
        className="mySwiper"
        
      >
        <SwiperSlide><img src={img1} /></SwiperSlide>
        <SwiperSlide><img src={img2} /></SwiperSlide>
        <SwiperSlide><img src={img3} /></SwiperSlide>
        <SwiperSlide><img src={img4} /></SwiperSlide>
        <SwiperSlide><img src={img5} /></SwiperSlide>
        <SwiperSlide><img src={img6} /></SwiperSlide>
        <SwiperSlide><img src={img7} /></SwiperSlide>
        <SwiperSlide><img src={img8} /></SwiperSlide>
        <SwiperSlide><img src={img9} /></SwiperSlide>
        <SwiperSlide><img src={img10} /></SwiperSlide>
      </Swiper>
    </Container>
  )
}

export default Carousel