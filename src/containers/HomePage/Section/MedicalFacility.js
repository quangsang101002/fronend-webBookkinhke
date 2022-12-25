import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";

class MedicalFacility extends Component {
  render() {
    return (
      <div className="section-share section-medical-specialty">
        <div className="section-content">
          <div className="section-header">
            <h1 className="title-section">Cơ sở y tế nổi bật</h1>
            <button className="btn-section">Xem thêm</button>
          </div>
          <div className="section-body">
            <Slider {...this.props}>
              <div className="section-customize">
                <div className="bg-image section-medical-specialty "></div>
                <div>Bệnh viện quốc tế Việt Đức</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-specialty "></div>
                <div>cơ xương khớp</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-specialty "></div>
                <div>cơ xương khớp</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-specialty "></div>
                <div>cơ xương khớp</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-specialty "></div>
                <div>cơ xương khớp</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-specialty "></div>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
