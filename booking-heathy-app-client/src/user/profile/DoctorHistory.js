import React, { Component } from 'react'

import './Profile.css';
import {CardText, CardImg } from 'reactstrap';
import moment from 'moment';
import {  Icon } from 'antd';
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