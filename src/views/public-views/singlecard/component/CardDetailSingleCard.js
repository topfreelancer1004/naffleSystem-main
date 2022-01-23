import { Col, Row, Radio } from "antd";
import React, { useState } from "react";
import "../css/CardDetailSingleCard.css";
import { ExploreImage } from "constant/ImageConstant";
import { Square, Upload, Share, ListUl } from "react-bootstrap-icons";
import ProfileCardList from "./ProfileCardList";
import { Clock } from "react-bootstrap-icons";

const options = [
  { label: <Square />, value: "Square" },
  { label: <Upload />, value: "Upload" },
  { label: <Share />, value: "Share" },
  { label: <ListUl />, value: "ListUl" },
];

const CardDetailSingleCard = () => {
  const [value3, setValue] = useState("");
  const onChange3 = (e) => {
    console.log("radio3 checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <>
      <Col className="CardDetailSingleCard">
        <Row className="NaffleEndDate">
          <Clock color="white" className="ClockIco" /> naffle ends November 3,
          2021 at 12:00 PST
        </Row>
        <Row className="EndNaffleCaption">BYTEOSAURUS</Row>
        <Row className="EndNaffleCaptionSmall" align="middle">
          BYTEOSAURUS
          <img
            alt=""
            className="SpecMark"
            src={ExploreImage.NftPriceCard.SpecMarkImg}
          />
        </Row>
        <Row className="EndCardPIRow">
          <Col className="EndCardPICol">
            <span className="EndCardCaption">Ticket Price</span>
            <Row className="EndMarkRow TicketRow">
              <img
                alt=""
                className="EndCardImg"
                src={ExploreImage.NftPriceCard.BlackArrow}
              />
              <span className="EndCardPrice TicketPrice1">0.29</span>
            </Row>
          </Col>
          <span className="SpecSplit"></span>
          <Col className="EndCardPICol">
            <span className="EndCardCaption">Ticket Price</span>
            <Row className="EndMarkRow" align="bottom">
              <span className="EndCardPrice">
                68 <span className="EndSlash">/</span>
                <span className="EndCardPriceSmall">150</span>
              </span>
            </Row>
          </Col>
        </Row>
        <Row align="middle" className="EndCardToolBar">
          <a href="." className="EndBuyTicket">
            BUY TICKET
          </a>
          <span className="SpecSplit2"></span>
          <Radio.Group
            options={options}
            onChange={onChange3}
            value={value3}
            optionType="button"
          />
        </Row>
        <Row className="OfferDes">
          <span className="OfferDesCaption">OFFERS</span>
          <span className="OfferDesText"></span>
        </Row>
        <ProfileCardList />
      </Col>
    </>
  );
};

export default CardDetailSingleCard;
