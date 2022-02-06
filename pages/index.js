import React from 'react'
import Header from '../components/Header'
import ReactDOM from 'react-dom';
import Carousel from '../components/carousel'
//import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Slider from "react-slick";



export default function index() {
  return (
    <div>
      <Header/> 
      <Carousel/>
      
    </div>
  )
}
