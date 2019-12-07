import React, { Component } from 'react'
// import './../../clinic/clinicList/Clinic.css';
// import './../../clinic/clinicList/Doctor.css';
import './Profile.css';
import { Card, CardText, CardImg, CardBody } from 'reactstrap';
import moment from 'moment';
import { DatePicker, Row, notification, Col, Form, Input, Button, Icon, Rate, Tabs, Modal, Select, List } from 'antd';
import { connect } from "react-redux";
import { getUser } from "../../actions/get.user.action";

const dateFormat = 'DD/MM/YYYY';

class DoctorHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleCommnet: false,
            visibleBooking: false,
            isLoading: false,
            contentCommnet: {
                value: ""
            },
            commentsToRender: 7,

            fullNameOwner: {
                value: ''
            },
            emailBookingPerson: {
                value: ''
            },
            mobileBookingPerson: {
                value: ''
            },
            fullNamePerent: {
                value: ''
            },
            birthdayPerent: {
                value: moment(moment().format(dateFormat)._i)
            },
            genderPerent: {
                value: 'MALE'
            },
            addressPerent: {
                value: ''
            },
            aboutPerent: {
                value: ''
            },
        };

    }

    render() {
        return (
            <div> 
                {
                    <div className="doctor-clinic-profie">
                        <div className="doctor-profie">
                            <div className="logo-infor">
                                <div className="logo">
                                    <CardImg className="img-clinic-image" variant="top" src={"data:image/jpeg;base64," + this.props.doctor.attachment.data} />
                                    {/* {
                                        this.props.doctor.id === this.props.user.user.id ? (
                                            <div className="btn-taolich">
                                                <Button  className="btn-taolich" type="primary" ghost>Tạo Lịch</Button>
                                            </div>
                                        ) : ""
                                    } */}

                                    {/* <div className="btn-taolich">
                                        <span style={{ color: '#5ab0ff' }}>Lượt đánh giá</span>
                                        <Rate disabled className="show-rate" allowHalf value={this.props.doctor.countRate} />
                                    </div> */}
                                </div>
                                <div className="infor">
                                    <CardText className="logo-name-clinic">
                                        {
                                            this.props.doctor.degrees.map(value =>
                                                value.name + " "
                                            )
                                        }
                                        {
                                            this.props.doctor.fullName
                                        }
                                    </CardText>
                                    <CardText className="infor-name-clinic" >
                                        {
                                            this.props.doctor.about
                                        }
                                    </CardText>
                                    <div className="address-logo">
                                        <div className="icon-address">
                                            <Icon style={{ color: '#08c' }} className="icon-address" type="environment" />
                                        </div>
                                        <CardText className="text-address">
                                            {
                                                this.props.doctor.address
                                            }
                                        </CardText>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="booking-profie"></div>
                    </div>
                }

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
}

export default connect(
    mapStateToProps,
    {
        getUser,
    }
)(DoctorHistory);