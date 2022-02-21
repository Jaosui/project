import React from 'react';
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import ImageSliderStyles from '../styles/ImageSlider.module.css'

export default function ImageSlider({ images, slidesToShow = 3 }) {
  const NextArrow = ({ onClick }) => {
    return (
      <div className={ImageSliderStyles.nextArrow} onClick={onClick}>
        <BsChevronRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className={ImageSliderStyles.prevArrow} onClick={onClick}>
        <BsChevronLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = React.useState(0);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: false,
    speed: 300,
    slidesToShow: slidesToShow,
    centerPadding: "0",
    swipeToSlide: true,
    focusOnSelect: true,
    nextArrow: <NextArrow onClick />,
    prevArrow: <PrevArrow onClick />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1490,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const templateImages = images.map((image, idx) => {
    if (image !== null) {
      return (
        <div
          className={idx === imageIndex ? "activeSlide" : ImageSliderStyles.slide}
          key={image.id} 
        >
          <button className={ImageSliderStyles.slideWrapper }>
            {image.code ? image.code : <img src={image.src} alt={image.alt} width='500' height='300' />}
            
          </button>
        </div>
      );
    }
    return null;
  });


  return (
    <Slider {...settings}>
      {templateImages}
    </Slider>
    
  );
}
