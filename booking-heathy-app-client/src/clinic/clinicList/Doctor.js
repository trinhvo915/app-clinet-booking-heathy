import React, { Component } from 'react'
import './Clinic.css';
import './Doctor.css';
import { Card, CardText, CardImg, CardBody } from 'reactstrap';
import moment from 'moment';
import { DatePicker, TimePicker, Row, notification, Col, Form, Input, Button, Icon, Rate, Tabs, Modal, Select, List } from 'antd';
import { connect } from "react-redux";
import { getDoctorOfClinicList } from "../../actions/doctorsOfClinic.list.action";
import { getUser } from "../../actions/get.user.action";
import { addCommnetForDoctor } from './../../util/api/call-api';
import { addLichForDoctor } from './../../util/api/call-api';
import { sendEmailBooking } from './../../util/api/call-api';
import { boookingForDoctor } from './../../util/api/call-api';
import { getDoctorList } from "../../actions/doctor.list.action";
import {
    NAME_MIN_LENGTH, NAME_MAX_LENGTH,
    ADDRESS_MAX_LENGTH,
    MOBILE_MIN_LENGTH, MOBILE_MAX_LENGTH,
    EMAIL_MAX_LENGTH
} from '../../constants';
const FormItem = Form.Item;
const { TextArea } = Input;
const { Option } = Select;
const { TabPane } = Tabs;
const dateFormat = 'DD/MM/YYYY';
const genderData = [
    {
        VN: "NAM",
        EN: 'MALE'
    },
    {
        VN: "NŨ",
        EN: 'FAMALE'
    },
    {
        VN: "KHÁC",
        EN: "OTHER"
    }
]

class DoctorClinic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleCommnet: false,
            visibleBooking: false,
            visibleCreateSecheduce: false,
            isLoading: false,
            contentCommnet: {
                value: ""
            },
            commentsToRender: 7,
            distanceEverning: "5",
            distanceMorning: "5",
            distanceAfternoon: "5",
            startTimeMorning: "",
            endTimeMorning: "",
            startTimeAfternoon: "",
            endTimeAfternoon: "",
            startTimeEverning: "",
            endTimeEverning: "",
            dateBooking: moment(moment().format('YYYY-MM-DD')._i),

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

        this.onChangeDay = this.onChangeDay.bind(this);
        this.onChangeDayBooking = this.onChangeDayBooking.bind(this);
        this.disabledDateBooking = this.disabledDateBooking.bind(this);
        this.onChangeTimeMorningStart = this.onChangeTimeMorningStart.bind(this);
        this.onChangeTimeMorningEnd = this.onChangeTimeMorningEnd.bind(this);
        this.onChangeDistanceMorning = this.onChangeDistanceMorning.bind(this);
        this.handleSubmitCreateBooking = this.handleSubmitCreateBooking.bind(this);

        this.onChangeDistanceAfternoon = this.onChangeDistanceAfternoon.bind(this);
        this.onChangeTimeAfternoonEnd = this.onChangeTimeAfternoonEnd.bind(this);
        this.onChangeTimeAfternoonStart = this.onChangeTimeAfternoonStart.bind(this);
        this.onChangeTimeEverningStart = this.onChangeTimeEverningStart.bind(this);
        this.onChangeTimeEverningEnd = this.onChangeTimeEverningEnd.bind(this);
        this.onChangeDistanceEverning = this.onChangeDistanceEverning.bind(this);

        this.showModalCommnet = this.showModalCommnet.bind(this);
        this.addCommnet = this.addCommnet.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.props.doctor.countRate !== prevProps.doctor.countRate) {

        }
    }

    addCommnet() {
        if (this.props.user.user && this.props.user.user.status !== 401) {

            let comment = {
                content: this.state.contentCommnet.value,
                clinic: {
                    id: this.props.clinics.id
                },
                expert: {
                    id: this.props.doctor.id
                }
            }
            addCommnetForDoctor(comment).then(Response => {
                this.setState({
                    contentCommnet: {
                        value: ""
                    },
                    visiblecontentCommnet: false,
                })
                this.props.getDoctorList()
                this.props.paramsClininc && this.props.getDoctorOfClinicList(this.props.paramsClininc);
            })
        } else {
            this.setState({
                visiblecontentCommnet: false,
            })
            notification.error({
                message: 'Booking Clinic',
                description: 'Xin lỗi bạn ! Bạn chưa đăng nhập !'
            });
        }

    };

    handleCancelCommnet = e => {
        this.setState({
            visibleCommnet: false,
            contentCommnet: {
                value: ""
            },
            commentsToRender: 7,
            visiblecontentCommnet: false,
        })
    };

    handleCancelBooking = e => {
        this.setState({
            bookingDoctor: {},
            imageDoctor: "",
            nameDoctor: "",
            degreesDoctor: "",
            nameClinic: "",
            addressClinic: "",
            visibleBooking: false,
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
        });
    };

    handleCancelCreateSecheduce = e => {
        this.setState({
            visibleCreateSecheduce: false,
            distanceEverning: "5",
            distanceMorning: "5",
            distanceAfternoon: "5",
            startTimeMorning: "",
            endTimeMorning: "",
            startTimeAfternoon: "",
            endTimeAfternoon: "",
            startTimeEverning: "",
            endTimeEverning: "",
        });
    };

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        this.setState({
            [inputName]: {
                value: inputValue,
            },
        });
        if (this.state.contentCommnet.values !== "") {
            this.setState({
                visiblecontentCommnet: true,
            })
        } else {
            this.setState({
                visiblecontentCommnet: false,
            })
        }

    }

    showModalCreateSecheduce = () => {
        this.setState({
            visibleCreateSecheduce: true,
        });
    };

    onChangeDayBooking = value => {
        this.onChangeDay('dateBooking', value);
    };

    disabledDateBooking = dayBooking => {
        if (!dayBooking) {
            return false;
        }
        return dayBooking.valueOf() <= moment(moment().format("YYYY-MM-DD")).valueOf();
    };

    showModalCommnet() {
        this.setState({
            visibleCommnet: true,
        });
    };

    showModalBooking(booking, doctor, clinic) {
        if (this.props.user.user && this.props.user.user.status !== 401) {
            this.setState({
                bookingDoctor: booking,
                imageDoctor: doctor.attachmentPerson.data,
                nameDoctor: doctor.fullName,
                degreesDoctor: doctor.degrees,
                nameClinic: clinic.name,
                addressClinic: clinic.address,
                visibleBooking: true,
                doctor: doctor,
                clinic: clinic
            });
        } else {
            notification.error({
                message: 'Booking Clinic',
                description: 'Xin lỗi bạn ! Bạn chưa đăng nhập !'
            });
        }

    };

    handleSubmitCreateBooking() {

        if ((this.state.startTimeMorning !== "" && this.state.endTimeMorning !== "") || (this.state.startTimeAfternoon !== "" && this.state.endTimeAfternoon !== "") || (this.state.endTimeEverning !== "" && this.state.endTimeEverning !== "")) {

            let startTimeMorning = this.state.startTimeMorning !== "" ? this.state.startTimeMorning + " AM" : "";
            let endTimeMorning = this.state.endTimeMorning !== "" ? this.state.endTimeMorning + " AM" : "";

            let startTimeAfternoon = this.state.startTimeAfternoon !== "" ? this.state.startTimeAfternoon + " PM" : "";
            let endTimeAfternoon = this.state.endTimeAfternoon !== "" ? this.state.endTimeAfternoon + " PM" : "";

            let startTimeEverning = this.state.startTimeEverning !== "" ? this.state.startTimeEverning + " PM" : "";
            let endTimeEverning = this.state.endTimeEverning !== "" ? this.state.endTimeEverning + " PM" : "";

            let param = {
                distanceAfternoon: this.state.distanceAfternoon,
                distanceEverning: this.state.distanceEverning,
                distanceMorning: this.state.distanceMorning,
                startTimeMorning: startTimeMorning,
                endTimeMorning: endTimeMorning,
                startTimeAfternoon: startTimeAfternoon,
                endTimeAfternoon: endTimeAfternoon,
                startTimeEverning: startTimeEverning,
                endTimeEverning: endTimeEverning,
                idClinic: this.props.clinics.id,
                idDoctor: this.props.user.user.id,
                dateBooking: this.state.dateBooking
            }

            addLichForDoctor(param).then(response => {
                if (response.success) {
                    notification.success({
                        message: 'Booking Clinic',
                        description: response.message + "!"
                    });

                    this.setState({
                        distanceEverning: "5",
                        distanceMorning: "5",
                        distanceAfternoon: "5",
                        startTimeMorning: "",
                        endTimeMorning: "",
                        startTimeAfternoon: "",
                        endTimeAfternoon: "",
                        startTimeEverning: "",
                        endTimeEverning: "",
                    });

                    // let idClininc = this.props.paramsClininc.idClinic;
                    // let idDoctor = this.props.paramsClininc.idDoctor;
                    // let dateQurrey = this.state.dateBooking;
                    // let dateQurreyResponse = moment(dateQurrey).format('YYYY-MM-DD');
                    // let paramsClinincResponse = {
                    //     idClinic: idClininc,
                    //     idDoctor: idDoctor,
                    //     dateQurrey: dateQurreyResponse,
                    //     dateCurrent : this.props.paramsClininc.dateCurrent
                    // }
                    this.props.paramsClininc && this.props.getDoctorOfClinicList(this.props.paramsClininc);
                } else {
                    notification.error({
                        message: 'Booking Clinic',
                        description: 'Tạo lịch thất bại !'
                    });
                }
            })
            this.setState({
                visibleCreateSecheduce: true,
            });
        } else {
            notification.error({
                message: 'Booking Clinic',
                description: 'Bạn chưa nhập đầy đủ trường !'
            });
        }
    }

    onChangeDistanceEverning(value) {
        this.onChangeDay("distanceEverning", value);
    }

    onChangeDistanceMorning(value) {
        this.onChangeDay("distanceMorning", value);
    }

    onChangeDistanceAfternoon(value) {
        this.onChangeDay("distanceAfternoon", value);
    }

    disabledDateBooking = dayBooking => {
        if (!dayBooking) {
            return false;
        }
        return dayBooking.valueOf() <= moment(moment().format("YYYY-MM-DD")).valueOf();
    };

    onChangeDay = (field, value) => {
        this.setState({
            [field]: value,
        });
    };

    onChangeDayBooking = value => {
        this.onChangeDay('dateBooking', value);
    };

    onChangeTimeMorningStart(time, timeString) {
        this.onChangeDay('startTimeMorning', timeString);
    }

    onChangeTimeAfternoonStart(time, timeString) {
        this.onChangeDay('startTimeAfternoon', timeString);
    }

    onChangeTimeEverningStart(time, timeString) {
        this.onChangeDay('startTimeEverning', timeString);
    }

    onChangeTimeMorningEnd(time, timeString) {
        this.onChangeDay('endTimeMorning', timeString);
    }

    onChangeTimeAfternoonEnd(time, timeString) {
        this.onChangeDay('endTimeAfternoon', timeString);
    }

    onChangeTimeEverningEnd(time, timeString) {
        this.onChangeDay('endTimeEverning', timeString);
    }

    onChangecommentsToRender() {
        this.setState({
            commentsToRender: (this.state.commentsToRender + 7)
        })
    }

    handleChangeSelectDate = (value, paramsClininc, clinics) => {
        let idClininc = clinics.id;
        let idDoctor = paramsClininc.idDoctor;
        let dateQurrey = value.key;
        let dateCurrent = moment(moment().format('YYYY-MM-DD'))._i;

        let paramsClinincResponse = {
            idClinic: idClininc,
            idDoctor: idDoctor,
            dateQurrey: dateQurrey,
            dateCurrent: dateCurrent
        }

        this.props.paramsClininc && this.props.getDoctorOfClinicList(paramsClinincResponse);
    }

    handleInputChangeBooking(event, validationFun) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        this.setState({
            [inputName]: {
                value: inputValue,
                ...validationFun(inputValue)
            }
        });
    }

    validateFullNameOwner = (fullName) => {
        if (fullName.length < NAME_MIN_LENGTH) {
            return {
                validationStatus: 'error',
                errorMsg: `Họ và tên quá nhỏ !. Bạn cần nhập lớn hơn ( ${NAME_MIN_LENGTH} )  ký tự!!`
            }
        } else if (fullName.length > NAME_MAX_LENGTH) {
            return {
                validationStatus: 'error',
                errorMsg: `Họ và tên quá lớn !. Bạn cần nhập nhỏ hơn ( ${NAME_MAX_LENGTH} )  ký tự!!`
            }
        } else {
            return {
                validateStatus: 'success',
                errorMsg: null,
            };
        }
    }

    validateEmail = (email) => {
        if (!email) {
            return {
                validateStatus: 'error',
                errorMsg: 'Hãy nhập E-mail !'
            }
        }

        const EMAIL_REGEX = RegExp('[^@ ]+@[^@ ]+\\.[^@ ]+');
        if (!EMAIL_REGEX.test(email)) {
            return {
                validateStatus: 'error',
                errorMsg: 'Lỗi định dạng E-mail !'
            }
        }

        if (email.length > EMAIL_MAX_LENGTH) {
            return {
                validateStatus: 'error',
                errorMsg: `Email quá lớn !. Bạn cần nhập nhỏ hơn( ${EMAIL_MAX_LENGTH} ) ký tự! !`
            }
        }

        return {
            validateStatus: 'success',
            errorMsg: null,
        };
    }

    validateMobile = (mobile) => {
        if (mobile.length < MOBILE_MIN_LENGTH) {
            return {
                validateStatus: 'error',
                errorMsg: `"Số điện thoại quá nhỏ !. Bạn cần nhập lớn hơn ( "${MOBILE_MIN_LENGTH}" ) ký tự!"`
            }
        } else if (mobile.length > MOBILE_MAX_LENGTH) {
            return {
                validationStatus: 'error',
                errorMsg: `Số điện thoại quá lớn !. Bạn cần nhập nhỏ hơn ( ${MOBILE_MAX_LENGTH} )  ký tự!!`
            }
        } else {
            return {
                validateStatus: 'success',
                errorMsg: null,
            };
        }
    }

    onChangeforDate = (field, value) => {
        this.setState({
            [field]: {
                value: value
            }
        });
    };

    onChangeDate = (value) => {
        this.onChangeforDate('birthday', value);
    }

    handleGenderPerent = (value) => {
        const genderPerent = Object.assign(this.state.genderPerent, { value: value });
        this.setState({
            genderPerent: genderPerent
        });
    }

    validateAddressPerent = (address) => {
        if (address.length > ADDRESS_MAX_LENGTH) {
            return {
                validationStatus: 'error',
                errorMsg: `Địa chỉ quá lớn !. Bạn cần nhập nhỏ hơn ( ${ADDRESS_MAX_LENGTH} )  ký tự!!`
            }
        } else {
            return {
                validateStatus: 'success',
                errorMsg: null,
            };
        }
    }

    validateAboutPerent = (aboutPerent) => {
        if (aboutPerent.length === 0) {
            return {
                validationStatus: 'error',
                errorMsg: `Bạn cần nhập thông tin cơ bản !!`
            }
        } else {
            return {
                validateStatus: 'success',
                errorMsg: null,
            };
        }
    }

    handleSubmitBooking (){

        if(this.state.fullNameOwner.value !=="" && this.state.emailBookingPerson.value  !==""
             && this.state.mobileBookingPerson.value  !==""  && this.state.fullNamePerent.value  !==""
             && this.state.birthdayPerent.value  !=="" && this.state.genderPerent.value  !==""
             && this.state.addressPerent.value  !=="" && this.state.aboutPerent.value  !==""
             ){
                    let param = {
                        address : this.state.addressPerent.value,
                        addressClinic : this.state.clinic.address,
                        birthdayYear : this.state.birthdayPerent.value,
                        dateBooking : this.state.bookingDoctor.dateBooking,
                        email : this.state.emailBookingPerson.value,
                        gender : this.state.genderPerent.value,
                        idBooking : this.state.bookingDoctor.id,
                        idDoctor : this.state.doctor.id,
                        nameClinc : this.state.clinic.address,
                        nameDoctor : this.state.doctor.fullName,
                        namePatient : this.state.fullNamePerent.value,
                        namePersinBooking : this.state.fullNameOwner.value,
                        numberPhone : this.state.mobileBookingPerson.value,
                        pathology : this.state.aboutPerent.value,
                        timeBooking : this.state.bookingDoctor.timeBooking
                    }

                    boookingForDoctor(param).then(response =>{
                        if(response.success === true){
                            
                            let idClininc = this.props.paramsClininc.idClinic;
                            let idDoctor = this.props.paramsClininc.idDoctor;
                            let dateQurrey = param.dateBooking;
                            let dateCurrent = this.props.paramsClininc.dateCurrent;
                    
                            let paramsClinincResponse = {
                                idClinic: idClininc,
                                idDoctor: idDoctor,
                                dateQurrey: dateQurrey,
                                dateCurrent: dateCurrent
                            }
                    
                            this.props.paramsClininc && this.props.getDoctorOfClinicList(paramsClinincResponse);
                            
                            notification.success({
                                message: 'Booking Clinic',
                                description: response.message +"\nKiểm tra email :"+param.email+".\nĐể xem chi tiết lịch khám bệnh !",
                            });
                            this.props.getDoctorList()
                            this.setState({
                                visibleBooking: false,
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
                            });

                            sendEmailBooking(param).then(response =>{
                                
                            })
                        }else {
                            notification.error({
                                message: 'Booking Clinic',
                                description: response.message
                            });
                        }
                    })
                    
             }else {
                notification.error({
                    message: 'Booking Clinic',
                    description: 'Xin lỗi bạn ! Bạn chưa nhập đầy đủ thông tin !'
                });
             }
    }

    render() {
        // console.log(this.state)
        return (
            <div>
                <div className="commnet-modal-">
                    <Modal
                        style={{ top: 5 }}
                        footer={null}
                        visible={this.state.visibleCommnet}
                        onOk={this.handleOk}
                        onCancel={this.handleCancelCommnet}
                    >
                        {
                            this.props.doctor ? (
                                <Card >
                                    <CardImg variant="top" src={"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/72230486_2385505438432891_7454734594902851584_n.jpg?_nc_cat=105&_nc_oc=AQm8sWtHaE-l8FAHErimAlRcJnNjJFIQd7WOh1qnoaCUOrk-num3OR6Vhg3W9GF5WRo&_nc_ht=scontent.fsgn2-1.fna&oh=5061e82249b540db611e9e5f8bc9ab59&oe=5E57A337"} />
                                    <CardBody className="show-revew-body">
                                        <div className="text-doctor">
                                            <CardText className="text-name-doctor">
                                                {
                                                    this.props.doctor.degrees ? this.props.doctor.degrees.map(value =>
                                                        value.name + " "
                                                    ) : null
                                                }
                                                {
                                                    this.props.doctor.fullName
                                                }
                                            </CardText>
                                            <CardText className="text-faculty">
                                                {
                                                    this.props.doctor.faculties ? this.props.doctor.faculties.map(value =>
                                                        value.name + " - "
                                                    ) : null
                                                }
                                            </CardText>
                                        </div>
                                        <hr className="line-line"></hr>
                                        <div className="text-clinic">
                                            <CardText className="text-name-clinic">
                                                {
                                                    this.props.clinics.name
                                                }
                                            </CardText>
                                            <div>
                                                <div className="icon-address">
                                                    <Icon style={{ color: '#08c' }} className="icon-address" type="environment" />
                                                </div>
                                                <CardText className="text-address">
                                                    {
                                                        this.props.clinics.address
                                                    }
                                                </CardText>
                                            </div>
                                        </div>
                                    </CardBody>
                                    <div className="show-revew-btn">

                                        <Tabs defaultActiveKey="1" >
                                            <TabPane className="modal-btn-ra1" tab="Bình Luận" key="1">
                                                <div className="conten-commnet-modal">
                                                    {
                                                        this.props.doctor.commentExperts ? this.props.doctor.commentExperts.slice(0, this.state.commentsToRender).map((value, key) =>
                                                            <div key={key} className="item-content-commnet">
                                                                <div className="modal-img-commnet">
                                                                    {
                                                                        value.attachment.data !== null ? <CardImg className="img-commnet-image" variant="top" src={"data:image/jpeg;base64," + value.attachment.data} /> : <CardImg className="img-commnet-image" variant="top" src={"https://www.aamc.org/sites/default/files/risking-everything-to-become-a-doctor-jirayut-new-latthivongskorn.jpg"} />
                                                                    }
                                                                    
                                                                </div>
                                                                <div className="conten-commnet-text">
                                                                    <CardText className="text-commnet-modal">
                                                                        {
                                                                            value.content
                                                                        }
                                                                    </CardText>
                                                                </div>
                                                            </div>
                                                        ) : null
                                                    }
                                                    {
                                                        this.state.commentsToRender <= this.props.doctor.commentExperts.length ? <Button onClick={() => this.onChangecommentsToRender()} type="link" size="small">Xem thêm {this.props.doctor.commentExperts.length - this.state.commentsToRender >= 7 ? 7 : this.props.doctor.commentExperts.length - this.state.commentsToRender} bình luận</Button> : null
                                                    }
                                                </div>
                                                <hr />
                                                <div className="written-commnet">
                                                    <div className="modal-img-commnet">
                                                        {
                                                           this.props.user.user.attachmentPerson && this.props.user.user.attachmentPerson.data !== null ? <CardImg className="img-commnet-image" variant="top" src={this.props.user.user.attachmentPerson ? "data:image/jpeg;base64," + this.props.user.user.attachmentPerson.data : "https://www.aamc.org/sites/default/files/risking-everything-to-become-a-doctor-jirayut-new-latthivongskorn.jpg"} /> :
                                                            <CardImg className="img-commnet-image" variant="top" src={"https://www.aamc.org/sites/default/files/risking-everything-to-become-a-doctor-jirayut-new-latthivongskorn.jpg"} />
                                                        }
                                                        
                                                    </div>
                                                    <div className="modal-area-commnet">
                                                        <TextArea className="text-area-commnet" placeholder="Viết bình luận ..."
                                                            autosize={{ minRows: 2, maxRows: 3 }}
                                                            name='contentCommnet'
                                                            value={this.state.contentCommnet.value}
                                                            onChange={(event) => this.handleInputChange(event)} />
                                                    </div>
                                                    {
                                                        (this.state.visiblecontentCommnet === true) ? (
                                                            <div className="btn-dang-commnet">
                                                                <Button className="btn-dang"
                                                                    onClick={() => this.addCommnet()}
                                                                    type="primary"
                                                                >Đăng</Button>
                                                            </div>
                                                        ) : (
                                                                <div className="btn-dang-commnet">
                                                                    <Button className="btn-dang"
                                                                        type="primary"
                                                                        disabled
                                                                    >Đăng</Button>
                                                                </div>
                                                            )
                                                    }

                                                </div>
                                            </TabPane>
                                            <TabPane className="modal-btn-ra" tab="Cá Nhân" key="2">
                                                Content of Tab Pane 2
                                            </TabPane>
                                        </Tabs>
                                    </div>
                                </Card>
                            ) : null
                        }
                    </Modal>
                </div>

                <div className="commnet-modal">
                    <Modal
                        style={{ top: 10 }}
                        footer={null}
                        visible={this.state.visibleCreateSecheduce}
                        onCancel={this.handleCancelCreateSecheduce}
                    >
                        <Tabs defaultActiveKey="1" >
                            <TabPane className="modal-btn-ra1" tab="Đặt Lịch Theo Từng Ngày" key="1">
                                {/* <Form onSubmit={() =>this.handleSubmitCreateBooking ()} className="login-form"> */}
                                <FormItem className="row-file">
                                    <div>
                                        <span>Ngày Đặt Lịch :</span>
                                        <DatePicker
                                            className="date-booking"
                                            placeholder="Chọn ngày tạo lịch"
                                            disabledDate={this.disabledStartDate}
                                            format="YYYY-MM-DD"
                                            defaultValue={moment(moment().format('YYYY-MM-DD')._i)}
                                            disabledDate={this.disabledDateBooking}
                                            value={this.state.dateBooking ? this.state.dateBooking : moment(moment().format('YYYY-MM-DD')._i)}
                                            onChange={this.onChangeDayBooking}
                                        />
                                    </div>
                                </FormItem>
                                <hr />
                                <FormItem className="row-file">
                                    <div>
                                        <div className="distance-form">
                                            <span>Thời gian buổi sáng</span>
                                            <Row>
                                                <Col span={6}>Thời gian bắt đầu : </Col>
                                                <Col span={18}>
                                                    <TimePicker
                                                        disabledHours={() => [1, 2, 3, 4, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 0]}
                                                        disabledMinutes={() => [1, 2, 4, 7, 8, 9, 11, 12, 13, 14, 16, 17, 18, 19,
                                                            21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
                                                            43, 44, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59]}
                                                        className="time-input"
                                                        format={"HH:mm"}
                                                        onChange={this.onChangeTimeMorningStart} />
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </FormItem>

                                <FormItem className="row-file">
                                    <div>
                                        <div className="distance-form">
                                            <Row>
                                                <Col span={6}>Thời gian kết thúc:</Col>
                                                <Col span={18}>
                                                    <TimePicker
                                                        className="time-input"
                                                        disabledHours={() => [1, 2, 3, 4, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 0]}
                                                        disabledMinutes={() => [1, 2, 4, 7, 8, 9, 11, 12, 13, 14, 16, 17, 18, 19,
                                                            21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
                                                            43, 44, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59]}
                                                        format={"HH:mm"}
                                                        onChange={this.onChangeTimeMorningEnd} />
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </FormItem>
                                <FormItem className="row-file">
                                    <div>
                                        <div className="distance-form">
                                            <Row>
                                                <Col span={12}>Khoảng cách thời gian đặt lịch : </Col>
                                                <Col span={12}>
                                                    <Select
                                                        defaultValue={5}
                                                        className="distance-input"
                                                        style={{ width: 180 }}
                                                        placeholder="Chọn khoảng thời gian"
                                                        onChange={this.onChangeDistanceMorning}
                                                    >
                                                        <Option value="5">5</Option>
                                                        <Option value="10">10</Option>
                                                        <Option value="15">15</Option>
                                                        <Option value="20">20</Option>
                                                        <Option value="30">30</Option>
                                                    </Select>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </FormItem>
                                <hr />
                                <FormItem className="row-file">
                                    <div>
                                        <div className="distance-form">
                                            <span>Thời gian buổi chiều</span>
                                            <Row>
                                                <Col span={6}>Thời gian bắt đầu : </Col>
                                                <Col span={18}>
                                                    <TimePicker
                                                        className="time-input"
                                                        disabledHours={() => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 18, 19, 20, 21, 22, 23, 0]}
                                                        disabledMinutes={() => [1, 2, 4, 7, 8, 9, 11, 12, 13, 14, 16, 17, 18, 19,
                                                            21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
                                                            43, 44, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59]}
                                                        format={"HH:mm"}
                                                        onChange={this.onChangeTimeAfternoonStart} />
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </FormItem>

                                <FormItem className="row-file">
                                    <div>
                                        <div className="distance-form">
                                            <Row>
                                                <Col span={6}>Thời gian kết thúc: </Col>
                                                <Col span={18}>
                                                    <TimePicker
                                                        format={"HH:mm"}
                                                        disabledHours={() => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 18, 19, 20, 21, 22, 23, 0]}
                                                        disabledMinutes={() => [1, 2, 4, 7, 8, 9, 11, 12, 13, 14, 16, 17, 18, 19,
                                                            21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
                                                            43, 44, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59]}
                                                        className="time-input"
                                                        onChange={this.onChangeTimeAfternoonEnd} />
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </FormItem>
                                <FormItem className="row-file">
                                    <div>
                                        <div className="distance-form">
                                            <Row>
                                                <Col span={12}>Khoảng cách thời gian đặt lịch : </Col>
                                                <Col span={12}>
                                                    <Select
                                                        defaultValue={5}
                                                        className="distance-input"
                                                        style={{ width: 180 }}
                                                        placeholder="Chọn khoảng thời gian"
                                                        onChange={this.onChangeDistanceAfternoon}
                                                    >
                                                        <Option value="5">5</Option>
                                                        <Option value="10">10</Option>
                                                        <Option value="15">15</Option>
                                                        <Option value="20">20</Option>
                                                        <Option value="30">30</Option>
                                                    </Select>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </FormItem>
                                <hr />
                                <FormItem className="row-file">
                                    <div>
                                        <div className="distance-form">
                                            <span>Thời gian buổi Tối</span>
                                            <Row>
                                                <Col span={6}>Thời gian bắt đầu : </Col>
                                                <Col span={18}>
                                                    <TimePicker
                                                        className="time-input"
                                                        disabledHours={() => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 0]}
                                                        disabledMinutes={() => [1, 2, 4, 7, 8, 9, 11, 12, 13, 14, 16, 17, 18, 19,
                                                            21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
                                                            43, 44, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59]}
                                                        format={"HH:mm"}
                                                        onChange={this.onChangeTimeEverningStart} />
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </FormItem>

                                <FormItem className="row-file">
                                    <div>
                                        <div className="distance-form">
                                            <Row>
                                                <Col span={6}>Thời gian kết thúc:</Col>
                                                <Col span={18}>
                                                    <TimePicker
                                                        className="time-input"
                                                        disabledHours={() => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 0]}
                                                        disabledMinutes={() => [1, 2, 4, 7, 8, 9, 11, 12, 13, 14, 16, 17, 18, 19,
                                                            21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
                                                            43, 44, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59]}
                                                        format={"HH:mm"}
                                                        onChange={this.onChangeTimeEverningEnd} />
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </FormItem>
                                <FormItem className="row-file">
                                    <div>
                                        <div className="distance-form">
                                            <Row>
                                                <Col span={12}>Khoảng cách thời gian đặt lịch : </Col>
                                                <Col span={12}>
                                                    <Select
                                                        defaultValue={5}
                                                        className="distance-input"
                                                        style={{ width: 180 }}
                                                        placeholder="Chọn khoảng thời gian"
                                                        onChange={this.onChangeDistanceEverning}
                                                    >
                                                        <Option value="5">5</Option>
                                                        <Option value="10">10</Option>
                                                        <Option value="15">15</Option>
                                                        <Option value="20">20</Option>
                                                        <Option value="30">30</Option>
                                                    </Select>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </FormItem>

                                <hr />
                                <FormItem>
                                    <Button onClick={() => this.handleSubmitCreateBooking()} type="primary" size="large" className="login-form-button">Tạo Lịch</Button>
                                </FormItem>
                                {/* </Form> */}
                            </TabPane>

                            <TabPane className="modal-btn-ra" tab="Đặt Lịch Nhiều Ngày" key="2">
                                Content of Tab Pane 2
                            </TabPane>
                        </Tabs>

                    </Modal>
                </div>

                <div className="model-booking">
                    <Modal
                        className="boking-modal"

                        style={{ top: 5 }}
                        footer={null}
                        visible={this.state.visibleBooking}
                        onCancel={this.handleCancelBooking}
                    >
                        <span className="title-booking">ĐẶT LỊCH KHÁM BỆNH</span>
                        <hr className="line-line"></hr>

                        <div className="content-booking">
                            <div className="img-div-booking">
                                {
                                    this.state.imageDoctor ? (<CardImg className="img-clinic-image-booking" variant="top" src={"data:image/jpeg;base64," + this.state.imageDoctor} />) : ""
                                }
                            </div>

                            <div className="inf-div-booking" >
                                <CardText className="logo-name-clinic-doctor-booking">
                                    {
                                        this.state.degreesDoctor && this.state.degreesDoctor.map(value =>
                                            value.name + " "
                                        )
                                    }
                                    {
                                        this.state.nameDoctor ? this.state.nameDoctor : ""
                                    }
                                </CardText>

                                <CardText className="logo-name-clinic-addressClinic-booking">
                                    {
                                        this.state.nameClinic ? this.state.nameClinic : ""
                                    }
                                </CardText>

                                <CardText className="address-clininc-booking">
                                    Địa chỉ phòng khám : {this.state.addressClinic ? this.state.addressClinic : ""}
                                </CardText>
                            </div>

                        </div>

                            <span className="title-booking">NGÀY ĐẶT LỊCH : <span className="title-booking-date">{this.state.bookingDoctor ? this.state.bookingDoctor.dateBooking : ""} </span></span>

                            <span className="title-booking">THỜI GIAN : <span className="title-booking-date">{this.state.bookingDoctor ? this.state.bookingDoctor.timeBooking : ""} </span></span>
                                
                        <hr className="line-line-distance"></hr>
                        <span className="title-booking-person-booking">THÔNG TIN NGƯỜI ĐẶT LỊCH</span>
                        <div className="content-booking-input">

                            <FormItem className="row-file"
                                label="Tên Người Đặt Khám :"
                                validateStatus={this.state.fullNameOwner.validateStatus}
                                help={this.state.fullNameOwner.errorMsg}>
                                <Input
                                    className="input-text"
                                    size="large"
                                    name="fullNameOwner"
                                    autoComplete="off"
                                    placeholder="Hãy nhập tên đầy đủ của người đặt khám !"
                                    value={this.state.fullNameOwner.value}
                                    onChange={(event) => this.handleInputChangeBooking(event, this.validateFullNameOwner)} />
                            </FormItem>

                            <FormItem className="row-file"
                                label="Email Người Đặt Khám:"
                                hasFeedback
                                validateStatus={this.state.emailBookingPerson.validateStatus}
                                help={this.state.emailBookingPerson.errorMsg}>
                                <Input
                                    size="large"
                                    name="emailBookingPerson"
                                    type="email"
                                    autoComplete="off"
                                    placeholder="Hãy nhập email của người đặt khám !"
                                    value={this.state.emailBookingPerson.value}
                                    onChange={(event) => this.handleInputChangeBooking(event, this.validateEmail)} />
                            </FormItem>

                            <FormItem className="row-file"
                                label="Số điện thoại :"
                                validateStatus={this.state.mobileBookingPerson.validateStatus}
                                help={this.state.mobileBookingPerson.errorMsg}>
                                <Input
                                    size="large"
                                    name="mobileBookingPerson"
                                    autoComplete="off"
                                    placeholder="Hãy nhập số điện thoại của người đặt khám !"
                                    value={this.state.mobileBookingPerson.value}
                                    onChange={(event) => this.handleInputChangeBooking(event, this.validateMobile)} />
                            </FormItem>
                        </div>

                        <hr className="line-line-distance"></hr>
                        <span className="title-booking-person-booking">THÔNG TIN NGƯỜI BỆNH</span>
                        <div className="content-booking-input">
                            <FormItem className="row-file"
                                label="Tên Bện Nhân :"
                                validateStatus={this.state.fullNamePerent.validateStatus}
                                help={this.state.fullNamePerent.errorMsg}>
                                <Input
                                    className="input-text"
                                    size="large"
                                    name="fullNamePerent"
                                    autoComplete="off"
                                    placeholder="Hãy nhập tên đầy đủ của người đặt khám !"
                                    value={this.state.fullNamePerent.value}
                                    onChange={(event) => this.handleInputChangeBooking(event, this.validateFullNameOwner)} />
                            </FormItem>

                            <Row>
                                <Col span={12} >
                                    <FormItem
                                        label="Ngày sinh Bệnh Nhân : ">
                                        <DatePicker
                                            defaultValue={moment(moment().format(dateFormat)._i)}
                                            format={dateFormat}
                                            value={this.state.birthdayPerent.value ? this.state.birthdayPerent.value : moment(moment().format(dateFormat)._i)}
                                            onChange={this.onChangeDate}
                                        />
                                    </FormItem>
                                </Col>
                                <Col span={12} >
                                    <FormItem label="Giới tính Bệnh Nhân :">
                                        <Select
                                            name="genderPerent"
                                            style={{ width: '50%' }}
                                            defaultValue="MALE"
                                            onChange={this.handleGenderPerent}
                                            value={this.state.genderPerent.value ? this.state.genderPerent.value : ""}
                                        >
                                            {
                                                genderData.map(value =>
                                                    <Option key={value.EN}>{value.VN}{"    "}</Option>
                                                )
                                            }
                                        </Select>
                                    </FormItem>
                                </Col>
                            </Row>

                            <div className="address-booking">
                                <FormItem className="row-file"
                                    label="Địa chỉ :"
                                    validateStatus={this.state.addressPerent.validateStatus}
                                    help={this.state.addressPerent.errorMsg}>
                                    <Input
                                        size="large"
                                        name="addressPerent"
                                        autoComplete="off"
                                        placeholder="Hãy nhập địa chỉ của bạn bệnh nhân !"
                                        value={this.state.addressPerent.value}
                                        onChange={(event) => this.handleInputChangeBooking(event, this.validateAddressPerent)} />
                                </FormItem>
                            </div>

                            <FormItem
                                label="Triệu Chứng Khám Bệnh : "
                                validateStatus={this.state.aboutPerent.validateStatus}
                                help={this.state.aboutPerent.errorMsg}>
                                <TextArea
                                    placeholder="Triệu chứng khám bệnh !"
                                    style={{ fontSize: '16px' }}
                                    autosize={{ minRows: 3, maxRows: 6 }}
                                    name="aboutPerent"
                                    value={this.state.aboutPerent.value}
                                    onChange={(event) => this.handleInputChangeBooking(event, this.validateAboutPerent)} />
                            </FormItem>

                            <Button onClick={() => this.handleSubmitBooking()} type="primary" size="large" className="login-form-button">Đặt Lịch</Button>
                        </div>
                    </Modal>
                </div>
                {
                    <div className="doctor-clinic">
                        <div className="doctor">
                            <div className="logo-infor">
                                <div className="logo">
                                    <CardImg className="img-clinic-image" variant="top" src={"data:image/jpeg;base64," + this.props.doctor.attachmentPerson.data} />
                                    {
                                        this.props.doctor.id === this.props.user.user.id ? (
                                            <div className="btn-taolich">
                                                <Button onClick={this.showModalCreateSecheduce} className="btn-taolich" type="primary" ghost>Tạo Lịch</Button>
                                            </div>
                                        ) : ""
                                    }

                                    <div className="btn-taolich">
                                        <span style={{ color: '#5ab0ff' }}>Lượt đánh giá</span>
                                        <Rate disabled className="show-rate" allowHalf value={this.props.doctor.countRate} />
                                    </div>
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
                                    <div className="rate-commnet">

                                        <div className="rate-logo-text">
                                            <CardText style={{ color: "#1890ff" }}><strong>Đánh giá :</strong></CardText>
                                        </div>

                                        <div className="rate-logo-rate">
                                            <Rate onChange={this.props.onChangeRate} value={this.props.currentRate} />
                                        </div>

                                        <div className="comment">
                                            <Button onClick={() => this.showModalCommnet(this.props.doctor)} type="primary" ghost>Bình luận</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="booking">
                            <div className="title-day">
                                <div className="dat-lich-kham">
                                    <span>ĐẶT LỊCH KHÁM BỆNH :</span>
                                </div>
                                <div className="select-day">
                                    {
                                        this.props.doctor.dateBookingDoctors ? (
                                            <Select
                                                labelInValue
                                                defaultValue={{ key: this.props.doctor.dateBookingDoctors[0] }}
                                                style={{ width: "190px" }}
                                                onChange={(value) => this.handleChangeSelectDate(value, this.props.paramsClininc, this.props.clinics)}
                                            >
                                                {
                                                    this.props.doctor.dateBookingDoctors ? this.props.doctor.dateBookingDoctors.map((value, key) =>
                                                        <Option key = {key} value={this.props.doctor.dateBookingDoctors[key]}>{value}</Option>
                                                    ) : null
                                                }
                                            </Select>
                                        ) : null
                                    }
                                </div>
                            </div>

                            <hr className="hr-booking" />

                            <div className="btn-list">
                                <List
                                    grid={{ gutter: 8, xs: 4 }}
                                    dataSource={this.props.doctor.bookingExperts}
                                    renderItem={item => (
                                        <List.Item className="item-btn" style={{ 'marginTop': '-15px' }}>
                                            {
                                                !item.isExit ? (
                                                    <Button onClick={() => this.showModalBooking(item, this.props.doctor, this.props.clinics)} style={{ width: "105px" }} className="btn-taolich" type="primary" ghost>{item.timeBooking}</Button>
                                                ) : (
                                                        <Button disabled style={{ width: "105px" }} className="btn-taolich" type="primary" ghost>Đã đặt {item.timeBooking}</Button>
                                                    )
                                            }

                                        </List.Item>
                                    )}
                                />

                            </div>

                            <div className="btn-cost">

                            </div>

                        </div>
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
        getDoctorOfClinicList,
        getDoctorList
    }
)(DoctorClinic);