import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import Theam from '../styles/Menu.module.css'
import ReactDOM from 'react-dom';
//import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
//import { Carousel } from 'react-responsive-carousel';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'




export default function Header() {
    const { Header, Content, Footer } = Layout;
    const navMenu = ["1","2","3"]
    const loginStyle = {
        position: "absolute",
        right: "0"
    }

    return (
        <div>
            <Layout className="layout">
    <Header>
    <Swiper navigation={true} className="mySwiper">
  <SwiperSlide>Slide 1</SwiperSlide><SwiperSlide>Slide 2</SwiperSlide><SwiperSlide>Slide 3</SwiperSlide><SwiperSlide>Slide 4</SwiperSlide><SwiperSlide>Slide 5</SwiperSlide><SwiperSlide>Slide 6</SwiperSlide><SwiperSlide>Slide 7</SwiperSlide><SwiperSlide>Slide 8</SwiperSlide><SwiperSlide>Slide 9</SwiperSlide>
  </Swiper>
      <div className="Theam.logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      <Menu.Item key="1">KAM</Menu.Item>
      <Menu.Item key="2">KPOP CONEBACK UPDATE</Menu.Item>
        <Menu.Item key="3">KPOP PROFILE</Menu.Item>
        <Menu.Item key="4">KPOP LIGHTSTICK</Menu.Item>
        <Menu.Item key="5">CHAT BOARD</Menu.Item>
        <Menu.Item key="5" style={loginStyle}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmM0n9cVYy34DUgMM3prFfSUBBOxHSq19itw&usqp=CAU" width={80} height={40}></img></Menu.Item>
      </Menu>
     

  
    </Header>
  </Layout>
  <>
  
</>
        </div>
    )
}


