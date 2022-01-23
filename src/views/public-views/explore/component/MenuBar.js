import React from "react";
import { Button,Input,Menu,Row,Select,Slider,Checkbox } from "antd";
import "../css/MenuBar.css";
import { ArrowLeftShort, CurrencyDollar } from "react-bootstrap-icons";

const { SubMenu } = Menu;
const { Option } = Select;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const handleClick = (e) => {
  console.log("click ", e);
};

const MenuBar = () => {

  return (
    <Menu
        onClick={handleClick}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      className="MenuBar"
    >
      <Row className="MenuHeader" align="middle">
        <span className="FilterMenu">Filter</span>
        <span className="Split"></span>
        <ArrowLeftShort color="white" className="ArrowShortIco" />
      </Row>
      <SubMenu className="SubMenu" key="sub1" title="Ticket Price">
        <Row className="SubMenuTool" justify="center">
          <Select
            defaultValue="USD"
            style={{ width: 220 }}
            onChange={handleChange}
            className="CurrencySelect"
          >
            <Option value="USD" className="Option"><CurrencyDollar className="CurrencyDollar" />United States Dollar (USD)</Option>
          </Select>
          <Row className="PricingSet" align="center" justify="center">
            <Checkbox className="HourlyConfirm" />
            <Input className="PricingMin" placeholder="Min"></Input>
            <div className="BetweenText">to</div>
            <Input className="PricingMax" placeholder="Max"></Input>
          </Row>
          <Row className="SliderPrice">
          <Slider range={{ draggableTrack: true }} style={{
            width:"100%"
          }} defaultValue={[20, 50]} />
          </Row>
          <Row className="ButtonRow">
            <Button className="ApplyButton">Apply</Button>
          </Row>
        </Row>
      </SubMenu>
      <SubMenu className="SubMenu" key="sub2" title="collections">

        <Menu.Item key="3" className="MenuItem">
          Trending
        </Menu.Item>
        <Menu.Item key="4" className="MenuItem">
          Art
        </Menu.Item>
        <Menu.Item key="5" className="MenuItem">
          Domains
        </Menu.Item>
        <Menu.Item key="6" className="MenuItem">
          Collectibles
        </Menu.Item>
        <Menu.Item key="7" className="MenuItem">
          music
        </Menu.Item>
      </SubMenu>
      <SubMenu className="SubMenu" key="sub3" title="categories">
      <Menu.Item key="8" className="MenuItem">
          Trending
        </Menu.Item>
        <Menu.Item key="9" className="MenuItem">
          Art
        </Menu.Item>
        <Menu.Item key="10" className="MenuItem">
          Domains
        </Menu.Item>
        <Menu.Item key="11" className="MenuItem">
          Collectibles
        </Menu.Item>
        <Menu.Item key="12" className="MenuItem">
          music
        </Menu.Item>
      </SubMenu>
      <SubMenu className="SubMenu" key="sub4" title="Number of tickets">
  
        <Menu.Item key="13" className="MenuItem">
          Trending
        </Menu.Item>
        <Menu.Item key="14" className="MenuItem">
          Art
        </Menu.Item>
        <Menu.Item key="15" className="MenuItem">
          Domains
        </Menu.Item>
        <Menu.Item key="16" className="MenuItem">
          Collectibles
        </Menu.Item>
        <Menu.Item key="17" className="MenuItem">
          music
        </Menu.Item>
      </SubMenu>
      <SubMenu className="SubMenu" key="sub5" title="categories">

      <Menu.Item key="18" className="MenuItem">
          Trending
        </Menu.Item>
        <Menu.Item key="19" className="MenuItem">
          Art
        </Menu.Item>
        <Menu.Item key="20" className="MenuItem">
          Domains
        </Menu.Item>
        <Menu.Item key="21" className="MenuItem">
          Collectibles
        </Menu.Item>
        <Menu.Item key="22" className="MenuItem">
          music
        </Menu.Item>
      </SubMenu>
      <SubMenu className="SubMenu" key="sub6" title="reward vs disk">

        <Menu.Item key="23" className="MenuItem">
          Trending
        </Menu.Item>
        <Menu.Item key="24" className="MenuItem">
          Art
        </Menu.Item>
        <Menu.Item key="25" className="MenuItem">
          Domains
        </Menu.Item>
        <Menu.Item key="26" className="MenuItem">
          Collectibles
        </Menu.Item>
        <Menu.Item key="27" className="MenuItem">
          music
        </Menu.Item>
      </SubMenu>
      <SubMenu className="SubMenu" key="sub7" title="categories">

      <Menu.Item key="28" className="MenuItem">
          Trending
        </Menu.Item>
        <Menu.Item key="29" className="MenuItem">
          Art
        </Menu.Item>
        <Menu.Item key="30" className="MenuItem">
          Domains
        </Menu.Item>
        <Menu.Item key="31" className="MenuItem">
          Collectibles
        </Menu.Item>
        <Menu.Item key="32" className="MenuItem">
          music
        </Menu.Item>
      </SubMenu>
      <SubMenu className="SubMenu" key="sub8" title="floor price">

        <Menu.Item key="33" className="MenuItem">
          Trending
        </Menu.Item>
        <Menu.Item key="34" className="MenuItem">
          Art
        </Menu.Item>
        <Menu.Item key="35" className="MenuItem">
          Domains
        </Menu.Item>
        <Menu.Item key="36" className="MenuItem">
          Collectibles
        </Menu.Item>
        <Menu.Item key="37" className="MenuItem">
          music
        </Menu.Item>
      </SubMenu>
      <SubMenu className="SubMenu" key="sub9" title="categories">

        <Menu.Item key="38" className="MenuItem">
          Trending
        </Menu.Item>
        <Menu.Item key="39" className="MenuItem">
          Art
        </Menu.Item>
        <Menu.Item key="40" className="MenuItem">
          Domains
        </Menu.Item>
        <Menu.Item key="41" className="MenuItem">
          Collectibles
        </Menu.Item>
        <Menu.Item key="42" className="MenuItem">
          music
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default MenuBar;
