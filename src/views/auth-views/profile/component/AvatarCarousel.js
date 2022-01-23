import React from "react";
import "../css/AvatarCarousel.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Row } from "antd";
import "../css/AvatarCarousel.css";
import { HomeImage } from "constant/ImageConstant";

const CarouselData = [
  {
    img: HomeImage.CoverSection.CardImage4,
    Caption: "Notable Naffles",
    Remain: 23,
    Price: "$4.5",
  },
  {
    img: HomeImage.CoverSection.CardImage4,
    Caption: "Notable Naffles",
    Remain: 12,
    Price: "$6.5",
  },
  {
    img: HomeImage.CoverSection.CardImage4,
    Caption: "Notable Naffles",
    Remain: 45,
    Price: "$3.5",
  },
];

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
      <div className="ProfileCarouselRow">
        <Row className="ProfileBNBCCaption">Naffles in wallet</Row>
        <Carousel className="ProfileCarousel" responsive={responsive} infinite>
          {CarouselData.map((post, indx) => {
            return (
              <div className="Profilecard text-left mt-5" key={indx}>
                <div className="ProfileCardImgCover">
                  <img
                    style={{ height: "400px", width: "400px" }}
                    src={post.img}
                    alt="Alt text"
                    draggable="false"
                    className="ProfileBlogger"
                  />
                </div>
                <img alt="" className="ProfileCenterCircle" src={post.img} />
                <div className="Profilecard-body">
                  <h5 className="Profilecard-title">{post.Caption}</h5>
                  <div className="Profilecard-text">{post.Remain}</div>
                  <div className="Profilecard-price">{post.Price}</div>
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
