import React from "react";
import "../css/ProfileDataInfo.css";
import { Col, Row } from "antd";
// import { ProfileImage } from "constant/ImageConstant";
// import NftPriceCard from "./NftPriceCard";
// import { NafflesListBody, NafflesListHeader, ProfileCardData } from "data/ProfileData";
// import ProfileCardList from "./ProfileCardList";
// import { TransactionHeaderData,TransactionBodyData } from "data/ProfileData";
// import TransactionList from "./TransactionList";
import AvatarCarousel from './AvatarCarousel'

const ProfileDataInfo = () => {
  return (
    <>
      <Col className="UserProfile2">
        {/* <Card className="UserProfileCard">
          <Row className="CardInRow">
            <img
            alt=""
              className="UserAvatar2"
              src={ProfileImage.ProfileUserInfo.ProfileUserAvatar2}
            />
            <Col className="ProfileDes">
              <span className="UserLoginState">Name of Raffel User Is In</span>
              <a href="." className="ProfileView">View</a>
            </Col>
          </Row>
        </Card> */}
        <Row className="ProfileCardGrid">
          <AvatarCarousel/>
          {/* <NftPriceCard data={ProfileCardData} /> */}
          <Row className="StateBar" justify="center">
            <span className="StateDot"></span>
            <span className="StateDot BlueDot"></span>
            <span className="StateDot"></span>
          </Row>
        </Row>
        <div className="TransactionTest">
          <p className="TestCaption">Transaction History</p>
          <div className="TransactionContent">
            <p className="TempoText">Please put temporary content here that was here before</p>
          </div>
          <Row className="StateBar" justify="center">
            <span className="StateDot"></span>
            <span className="StateDot BlueDot"></span>
            <span className="StateDot"></span>
          </Row>
        </div>
        {/* <ProfileCardList header={TransactionHeaderData} body={TransactionBodyData} /> */}
        {/* <TransactionList header={NafflesListHeader} body={NafflesListBody} /> */}
      </Col>
    </>
  );
};

export default ProfileDataInfo;
