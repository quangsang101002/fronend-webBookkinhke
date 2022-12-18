import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, ModalHeader, ModalBody, ModalFooter, Modal } from "reactstrap";
class ModalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      address: "",
    };
  }
  componentDidMount() {}

  toggle = () => {
    this.props.toggleFromParent();
  };
  handleOnchangeInput = (event, id) => {
    let coppyState = { ...this.state };
    coppyState[id] = event.target.value;
    this.setState({
      ...coppyState,
    });
  };
  checkValideInput = () => {
    let isValide = true;
    let arrInput = ["email", "password", "firstname", "lastname", "address"];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        isValide = false;
        alert("missing parameter" + arrInput[i]);
        break;
      }
      return isValide;
    }
  };
  handleAddnewUser = () => {
    let isValid = this.checkValideInput();
    if (isValid === true) {
      this.props.createNewUser(this.state);
      // console.log("check props child", this.props);
    }
  };
  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => {
          this.toggle();
        }}
        className="modal-user-container"
        size="lg"
      >
        <ModalHeader
          toggle={() => {
            this.toggle();
          }}
        >
          Modal title
        </ModalHeader>
        <ModalBody>
          <div className="modal-user-body">
            <div className="input-container">
              <label>Email</label>
              <input
                type="email"
                id="email"
                onChange={(event) => this.handleOnchangeInput(event, "email")}
                // value={this.state.email}
              />
            </div>
            <div className="input-container">
              <label>passWord</label>
              <input
                type="password"
                onChange={(event) =>
                  this.handleOnchangeInput(event, "password")
                }
                value={this.state.password}
              />
            </div>
            <div className="input-container">
              <label>firstname</label>
              <input
                type="text"
                onChange={(event) =>
                  this.handleOnchangeInput(event, "firstname")
                }
                value={this.state.firstname}
              />
            </div>
            <div className="input-container">
              <label>lastname</label>
              <input
                type="text"
                onChange={(event) =>
                  this.handleOnchangeInput(event, "lastname")
                }
                value={this.state.lastname}
              />
            </div>
            <div className="input-container max-width-input">
              <label>Address</label>
              <input
                type="text"
                onChange={(event) => this.handleOnchangeInput(event, "address")}
                value={this.state.address}
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            className="px-3"
            onClick={() => {
              this.handleAddnewUser();
            }}
          >
            AddUser
          </Button>
          <Button
            color="secondary"
            className="px-3"
            onClick={() => {
              this.toggle();
            }}
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
