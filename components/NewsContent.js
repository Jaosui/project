import React from 'react';
import ImageSlider from "./ImageSlider";
import { IMAGES } from "../data/data";


export default function NewsContent() {
  return (
    <>
    <h2>contents</h2>
      <div className='container'>
        <ImageSlider images={IMAGES} />
      </div>
    </>
      
  );
}
