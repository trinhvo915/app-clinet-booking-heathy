import React, { Component } from 'react';
import './Profile.css';
import { CardText, CardImg } from 'reactstrap';
import { Icon, Button, Layout, Tabs, Avatar,notification } from 'antd';
import FooterLayout from '../../common/FooterLayout';
import LoadingIsEmpty from '../../common/LoadingIsEmpty';
import { getHistoryBookedDoctorList } from "../../actions/historyBookedDoctor.list.action";
import { getHistoryBookedDoctorApi } from './../../util/api/call-api';
import { addRateForDoctor } from './../../util/api/call-api';
import { getUser } from "../../actions/get.user.action";
import { connect } from "react-redux";
import DoctorHistory from './DoctorHistory';
const { Content } = Layout;
const { TabPane } = Tabs;

class Profile extends Component {

    constructor(props) {
        super(props);
    }

    loadHistoryBookedDoctors (){
        this.props.getHistoryBookedDoctorList();
    }


    componentDidMount() {
        this.loadHistoryBookedDoctors();

    }

    render() {
        const {object} = this.props.historyBookedDoctor.historyBookedDoctor;
        console.log(object)
        console.log(this.state)
        const doctorBooked = [];
        object && object.forEach((doctor, key) => {
            doctorBooked.push(
                <DoctorHistory
                    key={key}
                    doctor={object[key]}
                />
            )
        });
        return (
            <Layout>
                <div className="main-clinic-profile">
                    <div className="clinic-left-profile">
                        <div className="avatar-user">
                            <div className="avatar-user-center">
                                <Avatar size={115} icon="user" />
                            </div>
                            <span className="profile-center">VÕ VĂN TRINH</span>
                        </div>
                        <hr className="profile-hr" />
                        <div className="infor-profile">
                            <div className="detail-profile">
                                <div className="icon-profile">
                                    <Icon style={{ fontSize: '20px', color: '#08c' }} type="schedule" />
                                </div>
                                <div className="icon-infor-profile">sdfsdfasdfasdfasd</div>
                            </div>

                            <div className="detail-profile">
                                <div className="icon-profile">
                                    <Icon style={{ fontSize: '20px', color: '#08c' }} type="cluster" />
                                </div>
                                <div className="icon-infor-profile">sdfsdfasdfasdfasd</div>
                            </div>

                            <div className="detail-profile">
                                <div className="icon-profile">
                                    <Icon style={{ fontSize: '20px', color: '#08c' }} type="environment" />
                                </div>
                                <div className="icon-infor-profile">sdfsdfasdfasdfasd</div>
                            </div>
                            <div className="detail-profile">
                                <div className="icon-profile">
                                    <Icon style={{ fontSize: '20px', color: '#08c' }} type="phone" />
                                </div>
                                <div className="icon-infor-profile">sdfsdfasdfasdfasd</div>
                            </div>
                            <div className="detail-profile">
                                <div className="icon-profile">
                                    <Icon style={{ fontSize: '20px', color: '#08c' }} type="facebook" />
                                </div>
                                <div className="icon-infor-profile">sdfsdfasdfasdfasd</div>
                            </div>
                        </div>

                        <div className="profile-btn">
                            <Button type="primary">Cập Nhật</Button>
                        </div>
                    </div>
                    <Content>
                        <div className="clinic-right-profile">
                            <div className="main-content">
                                <Tabs defaultActiveKey="1" tabPosition="top" style={{ height: 'auto' }}>
                                    <TabPane tab="LỊCH SỬ ĐẶT LỊCH" key="1">
                                        {doctorBooked}
                                        {/* <LoadingIsEmpty /> */}
                                    </TabPane>
                                </Tabs>
                            </div>
                            <hr  />
                            <FooterLayout />
                        </div>

                    </Content>
                </div>
            </Layout>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        historyBookedDoctor: state.historyBookedDoctor,
        user: state.user,
    }
}

export default connect(
    mapStateToProps,
    {
        getHistoryBookedDoctorList,
        getUser
    }
)(Profile);