import React, { Component } from 'react';
import {
    Link,
    withRouter
} from 'react-router-dom';
import './AppHeader.css';
import { Badge } from 'antd';
// import pollIcon from '../poll.svg';
import { Layout, Menu, Dropdown, Icon } from 'antd';
import { getUserByRoleName } from './../util/APIUtils';
const Header = Layout.Header;
    
class AppHeader extends Component {
    constructor(props) {
        super(props);   
        this.state = {
          userAndRole : {},
          roleNames : [],
          count: 10,
        }
        this.handleMenuClick = this.handleMenuClick.bind(this);   
    }

    handleMenuClick({ key }) {
      if(key === "logout") {
        this.props.onLogout();
      }
    }

    getRole =  () =>{
      if(this.props.currentUser) {
          getUserByRoleName(this.props.currentUser.id)
          .then(response =>{
              let userAndRole = Object.assign({}, this.state.userAndRole);
              userAndRole = response;

              let arrayRole = [];
              userAndRole.roles.forEach(x =>{
                if(x.name === 'EXPERT'){
                  arrayRole.push(x.name)
                }
              })
              const roleNames =  this.state.roleNames.slice();
             
              this.setState({
                userAndRole,
                roleNames :roleNames.concat(arrayRole)
              })

          })
      }
    }
    setCount = () =>{
      let  count = 0;
      this.setState({ count });
    }

    async componentDidMount(){
      this.getRole();
    }

    render() {
        let menuItems;
        let nameRole  = this.state.roleNames.length;
        if(this.props.currentUser && nameRole === 1) {
          menuItems = [
            <Menu.Item key="/">
              <Link to="/">
                <div className="tooltip">
                    <Icon style={{ fontSize: '20px', color: '#08c' }} type="home" className="nav-icon" />
                    <span className="tooltiptext">Trang Chủ</span>
                </div>
              </Link>
            </Menu.Item>,
            
            <Menu.Item key="/register/clinic">
              <Link to="/register/clinic">
                  <div className="tooltip">
                    <Icon style={{ fontSize: '20px', color: '#08c' }} type="plus-square" />
                    <span className="tooltiptext">Tạo Phòng Khám</span>
                  </div>
              </Link>
            </Menu.Item>,

            <Menu.Item onClick={this.setCount}  key="/poll/new">
              <Link to="/poll/new">
                  <Badge count={this.state.count}>
                    <Icon  style={{ fontSize: '20px', color: '#08c' }} type="alert" />
                  </Badge>
              </Link>
            </Menu.Item>,

            <Menu.Item key="/profile" className="profile-menu">
              <ProfileDropdownMenu 
                currentUser={this.props.currentUser} 
                handleMenuClick={this.handleMenuClick}/>
            </Menu.Item>
          ]; 
        }else if(this.props.currentUser && nameRole === 0){
          menuItems = [
            <Menu.Item key="/">
              <Link to="/">
                <div className="tooltip">
                  <Icon style={{ fontSize: '20px', color: '#08c' }} type="home" className="nav-icon" />
                  <span className="tooltiptext">Trang Chủ</span>
                </div>
              </Link>
            </Menu.Item>,

            <Menu.Item key="/register/doctor">
              <Link to="/register/doctor">
                <div className="tooltip">
                  <Icon style={{ fontSize: '20px', color: '#08c' }} type="usergroup-add" />
                    <span className="tooltiptext">Đăng ký Bác Sỹ</span>
                </div>
              </Link>
            </Menu.Item>,

            <Menu.Item onClick={this.setCount}  key="/poll/new">
              <Link to="/poll/new">
                  <Badge count={this.state.count}>
                    <Icon  style={{ fontSize: '20px', color: '#08c' }} type="alert" />
                  </Badge>
              </Link>
            </Menu.Item>,

            <Menu.Item key="/profile" className="profile-menu">
                <ProfileDropdownMenu 
                  currentUser={this.props.currentUser} 
                  handleMenuClick={this.handleMenuClick}/>
            </Menu.Item>
          ]; 
        }else {
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
            <Header className="app-header">
            <div className="container">
              <div className="app-title" >
                <Link to="/"><strong>Booking Clinic</strong></Link>
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
      getPopupContainer = { () => document.getElementsByClassName('profile-menu')[0]}>
      <a className="ant-dropdown-link">
         <Icon type="user" className="nav-icon" style={{marginRight: 0},{ fontSize: '18px', color: '#08c' }} /> <Icon type="down" />
      </a>
    </Dropdown>
  );
}


export default withRouter(AppHeader);