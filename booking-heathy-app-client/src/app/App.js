import React, { Component } from 'react';
import './App.css';
import {
  Route,
  withRouter,
  Switch
} from 'react-router-dom';

import { getCurrentUser } from '../util/APIUtils';
import { ACCESS_TOKEN } from '../constants';
import { connect } from "react-redux";
// import PollList from '../poll/PollList';
import Login from '../user/login/Login';
import Signup from '../user/signup/Signup';
import Profile from '../user/profile/Profile';
import NewClinic from '../clinic/newClinic/NewClinic';
import RegisterDoctor from '../user/registerDoctor/RegisterDoctor';
import AppHeader from '../common/AppHeader';
import NotFound from '../common/NotFound';
import LoadingIndicator from '../common/LoadingIndicator';
import PrivateRoute from '../common/PrivateRoute';
import ClinicList from '../clinic/clinicList/ClinicList';
import { Layout, notification } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import Clinic from '../clinic/clinicList/Clinic';
import { getUser } from "../actions/get.user.action";
import SearchClinicAddress from '../clinic/search/SearchClinicAddress';
const { Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      currentRates: [],
      idcurrentUser: '',
      isAuthenticated: false,
      isLoading: false,
      loadTrue: true,
      loadFalse: false,
    }
    this.handleLogout = this.handleLogout.bind(this);
    this.loadCurrentUser = this.loadCurrentUser.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.changerLoadHeard = this.changerLoadHeard.bind(this);
    notification.config({
      placement: 'topRight',
      top: 70,
      duration: 3,
    });
  }

  loadCurrentUser() {
    this.setState({
      isLoading: true
    });
    getCurrentUser()
      .then(response => {
        this.setState({
          currentUser: response,
          isAuthenticated: true,
          isLoading: false
        });
      }).catch(error => {
        this.setState({
          isLoading: false
        });
      });
  }

  componentDidMount() {
    this.loadCurrentUser();
  }

  handleLogout(redirectTo = "/", notificationType = "success", description = "Bạn đăng xuất thành công") {
    localStorage.removeItem(ACCESS_TOKEN);
    this.props.getUser();
    this.setState({
      currentUser: null,
      isAuthenticated: false
    });

    this.props.history.push(redirectTo);

    notification[notificationType]({
      message: 'Booking Clinic',
      description: description,
    });
  }

  handleLogin() {
    notification.success({
      message: 'Booking Clinic',
      description: "Bạn đăng nhập thành công !",
    });
    this.loadCurrentUser();
    this.props.history.push("/");
  }

  changerLoadHeard() {
    this.setState({
      loadTrue: false,
      loadFalse: true,
    })
  }

  render() {
    if (this.state.isLoading) {
      return <LoadingIndicator />
    }
    return (
      <Layout className="app-container">
        <AppHeader isAuthenticated={this.state.isAuthenticated}
          currentUser={this.state.currentUser}
          onLogout={this.handleLogout} />

        <Content className="app-content">
          <div className="container-app">
            <Switch>
              <Route exact path="/"
                render={(props) => <ClinicList isAuthenticated={this.state.isAuthenticated}
                  currentUser={this.state.currentUser} handleLogout={this.handleLogout} {...props} />}>
              </Route>
              <Route path="/login"
                render={(props) => <Login onLogin={this.handleLogin} {...props} />}>
              </Route>

              <Route path="/signup" component={Signup}></Route>

              <Route path="/users/:username"
                render={(props) => <Profile isAuthenticated={this.state.isAuthenticated} currentUser={this.state.currentUser} {...props} />}>
              </Route>

              <Route exact path="/clinic/:id_doctor/:id_clinic"
                render={(props) => <Clinic isAuthenticated={this.state.isAuthenticated}
                  currentUser={this.state.currentUser} handleLogout={this.handleLogout} {...props} />}>
              </Route>

              <Route exact path="/search/:nameAddress"
                render={(props) => <SearchClinicAddress isAuthenticated={this.state.isAuthenticated}
                  currentUser={this.state.currentUser} handleLogout={this.handleLogout} {...props} />}>
              </Route>

              <PrivateRoute onchangerLoadHeard={this.changerLoadHeard} authenticated={this.state.isAuthenticated} path="/register/doctor" component={RegisterDoctor} handleLogout={this.handleLogout} />

              <PrivateRoute authenticated={this.state.isAuthenticated} path="/register/clinic" component={NewClinic} handleLogout={this.handleLogout} />

              <Route component={NotFound}></Route>
            </Switch>
          </div>
        </Content>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      user: state.user,
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    {
        getUser,
    }
  )(App)
) ;
