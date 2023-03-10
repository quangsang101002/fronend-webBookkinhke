import React, { Component } from "react";
import { connect } from "react-redux";
import { LANGUAGES } from "../../utils";
import * as actions from "../../store/actions";
import Navigator from "../../components/Navigator";
// import { changeLanguageApp } from "../../store/actions";
import { adminMenu } from "./menuApp";
import "./Header.scss";

class Header extends Component {
  changeLanguage = (language) => {
    this.props.changeLanguageAppRedux(language);
  };
  render() {
    const { processLogout } = this.props;

    return (
      <div className="header-container">
        {/* thanh navigator */}
        <div className="header-tabs-container">
          <Navigator menus={adminMenu} />
        </div>

        {/* nút logout */}
        <div className="language">
          <div
            className="language-vi"
            onClick={() => this.changeLanguage(LANGUAGES.VI)}
          >
            VI
          </div>
          <div
            className="language-en"
            onClick={() => this.changeLanguage(LANGUAGES.EN)}
          >
            EN
          </div>
        </div>
        <div className="btn btn-logout" onClick={processLogout} title="logout">
          <i className="fas fa-sign-out-alt"></i>
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
  return {
    processLogout: () => dispatch(actions.processLogout()),
    changeLanguageAppRedux: (language) =>
      dispatch(actions.changeLanguageApp(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
