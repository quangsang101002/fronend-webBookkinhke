import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import logo from "../../../assets/images/logo-baothanhnie.png";
import logoexpres from "../../../assets/images/logo-express.jpg";
import logovtv3 from "../../../assets/images/logo-vtv3.png";

// import specialty from "../../../assets/specialty/121042-than-kinh.jpg";
<image src="../../"></image>;
class About extends Component {
  render() {
    return (
      <div className=" section-about">
        <div className="section-about-content">
          <div className="section-about-content-left">
            <div className="section-about-title">
              <h1>Truyền thông nói về Sunground</h1>
            </div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/cbDbT4mK26U"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullscreen
            ></iframe>
          </div>
          <div className="section-about-content-right">
            <img src={logo}></img>
            <img src={logovtv3}></img> <br></br>
            <img src={logoexpres}></img>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
