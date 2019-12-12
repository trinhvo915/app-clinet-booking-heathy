import React, { Component } from 'react';
import {
  Link,
  withRouter
} from 'react-router-dom';
import './AppHeader.css';
import { Badge } from 'antd';
import { connect } from "react-redux";
// import pollIcon from '../poll.svg';
import { Layout, Menu, Dropdown, Icon, Button, Modal, Select, Row, Col } from 'antd';
import { getUser } from "./../actions/get.user.action";
import { getProvinces } from "../actions/province.list.action";
import { getDistristList } from "../actions/distrits.list.action";
const Header = Layout.Header;
const Option = Select.Option;

class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10,
      visibleSearch: false,
      distrit: "BA ĐÌNH",
      nameDistritSearch: "",
      nameProvinceSearch: "",
    }

    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleChangeProvinceHead = this.handleChangeProvinceHead.bind(this);
    this.handleChangeDistritsHead = this.handleChangeDistritsHead.bind(this);
  }



  showModalSearch() {
    this.setState({
      visibleSearch: true
    })
  }

  handleCancelSearch = () => {
    this.setState({
      visibleSearch: false
    })
  }

  handleMenuClick({ key }) {
    if (key === "logout") {
      this.props.onLogout();
    }
  }

  setCount = () => {
    let count = 0;
    this.setState({ count });
  }

  getUserCheck = async () => {
    if (this.props.currentUser) {
      await this.props.getUser();
    }
  }

  getData() {
    this.props.getProvinces();
    this.props.getDistristList("2");
  }

  componentDidMount = async () => {
    await this.getUserCheck();
    this.getData();
  };

  handleChangeDistritsHead(value) {
    let distrits = this.props.distrits.distrits.object;
    distrits.forEach(x => {
      if (x._name === value) {
        this.setState({
          nameDistritSearch: x._name,
        })
      }
    })
  }

  handleChangeProvinceHead(value) {
    let provinces = this.props.province.province.object;
    provinces.forEach(x => {
      if (x._name === value) {
        this.props.getDistristList(x.id);
        let arrdis = this.props.distrits.distrits.object;
        let lalal = arrdis[0]
        this.setState({
          distrit: lalal._name,
          nameProvinceSearch: x._name
        })
      }
    })
  }

  render() {
    const { user } = this.props.user;
    let provinces = this.props.province.province;
    let distrits = this.props.distrits.distrits;
    let menuItems;
    if (this.props.currentUser && user.check === "USER_EXPERT") {
      menuItems = [
        <Menu.Item key="/">
          <Link to="/">
            <div className="tooltip-icon">
              <Icon style={{ fontSize: '20px', color: '#08c' }} type="home" className="nav-icon" />
              <span className="tooltiptext">Trang Chủ</span>
            </div>
          </Link>
        </Menu.Item>,

        <Menu.Item key="/register/clinic">
          <Link to="/register/clinic">
            <div className="tooltip-icon">
              <Icon style={{ fontSize: '20px', color: '#08c' }} type="plus-square" />
              <span className="tooltiptext">Tạo Phòng Khám</span>
            </div>
          </Link>
        </Menu.Item>,

        <Menu.Item onClick={this.setCount} key="/poll/new">
          <Link to="/poll/new">
            <Badge count={this.state.count}>
              <Icon style={{ fontSize: '20px', color: '#08c' }} type="alert" />
            </Badge>
          </Link>
        </Menu.Item>,

        <Menu.Item key="/profile" className="profile-menu">
          <ProfileDropdownMenu
            currentUser={this.props.currentUser}
            handleMenuClick={this.handleMenuClick} />
        </Menu.Item>
      ];
    } else if (this.props.currentUser && user.check === "USER_CLINIC") {
      menuItems = [
        <Menu.Item key="/">
          <Link to="/">
            <div className="tooltip-icon">
              <Icon style={{ fontSize: '20px', color: '#08c' }} type="home" className="nav-icon" />
              <span className="tooltiptext">Trang Chủ</span>
            </div>
          </Link>
        </Menu.Item>,

        <Menu.Item key="/ddddd" className="clinic-menu">
          <Clinics
            user={user}
            currentUser={this.props.currentUser}
          />
        </Menu.Item>,

        <Menu.Item onClick={this.setCount} key="/poll/new">
          <Link to="/poll/new">
            <Badge count={this.state.count}>
              <Icon style={{ fontSize: '20px', color: '#08c' }} type="alert" />
            </Badge>
          </Link>
        </Menu.Item>,

        <Menu.Item key="/profile" className="profile-menu">
          <ProfileDropdownMenu
            currentUser={this.props.currentUser}
            handleMenuClick={this.handleMenuClick} />
        </Menu.Item>
      ];
    } else if (this.props.currentUser && user.check === "USER") {
      menuItems = [
        <Menu.Item key="/">
          <Link to="/">
            <div className="tooltip-icon">
              <Icon style={{ fontSize: '20px', color: '#08c' }} type="home" className="nav-icon" />
              <span className="tooltiptext">Trang Chủ</span>
            </div>
          </Link>
        </Menu.Item>,

        <Menu.Item key="/register/doctor">
          <Link to="/register/doctor">
            <div className="tooltip-icon">
              <Icon style={{ fontSize: '20px', color: '#08c' }} type="usergroup-add" />
              <span className="tooltiptext">Đăng ký Bác Sỹ</span>
            </div>
          </Link>
        </Menu.Item>,

        <Menu.Item onClick={this.setCount} key="/poll/new">
          <Link to="/poll/new">
            <Badge count={this.state.count}>
              <Icon style={{ fontSize: '20px', color: '#08c' }} type="alert" />
            </Badge>
          </Link>
        </Menu.Item>,

        <Menu.Item key="/profile" className="profile-menu">
          <ProfileDropdownMenu
            currentUser={this.props.currentUser}
            handleMenuClick={this.handleMenuClick} />
        </Menu.Item>
      ];
    } else {
      menuItems = [
        <Menu.Item key="/login">
          <Link to="/login"><strong>Đăng nhập</strong></Link>
        </Menu.Item>,
        <Menu.Item key="/signup">
          <Link to="/signup"><strong>Đăng ký</strong></Link>
        </Menu.Item>
      ];
    }

    return (
      <div>
        <div className="commnet-modal-heard">
          <Modal
            style={{ top: 90 }}
            width={620}
            footer={null}
            visible={this.state.visibleSearch}
            onCancel={this.handleCancelSearch}
          >
            <span className="title-booking">TÌM KIẾM THEO KHU VỰC</span>
            <Row>
              <Col span={10}>
                {
                  provinces ? (
                    <Select defaultValue={"Hà Nội"} className="province-select" onChange={this.handleChangeProvinceHead} >
                      {
                        provinces.object ? provinces.object.map((value, key) =>
                          <Option key={key} value={value._name}>{value._name}</Option>
                        ) : null
                      }
                    </Select>
                  ) : ""
                }
              </Col>
              <Col span={10}>
                {
                  distrits ? (
                    <Select defaultValue={this.state.distrit} className="distrit-select" onChange={this.handleChangeDistritsHead}  >
                      {
                        distrits.object ? distrits.object.map((value, key) =>
                          <Option key={key} value={value._name}>{value._name}</Option>
                        ) : null
                      }
                    </Select>
                  ) : ""
                }
              </Col>
              <Col span={4}>
                <Link to={this.state.nameProvinceSearch !== "" && this.state.nameDistritSearch ? "/search/"+this.state.nameProvinceSearch + " "+ this.state.nameDistritSearch : ""}>
                  <Icon style={{ fontSize: '30px', color: '#08c' }} type="search" />
                </Link>
              </Col>
            </Row>
          </Modal>
        </div>

        <Header className="app-header">
          <div className="container">
            <div className="app-title" >
              <Link to="/"><strong>Booking Clinic</strong></Link>
            </div>
            <div className="head-search" >
              <Button onClick={() => this.showModalSearch()} type="primary" icon="search">
                Tìm Kiếm
             </Button>
            </div>
            <Menu
              className="app-menu"
              mode="horizontal"
              selectedKeys={[this.props.location.pathname]}
              style={{ lineHeight: '64px' }} >
              {menuItems}
            </Menu>
          </div>
        </Header>
      </div>

    );
  }
}

function ProfileDropdownMenu(props) {
  const dropdownMenu = (
    <Menu onClick={props.handleMenuClick} className="profile-dropdown-menu">
      <Menu.Item key="user-info" className="dropdown-item" disabled>
        <div className="user-full-name-info">
          {props.currentUser.name}
        </div>
        <div className="username-info">
          @{props.currentUser.username}
        </div>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="profile" className="dropdown-item">
        <Link to={`/users/${props.currentUser.username}`}>Profile</Link>
      </Menu.Item>
      <Menu.Item key="logout" className="dropdown-item">
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown
      overlay={dropdownMenu}
      trigger={['click']}
      getPopupContainer={() => document.getElementsByClassName('profile-menu')[0]}>
      <a className="ant-dropdown-link">
        <Icon type="user" className="nav-icon" style={{ marginRight: 0 }, { fontSize: '18px', color: '#08c' }} /> <Icon type="down" />
      </a>
    </Dropdown>
  );
}

function Clinics(props) {
  const dropdownMenu = (
    <Menu className="profile-dropdown-menu">
      {
        props.user && props.user.clinic.map((key, x) => {
          return (
            <div key={key}>
              <Menu.Item key="profile" className="dropdown-item">
                <Link style={{ 'word-wrap': 'break-word' }} to={`/users/${props.currentUser.username}`}>{x.name}</Link>
              </Menu.Item>
              <Menu.Divider />
            </div>
          )
        })
      }
    </Menu>
  );

  return (
    <Dropdown
      overlay={dropdownMenu}
      trigger={['click']}
      getPopupContainer={() => document.getElementsByClassName('clinic-menu')[0]}>
      <a className="ant-dropdown-link">
        <div className="tooltip-icon">
          <Icon style={{ fontSize: '20px', color: '#08c' }} type="solution" />
          <span className="tooltiptext">Phòng Khám</span>
        </div>
      </a>
    </Dropdown>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    province: state.province,
    distrits: state.distrits
  }
}

export default connect(
  mapStateToProps,
  {
    getUser,
    getProvinces,
    getDistristList
  }
)(withRouter(AppHeader));