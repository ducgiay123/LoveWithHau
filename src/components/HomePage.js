import React from "react";
import "./homePage.css";
import Avatar from "@mui/material/Avatar";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import BackgroundImg from "../Asserts/kissing.jpg";
import Trung from "../Asserts/trung.jpg";
import Hau from "../Asserts/hau.jpg";
const HomePage = () => {
  return (
    <div className="homePage" id="home">
      <img className="backgroundImg" src={BackgroundImg} alt=""></img>
      <div className="maskContent">
        <div className="sectionTitle">
          <h1>We are lovers</h1>
        </div>
        <div className="introContainer">
          <div className="personContainer">
            <div className="topBlock">
              <div className="personName">
                <h2>Duc Trung</h2>
                <h3>Vu</h3>
                <div className="icons">
                  <EmailIcon fontSize="small" />
                  <FacebookIcon fontSize="small" />
                  <InstagramIcon fontSize="small" />
                </div>
              </div>
              <div className="personAvatar">
                <Avatar
                  alt="Trung"
                  src={Trung}
                  style={{ width: "120px", height: "120px" }}
                />
              </div>
            </div>
            <div className="bottomBlock">
              <h4>
                I am Vu Duc Trung from Da Nang city aka DUCGIAY
                <br />
                Currently i am studying Information technology
                <br />
                in Finland. Born in 1999. Life style is working
                <br />
                till the death.
              </h4>
            </div>
          </div>
          <div className="heart">
            <img
              src="https://lmpixels.com/demo/ourlove/our-love-responsive-wedding-template/images/heart_img.png"
              alt=""
            />
          </div>
          <div className="personContainer">
            <div className="topBlock">
              <div className="personAvatar" style={{ marginLeft: "5%" }}>
                <Avatar
                  alt="Hau"
                  src={Hau}
                  style={{ width: "120px", height: "120px" }}
                />
              </div>
              <div
                className="personName"
                style={{ marginRight: "15%", marginLeft: "0%" }}
              >
                <h2>Phuc Hau</h2>
                <h3>Nguyen Thi</h3>
                <div className="icons">
                  <InstagramIcon fontSize="small" />
                  <FacebookIcon fontSize="small" />
                  <EmailIcon fontSize="small" />
                </div>
              </div>
            </div>
            <div className="bottomBlock">
              <h4>
                I am Nguyen Thi Phuc Hau from Phu Yen province.
                <br />
                Currently I am studying Public Relation in Ho Chi
                <br />
                Minh city. Born 2003. Life style is being miss
                <br />
                friendly to everyone
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
