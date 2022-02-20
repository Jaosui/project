import React from 'react'
import Header from '../components/Header'
import ReactDOM from 'react-dom';
import Carousel from '../components/carousel'
import NewsContent from '../components/NewsContent';
//import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ContentBox from '../components/ContentBox';
//import { motion } from 'framer-motion/dist/framer-motion'


export default function index() {
  return (
    <div style={{backgroundColor: '#4c4556', height: '100vh'}}>
      <Header/> 
      {/* <Carousel/> */}
      <NewsContent />
      <ContentBox />
    </div>
  )
}
