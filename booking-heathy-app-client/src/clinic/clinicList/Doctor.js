import React, { Component } from 'react'
import './Clinic.css';
import {
    withRouter,
} from 'react-router-dom';
import { Card, CardText, CardImg, CardBody } from 'reactstrap';
import moment from 'moment';
import NotFound from '../../common/NotFound';
import ServerError from '../../common/ServerError';
import LoadingIndicator from '../../common/LoadingIndicator';
import { DatePicker, TimePicker, Row, notification, Col, Form, Input, Button, Icon, Carousel, Rate, Layout, Tabs, Modal, Select, List, Radio } from 'antd';
import { connect } from "react-redux";
import { getDoctorOfClinicList } from "../../actions/doctorsOfClinic.list.action";
import { getUser } from "../../actions/get.user.action";
import { getCommentDoctorClinicList } from "../../actions/comment.list.action";
import { addCommnetForDoctor } from './../../util/api/call-api';
import { addRateForDoctor } from './../../util/api/call-api';
import { getDoctorsOfClinicApi } from './../../util/api/call-api';
import { getListCommentDoctorApi } from './../../util/api/call-api';
import { getRateDoctorApi } from './../../util/api/call-api';
const FormItem = Form.Item;
const { TextArea } = Input;
const { Option } = Select;
const { Content } = Layout;
const { TabPane } = Tabs;

class DoctorClinic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments : [],
            rate : null,
            visibleCommnet: false,
            visibleCreateSecheduce: false,
            isLoading: false,
            contentCommnet: {
                value: ""
            },
            countRate : 0
        };
        this.showModalCommnet = this.showModalCommnet.bind(this);
        this.addCommnet = this.addCommnet.bind(this);
    }
    componentDidUpdate(prevProps) {
        if (this.props.doctor.countRate !== prevProps.doctor.countRate) {
            console.log(prevProps.doctor.countRate)
            this.setState({
                countRate : this.props.doctor.countRate
            })
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
            const comments = this.state.comments.slice();
            addCommnetForDoctor(comment).then(Response => {
                this.setState({
                    contentCommnet: {
                        value: ""
                    },
                    visiblecontentCommnet: false,
                    comments:  comments.concat(Response)
                })
            })
        } else {
            notification.error({
                message: 'Booking Clinic',
                description: 'Xin lỗi bạn ! Bạn chưa đăng nhập !'
            });
        }

    };

    handleCancelCommnet = e => {
        this.setState({
            visibleCommnet: false,
            doctor: {},
            contentCommnet: {
                value: ""
            },
            visiblecontentCommnet: false,
        })
    };

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;
        if (inputValue !== "") {
            this.setState({
                [inputName]: {
                    value: inputValue,
                },
                visiblecontentCommnet: true,
            });
        } else {
            this.setState({
                visiblecontentCommnet: false,
            })
        }

    }

    async loadCommentDoctors (paramsClininc){
        // await getRateDoctorApi(paramsClininc).then(response =>{
        //     this.setState({
        //         rate : response.object,
        //     })
        // });
        
        getListCommentDoctorApi(paramsClininc).then(response =>{
           
            this.setState({
                comments : response.object,
            })
        });

       

        await this.props.getCommentDoctorClinicList(paramsClininc)
    }

    async componentDidMount() {
        const idClininc = this.props.clinics.id;
        const idDoctor = this.props.doctor.id;
        let paramsClininc = {
            idClinic: idClininc,
            idDoctor: idDoctor
        }
        await this.loadCommentDoctors(paramsClininc);

    }

    showModalCommnet() {
        this.setState({
            visibleCommnet: true,
        });
    };

    render() {
        console.log(this.state)
        return (
            <div>
                <div className="commnet-modal">
                    <Modal
                        style={{ top: 5 }}
                        footer={null}
                        visible={this.state.visibleCommnet}
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
                                                        this.state.comments ? this.state.comments.map((value, key) =>
                                                            <div key={key} className="item-content-commnet">
                                                                <div className="modal-img-commnet">
                                                                    <CardImg className="img-commnet-image" variant="top" src={"data:image/jpeg;base64," + value.attachment.data} />
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
                                                </div>
                                                <hr />
                                                <div className="written-commnet">
                                                    <div className="modal-img-commnet">
                                                        <CardImg className="img-commnet-image" variant="top" src={this.props.user.user.attachmentPerson ? "data:image/jpeg;base64," + this.props.user.user.attachmentPerson.data : "https://www.aamc.org/sites/default/files/risking-everything-to-become-a-doctor-jirayut-new-latthivongskorn.jpg"} />
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
                                            <TabPane className="modal-btn-ra" tab="Đặt Lịch" key="2">
                                                Content of Tab Pane 2
                                        </TabPane>
                                            <TabPane className="modal-btn-ra" tab="Cá Nhân" key="3">
                                                Content of Tab Pane 3
                                        </TabPane>
                                        </Tabs>
                                    </div>
                                </Card>
                            ) : null
                        }
                    </Modal>
                </div>

                {/* <div className="commnet-modal">
                    <Modal
                        style={{ top: 10 }}
                        footer={null}
                        visible={this.state.visibleCreateSecheduce}
                        onCancel={this.handleCancelCreateSecheduce}
                    >
                        <Form onSubmit={this.handleSubmitCreateBooking} className="login-form">
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
                                <Button type="primary" htmlType="submit" size="large" className="login-form-button">Đăng nhập</Button>
                            </FormItem>
                        </Form>
                    </Modal>
                </div> */}

                {

                    <div  className="doctor-clinic">
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
                                    <Select
                                        labelInValue
                                        defaultValue={{ key: 'lucy' }}
                                        style={{ width: "190px" }}
                                    >
                                        <Option value="jack">Jack dddck dddddd</Option>
                                        <Option value="lucy">Jack ddddddJack</Option>
                                    </Select>
                                </div>
                            </div>

                            <hr className="hr-booking" />

                            <div className="btn-list">
                                <List
                                    grid={{ gutter: 8, xs: 4 }}
                                    dataSource={this.props.doctor.bookingExperts}
                                    renderItem={item => (
                                        <List.Item className="item-btn" style={{ 'marginTop': '-15px' }}>
                                            <Button style={{ width: "105px" }} className="btn-taolich" type="primary" ghost>{item.timeBooking}</Button>
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
        comments : state.commnets
    }
}

export default connect(
    mapStateToProps,
    {
        getUser,
        getCommentDoctorClinicList
    }
)(DoctorClinic);