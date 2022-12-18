import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserManage.scss";
import { getAllUsers, createNewUserService } from "../../services/userService";
import ModalUser from "./ModalUser";
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
      isOpenModalUser: false,
    };
  }

  async componentDidMount() {
    await this.getAllUserFromReact();
  }
  getAllUserFromReact = async () => {
    let response = await getAllUsers("All");
    // console.log("reponse", response);
    if (response && response.errCode === 0) {
      this.setState({
        arrUsers: response.users,
      });
    }
  };

  handleAddUser = () => {
    this.setState({
      isOpenModalUser: true,
    });
  };
  toggleUserModal = () => {
    this.setState({
      isOpenModalUser: !this.state.isOpenModalUser,
    });
  };
  createNewUser = async (data) => {
    try {
      let response = await createNewUserService(data);
      if (response && response.errCode !== 0) {
        alert(response.message);
      } else {
        await this.getAllUserFromReact();
        this.setState({
          isOpenModalUser: false,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    console.log("check state", this.state);
    let arrUsers = this.state.arrUsers;
    return (
      <div className="users-container">
        <ModalUser
          isOpen={this.state.isOpenModalUser}
          toggleFromParent={this.toggleUserModal}
          createNewUser={this.createNewUser}
        />
        <div className="title text-center">Manage users</div>
        <div className="px-1">
          <button
            className="btn btn-primary px-3"
            onClick={() => this.handleAddUser()}
          >
            <i className="fas fa-plus"></i>Add news user
          </button>
        </div>
        <div className="users-table mt-3 mx-1">
          <table id="customers">
            <tbody>
              <tr>
                <th>Email</th>
                <th>firstName</th>
                <th>lastName</th>
                <th>address</th>
                <th>Action</th>
              </tr>

              <>
                {arrUsers &&
                  arrUsers.map((user, index) => {
                    return (
                      <tr key={index}>
                        <td>{user.email}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.address}</td>
                        <td>
                          <button className="btn-edit">
                            <i className="fas fa-pencil-alt"></i>
                          </button>
                          <button className="btn-delete">
                            <i className="fas fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
