import React, { Component } from "react";
import Slider from "react-slick";
import {Button,Image} from 'antd';


export default class CenterMode extends Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            centerPadding: '60px',
            infinite: true,
            slidesToShow: 3,
            speed: 500,
            autoplay:true,
            autoplayspeed:1000
          };
      return (
        <div>
          <h2>Center Mode</h2>
          <Slider {...settings}>
            <div>
            <img src ="https://www.allkpop.com/upload/2021/11/content/110855/1636638922-20211111-mark.jpg" alt ='' width="150" height="150"/> 
            </div>
            <div>
              <img src ="https://pbs.twimg.com/media/FJRiRdOacAkR0u7.jpg" width="150" height="150"/>
            </div>
            <div>
            <img src ="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/canvas/2021/11/16/f54e5282-df76-43e4-a389-9effc89e46d8_7f1f4921.jpg?itok=KLSr8S5u&v=1637031730"  width="150" height="150"/>
            </div>
            <div>
              
            </div>
            <div>
              
            </div>
            <div>
              
            </div>
          </Slider>
        </div>
      );
    }
  }
  