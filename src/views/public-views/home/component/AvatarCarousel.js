import React from "react";
import "../css/AvatarCarousel.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import {Row} from 'antd';
import "../css/AvatarCarousel.css";
import { HomeImage } from "constant/ImageConstant";

const CarouselData=[
  {
    img:HomeImage.CoverSection.CardImage1,
    Caption:"Notable Naffles",
    Remain:23,
    Price:"$4.5"
  },
  {
    img:HomeImage.CoverSection.CardImage2,
    Caption:"Notable Naffles",
    Remain:12,
    Price:"$6.5"
  },
  {
    img:HomeImage.CoverSection.CardImage3,
    Caption:"Notable Naffles",
    Remain:45,
    Price:"$3.5"
  }
]

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 980 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 990, min: 766 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 690, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const AvatarCarousel = () => {
  return (
    <>
      <div className="HomeCarouselRow">
        {/* <Row justify="center" className="HomeBNBCCaption">
                  Browse Naffles By Category
                  </Row> */}
        <Carousel className="HomeCarousel" responsive={responsive} infinite>
          {CarouselData.map((post, indx) => {
            return (
              <div className="Homecard text-left mt-5" key={indx}>

                <div className="HomeCardImgCover">
                <img
                  style={{ height: "400px",width:"400px"}}
                  src={post.img}
                  alt="Alt text"
                  draggable="false"
                  className="HomeBlogger"
                  />
                  </div>
                  <img alt="" className="HomeCenterCircle" src={post.img} />
                <div className="Homecard-body">
                  <h5 className="Homecard-title">{post.Caption}</h5>
                  <div className="Homecard-text">
                    {
                      post.Remain
                    }
                  </div>
                  <div className="Homecard-price">
                    {
                      post.Price
                    }
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default AvatarCarousel;
