import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";

class OutStandingDoctor extends Component {
  render() {
    return (
      <div className="section-share section-outstanding">
        <div className="section-content">
          <div className="section-header">
            <h1 className="title-section">Bác sĩ nổi bật tuần qua</h1>
            <button className="btn-section">Xem thêm</button>
          </div>
          <div className="section-body">
            <Slider {...this.props}>
              <div className="section-wrapper">
                <div className="section-customize-body">
                  <div className="bg-image section-outstanding-doctor "></div>
                  <div className="position-text-center">
                    <div>GS.TS Nguyễn Quang Sáng</div>
                    <div>Cơ xương khớp</div>
                  </div>
                </div>
              </div>
              <div className="section-wrapper">
                <div className="section-customize-body">
                  <div className="bg-image section-outstanding-doctor "></div>
                  <div className="position-text-center">
                    <div>GS.TS Nguyễn Quang Sáng</div>
                    <div>Cơ xương khớp</div>
                  </div>
                </div>
              </div>
              <div className="section-wrapper">
                <div className="section-customize-body">
                  <div className="bg-image section-outstanding-doctor "></div>
                  <div className="position-text-center">
                    <div>GS.TS Nguyễn Quang Sáng</div>
                    <div>Cơ xương khớp</div>
                  </div>
                </div>
              </div>
              <div className="section-wrapper">
                <div className="section-customize-body">
                  <div className="bg-image section-outstanding-doctor "></div>
                  <div className="position-text-center">
                    <div>GS.TS Nguyễn Quang Sáng</div>
                    <div>Cơ xương khớp</div>
                  </div>
                </div>
              </div>
              <div className="section-wrapper">
                <div className="section-customize-body">
                  <div className="bg-image section-outstanding-doctor "></div>
                  <div className="position-text-center">
                    <div>GS.TS Nguyễn Quang Sáng</div>
                    <div>Cơ xương khớp</div>
                  </div>
                </div>
              </div>
              <div className="section-wrapper">
                <div className="section-customize-body">
                  <div className="bg-image section-outstanding-doctor "></div>
                  <div className="position-text-center">
                    <div>GS.TS Nguyễn Quang Sáng</div>
                    <div>Cơ xương khớp</div>
                  </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
