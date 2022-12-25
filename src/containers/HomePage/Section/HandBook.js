import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
// import "./Specialty.scss";
import Slider from "react-slick";

// import specialty from "../../../assets/specialty/121042-than-kinh.jpg";

class HandBook extends Component {
  render() {
    return (
      <div className="section-share section-handbook">
        <div className="section-content">
          <div className="section-header">
            <h1 className="title-section">Cẩm nang</h1>
            <button className="btn-section">Xem thêm</button>
          </div>
          <div className="section-body">
            <Slider {...this.props}>
              <div className="section-customize">
                <div className="bg-image section-handbook"></div>
                <div>cơ xương khớp</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-handbook"></div>
                <div>cơ xương khớp</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-handbook"></div>
                <div>cơ xương khớp</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-handbook"></div>
                <div>cơ xương khớp</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-handbook"></div>
                <div>cơ xương khớp</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-handbook"></div>
                <div>cơ xương khớp</div>
              </div>
            </Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
