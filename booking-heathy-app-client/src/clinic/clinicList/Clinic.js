import React, { Component } from 'react'
import './Clinic.css';
import {
    withRouter,
} from 'react-router-dom';
import { Card, CardText, CardImg, CardBody } from 'reactstrap';
import moment from 'moment';
import { DatePicker, TimePicker, Row, Col, Form, Input, Button, Icon, Carousel, Rate, Layout, Tabs, Modal, Select, List, Radio } from 'antd';
const FormItem = Form.Item;
const { TextArea } = Input;
const { Option } = Select;
const { Content } = Layout;
const { TabPane } = Tabs;
const data = [
    {
        title: 'Title 1',
    },
    {
        title: 'Title 2',
    },
    {
        title: 'Title 3',
    },
    {
        title: 'Title 4',
    },
    {
        title: 'Title 4',
    },
    {
        title: 'Title 4',
    },
    {
        title: 'Title 4',
    },
    {
        title: 'Title 4',
    },
    {
        title: 'Title 4',
    },
    {
        title: 'Title 4',
    },

];
class Clinic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 'large',
            layout1: 1,
            layout2: 0,
            layout3: 0,
            size: 'large',
            dateBooking: moment(moment().format('YYYY-MM-DD')._i),

            distanceMorning: '5',
            startTimeMorning: "",
            endTimeMorning: "",

            distanceAfternoon: "5",
            startTimeAfternoon: "",
            endTimeAfternoon: "",

            distanceEverning: "5",
            startTimeEverning: "",
            endTimeEverning: "",

            visibleCommnet: false,
            visibleCreateSecheduce: false,
        };
        this.showContent = this.showContent.bind(this);
        this.onChange1 = this.onChange1.bind(this);
        this.onChange2 = this.onChange2.bind(this);
        this.onChange3 = this.onChange3.bind(this);

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
    }

    handleSubmitCreateBooking() {

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
        // console.log("date : " + dayBooking.valueOf())
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

    handleSizeChange = e => {
        this.setState({ size: e.target.value });
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

    showModalCommnet = () => {
        this.setState({
            visibleCommnet: true,
        });
    };

    handleCancelCommnet = e => {
        this.setState({
            visibleCommnet: false,
        });
    };

    showModalCreateSecheduce = () => {
        this.setState({
            visibleCreateSecheduce: true,
        });
    };

    handleCancelCreateSecheduce = e => {
        this.setState({
            visibleCreateSecheduce: false,
            distanceEverning: "5",
            distanceMorning : "5",
            distanceAfternoon : "5",
            startTimeMorning: "",
            endTimeMorning: "",
            startTimeAfternoon: "",
            endTimeAfternoon: "",
            startTimeEverning: "",
            endTimeEverning: "",
        });
    };

    showContent() {
        if (this.state.layout1 === 1 && this.state.layout2 === 0 && this.state.layout3 === 0) {
            return (
                <div>
                    <div className="commnet-modal">
                        <Modal
                            style={{ top: 5 }}
                            footer={null}
                            visible={this.state.visibleCommnet}
                            onCancel={this.handleCancelCommnet}
                        >
                            <Card >
                                <CardImg variant="top" src={"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/72230486_2385505438432891_7454734594902851584_n.jpg?_nc_cat=105&_nc_oc=AQm8sWtHaE-l8FAHErimAlRcJnNjJFIQd7WOh1qnoaCUOrk-num3OR6Vhg3W9GF5WRo&_nc_ht=scontent.fsgn2-1.fna&oh=5061e82249b540db611e9e5f8bc9ab59&oe=5E57A337"} />
                                <CardBody className="show-revew-body">
                                    <div className="text-doctor">
                                        <CardText className="text-name-doctor">
                                            PGs.Ts. Nguyễn Thị Hoài An  Thị Hoài An
                                        </CardText>
                                        <CardText className="text-faculty">
                                            TAI MŨI HỌNG - NHI - TAI MŨI HỌNG - NHI -TAI MŨI HỌNG - NHI
                                        </CardText>
                                    </div>
                                    <hr className="line-line"></hr>
                                    <div className="text-clinic">
                                        <CardText className="text-name-clinic">
                                            Phòng khám Vietlife MRI Trần Bình Trọng
                                        </CardText>
                                        <div>
                                            <div className="icon-address">
                                                <Icon style={{ color: '#08c' }} className="icon-address" type="environment" />
                                            </div>
                                            <CardText className="text-address">
                                                Xã Bình Tú huyện Thăng Bình tỉnh Quảng Nam
                                            </CardText>
                                        </div>
                                    </div>
                                </CardBody>
                                <div className="show-revew-btn">
                                    <Tabs defaultActiveKey="1" >
                                        <TabPane className="modal-btn-ra1" tab="Bình Luận" key="1">
                                            <div className="conten-commnet-modal">
                                                <div className="item-content-commnet">
                                                    <div className="modal-img-commnet">
                                                        <CardImg className="img-commnet-image" variant="top" src={"https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/61161283_2321475054806859_331553702676529152_n.jpg?_nc_cat=100&_nc_oc=AQmBqpb1drO4571bAv--cTorIP66LzZsIePccs_31_sohEG2SFx4Iyrg89-ZLCShm1w&_nc_ht=scontent.fsgn2-2.fna&oh=48e8c12558670da5f74940b239caad1f&oe=5E19B8E4"} />
                                                    </div>
                                                    <div className="conten-commnet-text">
                                                        <CardText className="text-commnet-modal">
                                                            Phòng khám Vietlife MRI Trần Bình Trọng sfdsadf sdfsd sdf sadfsdf sdfas sdf asdf sdf asdf sdf sdf sdf sdf asfsd sdfasdf
                                                    </CardText>
                                                    </div>
                                                </div>

                                                <div className="item-content-commnet">
                                                    <div className="modal-img-commnet">
                                                        <CardImg className="img-commnet-image" variant="top" src={"https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/61161283_2321475054806859_331553702676529152_n.jpg?_nc_cat=100&_nc_oc=AQmBqpb1drO4571bAv--cTorIP66LzZsIePccs_31_sohEG2SFx4Iyrg89-ZLCShm1w&_nc_ht=scontent.fsgn2-2.fna&oh=48e8c12558670da5f74940b239caad1f&oe=5E19B8E4"} />
                                                    </div>
                                                    <div className="conten-commnet-text">
                                                        <CardText className="text-commnet-modal">
                                                            Phòng khám Vietlife MRI Trần Bình Trọng sfdsadf sdfsd sdf sadfsdf sdfas sdf asdf sdf asdf sdf sdf sdf sdf asfsd sdfasdf
                                                    </CardText>
                                                    </div>
                                                </div>

                                                <div className="item-content-commnet">
                                                    <div className="modal-img-commnet">
                                                        <CardImg className="img-commnet-image" variant="top" src={"https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/61161283_2321475054806859_331553702676529152_n.jpg?_nc_cat=100&_nc_oc=AQmBqpb1drO4571bAv--cTorIP66LzZsIePccs_31_sohEG2SFx4Iyrg89-ZLCShm1w&_nc_ht=scontent.fsgn2-2.fna&oh=48e8c12558670da5f74940b239caad1f&oe=5E19B8E4"} />
                                                    </div>
                                                    <div className="conten-commnet-text">
                                                        <CardText className="text-commnet-modal">
                                                            Phòng khám Vietlife MRI Trần Bình Trọng sfdsadf sdfsd sdf sadfsdf sdfas sdf asdf sdf asdf sdf sdf sdf sdf asfsd sdfasdf
                                                    </CardText>
                                                    </div>
                                                </div>

                                            </div>
                                            <hr />
                                            <div className="written-commnet">
                                                <div className="modal-img-commnet">
                                                    <CardImg className="img-commnet-image" variant="top" src={"https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/61161283_2321475054806859_331553702676529152_n.jpg?_nc_cat=100&_nc_oc=AQmBqpb1drO4571bAv--cTorIP66LzZsIePccs_31_sohEG2SFx4Iyrg89-ZLCShm1w&_nc_ht=scontent.fsgn2-2.fna&oh=48e8c12558670da5f74940b239caad1f&oe=5E19B8E4"} />
                                                </div>
                                                <div className="modal-area-commnet">
                                                    <TextArea className="text-area-commnet" placeholder="Viết bình luận ..." autosize={{ minRows: 2, maxRows: 3 }} />
                                                </div>
                                                <div className="btn-dang-commnet">
                                                    <Button className="btn-dang" type="primary" ghost>Đăng</Button>
                                                </div>
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

                        </Modal>
                    </div>

                    <div className="commnet-modal">
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
                                                        disabledHours={() => [1, 2, 3,4,13,14,15,16,17,18,19,20,21,22,23,0]}
                                                        disabledMinutes={() => [1, 2,4,7,8,9,11,12,13,14,16,17,18,19,
                                                            21,22,23,24,25,26,27,28,29,31,32,33,34,35,36,37,38,39,40,41,42,
                                                            43,44,46,47,48,49,50,51,52,53,54,55,56,57,58,59]}
                                                        className = "time-input"
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
                                                        className = "time-input"
                                                        disabledHours={() => [1, 2, 3,4,13,14,15,16,17,18,19,20,21,22,23,0]}
                                                        disabledMinutes={() => [1, 2,4,7,8,9,11,12,13,14,16,17,18,19,
                                                            21,22,23,24,25,26,27,28,29,31,32,33,34,35,36,37,38,39,40,41,42,
                                                            43,44,46,47,48,49,50,51,52,53,54,55,56,57,58,59]}
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
                                                        className = "distance-input"
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
                                <hr/>
                                <FormItem className="row-file">
                                    <div>
                                        <div className="distance-form">
                                            <span>Thời gian buổi chiều</span>
                                            <Row>
                                                <Col span={6}>Thời gian bắt đầu : </Col>
                                                <Col span={18}>
                                                    <TimePicker
                                                        className = "time-input"
                                                        disabledHours={() => [1, 2, 3,4,5,6,7,8,9,10,11,12,18,19,20,21,22,23,0]}
                                                        disabledMinutes={() => [1, 2,4,7,8,9,11,12,13,14,16,17,18,19,
                                                            21,22,23,24,25,26,27,28,29,31,32,33,34,35,36,37,38,39,40,41,42,
                                                            43,44,46,47,48,49,50,51,52,53,54,55,56,57,58,59]}
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
                                                        disabledHours={() => [1, 2, 3,4,5,6,7,8,9,10,11,12,18,19,20,21,22,23,0]}
                                                        disabledMinutes={() => [1, 2,4,7,8,9,11,12,13,14,16,17,18,19,
                                                            21,22,23,24,25,26,27,28,29,31,32,33,34,35,36,37,38,39,40,41,42,
                                                            43,44,46,47,48,49,50,51,52,53,54,55,56,57,58,59]}
                                                        className = "time-input"
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
                                                        className = "distance-input"
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
                                                        className = "time-input"
                                                        disabledHours={() => [1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,0]}
                                                        disabledMinutes={() => [1, 2,4,7,8,9,11,12,13,14,16,17,18,19,
                                                            21,22,23,24,25,26,27,28,29,31,32,33,34,35,36,37,38,39,40,41,42,
                                                            43,44,46,47,48,49,50,51,52,53,54,55,56,57,58,59]}
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
                                                        className = "time-input"
                                                        disabledHours={() => [1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,0]}
                                                        disabledMinutes={() => [1, 2,4,7,8,9,11,12,13,14,16,17,18,19,
                                                            21,22,23,24,25,26,27,28,29,31,32,33,34,35,36,37,38,39,40,41,42,
                                                            43,44,46,47,48,49,50,51,52,53,54,55,56,57,58,59]}
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
                                                        className = "distance-input"
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
                    </div>

                    <div className="doctor-clinic">
                        <div className="doctor">
                            <div className="logo-infor">
                                <div className="logo">
                                    <CardImg className="img-clinic-image" variant="top" src={"https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/61161283_2321475054806859_331553702676529152_n.jpg?_nc_cat=100&_nc_oc=AQmBqpb1drO4571bAv--cTorIP66LzZsIePccs_31_sohEG2SFx4Iyrg89-ZLCShm1w&_nc_ht=scontent.fsgn2-2.fna&oh=48e8c12558670da5f74940b239caad1f&oe=5E19B8E4"} />

                                    <div className="btn-taolich">
                                        <Button onClick={this.showModalCreateSecheduce} className="btn-taolich" type="primary" ghost>Tạo Lịch</Button>
                                    </div>
                                    <div className="btn-taolich">
                                        <span style={{ color: '#5ab0ff' }}>Lượt đánh giá</span>
                                        <Rate disabled className="show-rate" allowHalf defaultValue={2.5} />
                                    </div>
                                </div>
                                <div className="infor">
                                    <CardText className="logo-name-clinic">
                                        Phòng khám Vietlife MRI Trần Bình Trọng
                                    </CardText>
                                    <CardText className="infor-name-clinic" >
                                        Chuyên gia về Thần kinh Sọ não và Cột sống
                                        Nguyên Phó chủ tịch Hội Phẫu thuật Thần kinh Việt Nam
                                        Bác sĩ khám cho người bệnh từ 13 tuổi trở lên
                                        Bác sĩ khám cho người bệnh từ 13 tuổi trở lên
                                        Bác sĩ khám cho người bệnh từ 13 tuổi trở lên
                                    </CardText>
                                    <div className="address-logo">
                                        <div className="icon-address">
                                            <Icon style={{ color: '#08c' }} className="icon-address" type="environment" />
                                        </div>
                                        <CardText className="text-address">
                                            Xã Bình Tú huyện Thăng Bình tỉnh Quảng Nam
                                        </CardText>
                                    </div>
                                    <div className="rate-commnet">

                                        <div className="rate-logo-text">
                                            <CardText style={{ color: "#1890ff" }}><strong>Đánh giá :</strong></CardText>
                                        </div>

                                        <div className="rate-logo-rate">
                                            <Rate defaultValue={0} />
                                        </div>

                                        <div className="comment">
                                            <Button onClick={this.showModalCommnet} type="primary" ghost>Bình luận</Button>
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
                                    dataSource={data}
                                    renderItem={item => (
                                        <List.Item className="item-btn" style={{ 'marginTop': '-15px' }}>
                                            <Button style={{ width: "105px" }} className="btn-taolich" type="primary" ghost>{item.title}</Button>
                                        </List.Item>
                                    )}
                                />
                            </div>

                            <div className="btn-cost">

                            </div>

                        </div>
                    </div>

                    <div className="doctor-clinic">
                        <div className="doctor">
                            <div className="logo-infor">
                                <div className="logo">
                                    <CardImg className="img-clinic-image" variant="top" src={"https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/61161283_2321475054806859_331553702676529152_n.jpg?_nc_cat=100&_nc_oc=AQmBqpb1drO4571bAv--cTorIP66LzZsIePccs_31_sohEG2SFx4Iyrg89-ZLCShm1w&_nc_ht=scontent.fsgn2-2.fna&oh=48e8c12558670da5f74940b239caad1f&oe=5E19B8E4"} />

                                    <div className="btn-taolich">
                                        <Button onClick={this.showModalCreateSecheduce} className="btn-taolich" type="primary" ghost>Tạo Lịch</Button>
                                    </div>
                                    <div className="btn-taolich">
                                        <span style={{ color: '#5ab0ff' }}>Lượt đánh giá</span>
                                        <Rate disabled className="show-rate" allowHalf defaultValue={2.5} />
                                    </div>
                                </div>
                                <div className="infor">
                                    <CardText className="logo-name-clinic">
                                        Phòng khám Vietlife MRI Trần Bình Trọng
                                    </CardText>
                                    <CardText className="infor-name-clinic" >
                                        Chuyên gia về Thần kinh Sọ não và Cột sống
                                        Nguyên Phó chủ tịch Hội Phẫu thuật Thần kinh Việt Nam
                                        Bác sĩ khám cho người bệnh từ 13 tuổi trở lên
                                        Bác sĩ khám cho người bệnh từ 13 tuổi trở lên
                                        Bác sĩ khám cho người bệnh từ 13 tuổi trở lên
                                    </CardText>
                                    <div className="address-logo">
                                        <div className="icon-address">
                                            <Icon style={{ color: '#08c' }} className="icon-address" type="environment" />
                                        </div>
                                        <CardText className="text-address">
                                            Xã Bình Tú huyện Thăng Bình tỉnh Quảng Nam
                                        </CardText>
                                    </div>
                                    <div className="rate-commnet">

                                        <div className="rate-logo-text">
                                            <CardText style={{ color: "#1890ff" }}><strong>Đánh giá :</strong></CardText>
                                        </div>

                                        <div className="rate-logo-rate">
                                            <Rate defaultValue={0} />
                                        </div>

                                        <div className="comment">
                                            <Button onClick={this.showModalCommnet} type="primary" ghost>Bình luận</Button>
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
                                    dataSource={data}
                                    renderItem={item => (
                                        <List.Item className="item-btn" style={{ 'marginTop': '-15px' }}>
                                            <Button style={{ width: "105px" }} className="btn-taolich" type="primary" ghost>{item.title}</Button>
                                        </List.Item>
                                    )}
                                />
                            </div>

                            <div className="btn-cost">

                            </div>

                        </div>
                    </div>

                    <div className="doctor-clinic">
                        <div className="doctor">
                            <div className="logo-infor">
                                <div className="logo">
                                    <CardImg className="img-clinic-image" variant="top" src={"https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/61161283_2321475054806859_331553702676529152_n.jpg?_nc_cat=100&_nc_oc=AQmBqpb1drO4571bAv--cTorIP66LzZsIePccs_31_sohEG2SFx4Iyrg89-ZLCShm1w&_nc_ht=scontent.fsgn2-2.fna&oh=48e8c12558670da5f74940b239caad1f&oe=5E19B8E4"} />

                                    <div className="btn-taolich">
                                        <Button onClick={this.showModalCreateSecheduce} className="btn-taolich" type="primary" ghost>Tạo Lịch</Button>
                                    </div>
                                    <div className="btn-taolich">
                                        <span style={{ color: '#5ab0ff' }}>Lượt đánh giá</span>
                                        <Rate disabled className="show-rate" allowHalf defaultValue={2.5} />
                                    </div>
                                </div>
                                <div className="infor">
                                    <CardText className="logo-name-clinic">
                                        Phòng khám Vietlife MRI Trần Bình Trọng
                                    </CardText>
                                    <CardText className="infor-name-clinic" >
                                        Chuyên gia về Thần kinh Sọ não và Cột sống
                                        Nguyên Phó chủ tịch Hội Phẫu thuật Thần kinh Việt Nam
                                        Bác sĩ khám cho người bệnh từ 13 tuổi trở lên
                                        Bác sĩ khám cho người bệnh từ 13 tuổi trở lên
                                        Bác sĩ khám cho người bệnh từ 13 tuổi trở lên
                                    </CardText>
                                    <div className="address-logo">
                                        <div className="icon-address">
                                            <Icon style={{ color: '#08c' }} className="icon-address" type="environment" />
                                        </div>
                                        <CardText className="text-address">
                                            Xã Bình Tú huyện Thăng Bình tỉnh Quảng Nam
                                        </CardText>
                                    </div>
                                    <div className="rate-commnet">

                                        <div className="rate-logo-text">
                                            <CardText style={{ color: "#1890ff" }}><strong>Đánh giá :</strong></CardText>
                                        </div>

                                        <div className="rate-logo-rate">
                                            <Rate defaultValue={0} />
                                        </div>

                                        <div className="comment">
                                            <Button onClick={this.showModalCommnet} type="primary" ghost>Bình luận</Button>
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
                                    dataSource={data}
                                    renderItem={item => (
                                        <List.Item className="item-btn" style={{ 'marginTop': '-15px' }}>
                                            <Button style={{ width: "105px" }} className="btn-taolich" type="primary" ghost>{item.title}</Button>
                                        </List.Item>
                                    )}
                                />
                            </div>

                            <div className="btn-cost">

                            </div>

                        </div>
                    </div>
                    <div className="doctor-clinic">
                        <div className="doctor">
                            <div className="logo-infor">
                                <div className="logo">
                                    <CardImg className="img-clinic-image" variant="top" src={"https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/61161283_2321475054806859_331553702676529152_n.jpg?_nc_cat=100&_nc_oc=AQmBqpb1drO4571bAv--cTorIP66LzZsIePccs_31_sohEG2SFx4Iyrg89-ZLCShm1w&_nc_ht=scontent.fsgn2-2.fna&oh=48e8c12558670da5f74940b239caad1f&oe=5E19B8E4"} />

                                    <div className="btn-taolich">
                                        <Button onClick={this.showModalCreateSecheduce} className="btn-taolich" type="primary" ghost>Tạo Lịch</Button>
                                    </div>
                                    <div className="btn-taolich">
                                        <span style={{ color: '#5ab0ff' }}>Lượt đánh giá</span>
                                        <Rate disabled className="show-rate" allowHalf defaultValue={2.5} />
                                    </div>
                                </div>
                                <div className="infor">
                                    <CardText className="logo-name-clinic">
                                        Phòng khám Vietlife MRI Trần Bình Trọng
                                    </CardText>
                                    <CardText className="infor-name-clinic" >
                                        Chuyên gia về Thần kinh Sọ não và Cột sống
                                        Nguyên Phó chủ tịch Hội Phẫu thuật Thần kinh Việt Nam
                                        Bác sĩ khám cho người bệnh từ 13 tuổi trở lên
                                        Bác sĩ khám cho người bệnh từ 13 tuổi trở lên
                                        Bác sĩ khám cho người bệnh từ 13 tuổi trở lên
                                    </CardText>
                                    <div className="address-logo">
                                        <div className="icon-address">
                                            <Icon style={{ color: '#08c' }} className="icon-address" type="environment" />
                                        </div>
                                        <CardText className="text-address">
                                            Xã Bình Tú huyện Thăng Bình tỉnh Quảng Nam
                                        </CardText>
                                    </div>
                                    <div className="rate-commnet">

                                        <div className="rate-logo-text">
                                            <CardText style={{ color: "#1890ff" }}><strong>Đánh giá :</strong></CardText>
                                        </div>

                                        <div className="rate-logo-rate">
                                            <Rate defaultValue={0} />
                                        </div>

                                        <div className="comment">
                                            <Button onClick={this.showModalCommnet} type="primary" ghost>Bình luận</Button>
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
                                    dataSource={data}
                                    renderItem={item => (
                                        <List.Item className="item-btn" style={{ 'marginTop': '-15px' }}>
                                            <Button style={{ width: "105px" }} className="btn-taolich" type="primary" ghost>{item.title}</Button>
                                        </List.Item>
                                    )}
                                />
                            </div>

                            <div className="btn-cost">

                            </div>

                        </div>
                    </div>
                    <div className="doctor-clinic">
                        <div className="doctor">
                            <div className="logo-infor">
                                <div className="logo">
                                    <CardImg className="img-clinic-image" variant="top" src={"https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/61161283_2321475054806859_331553702676529152_n.jpg?_nc_cat=100&_nc_oc=AQmBqpb1drO4571bAv--cTorIP66LzZsIePccs_31_sohEG2SFx4Iyrg89-ZLCShm1w&_nc_ht=scontent.fsgn2-2.fna&oh=48e8c12558670da5f74940b239caad1f&oe=5E19B8E4"} />

                                    <div className="btn-taolich">
                                        <Button className="btn-taolich" type="primary" ghost>Tạo Lịch</Button>
                                    </div>
                                    <div className="btn-taolich">
                                        <span style={{ color: '#5ab0ff' }}>Lượt đánh giá</span>
                                        <Rate disabled className="show-rate" allowHalf defaultValue={2.5} />
                                    </div>
                                </div>
                                <div className="infor">
                                    <CardText className="logo-name-clinic">
                                        Phòng khám Vietlife MRI Trần Bình Trọng
                                    </CardText>
                                    <CardText className="infor-name-clinic" >
                                        Chuyên gia về Thần kinh Sọ não và Cột sống
                                        Nguyên Phó chủ tịch Hội Phẫu thuật Thần kinh Việt Nam
                                        Bác sĩ khám cho người bệnh từ 13 tuổi trở lên
                                        Bác sĩ khám cho người bệnh từ 13 tuổi trở lên
                                        Bác sĩ khám cho người bệnh từ 13 tuổi trở lên
                                    </CardText>
                                    <div className="address-logo">
                                        <div className="icon-address">
                                            <Icon style={{ color: '#08c' }} className="icon-address" type="environment" />
                                        </div>
                                        <CardText className="text-address">
                                            Xã Bình Tú huyện Thăng Bình tỉnh Quảng Nam
                                        </CardText>
                                    </div>
                                    <div className="rate-commnet">

                                        <div className="rate-logo-text">
                                            <CardText style={{ color: "#1890ff" }}><strong>Đánh giá :</strong></CardText>
                                        </div>

                                        <div className="rate-logo-rate">
                                            <Rate defaultValue={0} />
                                        </div>

                                        <div className="comment">
                                            <Button type="primary" ghost>Bình luận</Button>
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
                                    dataSource={data}
                                    renderItem={item => (
                                        <List.Item className="item-btn" style={{ 'marginTop': '-15px' }}>
                                            <Button style={{ width: "105px" }} className="btn-taolich" type="primary" ghost>{item.title}</Button>
                                        </List.Item>
                                    )}
                                />
                            </div>

                            <div className="btn-cost">

                            </div>

                        </div>
                    </div>
                    <div className="doctor-clinic">
                        <div className="doctor">
                            <div className="logo-infor">
                                <div className="logo">
                                    <CardImg className="img-clinic-image" variant="top" src={"https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/61161283_2321475054806859_331553702676529152_n.jpg?_nc_cat=100&_nc_oc=AQmBqpb1drO4571bAv--cTorIP66LzZsIePccs_31_sohEG2SFx4Iyrg89-ZLCShm1w&_nc_ht=scontent.fsgn2-2.fna&oh=48e8c12558670da5f74940b239caad1f&oe=5E19B8E4"} />

                                    <div className="btn-taolich">
                                        <Button className="btn-taolich" type="primary" ghost>Tạo Lịch</Button>
                                    </div>
                                    <div className="btn-taolich">
                                        <span style={{ color: '#5ab0ff' }}>Lượt đánh giá</span>
                                        <Rate disabled className="show-rate" allowHalf defaultValue={2.5} />
                                    </div>
                                </div>
                                <div className="infor">
                                    <CardText className="logo-name-clinic">
                                        Phòng khám Vietlife MRI Trần Bình Trọng
                                    </CardText>
                                    <CardText className="infor-name-clinic" >
                                        Chuyên gia về Thần kinh Sọ não và Cột sống
                                        Nguyên Phó chủ tịch Hội Phẫu thuật Thần kinh Việt Nam
                                        Bác sĩ khám cho người bệnh từ 13 tuổi trở lên
                                        Bác sĩ khám cho người bệnh từ 13 tuổi trở lên
                                        Bác sĩ khám cho người bệnh từ 13 tuổi trở lên
                                    </CardText>
                                    <div className="address-logo">
                                        <div className="icon-address">
                                            <Icon style={{ color: '#08c' }} className="icon-address" type="environment" />
                                        </div>
                                        <CardText className="text-address">
                                            Xã Bình Tú huyện Thăng Bình tỉnh Quảng Nam
                                        </CardText>
                                    </div>
                                    <div className="rate-commnet">

                                        <div className="rate-logo-text">
                                            <CardText style={{ color: "#1890ff" }}><strong>Đánh giá :</strong></CardText>
                                        </div>

                                        <div className="rate-logo-rate">
                                            <Rate defaultValue={0} />
                                        </div>

                                        <div className="comment">
                                            <Button onClick={this.showModalCommnet} type="primary" ghost>Bình luận</Button>
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
                                    dataSource={data}
                                    renderItem={item => (
                                        <List.Item className="item-btn" style={{ 'marginTop': '-15px' }}>
                                            <Button style={{ width: "105px" }} className="btn-taolich" type="primary" ghost>{item.title}</Button>
                                        </List.Item>
                                    )}
                                />
                            </div>

                            <div className="btn-cost">

                            </div>

                        </div>
                    </div>
                </div>
            )
        } else if (this.state.layout1 === 0 && this.state.layout2 === 1 && this.state.layout3 === 0) {
            return (
                <div>
                    acdsdfasdfasd2
                </div>
            )
        } else if (this.state.layout1 === 0 && this.state.layout2 === 0 && this.state.layout3 === 1) {
            return (
                <div>
                    adesdfasdfa3
                </div>
            )
        }
    }
    onChange1() {
        this.setState({
            layout1: 1,
            layout2: 0,
            layout3: 0,
        })
    }
    onChange2() {
        this.setState({
            layout1: 0,
            layout2: 1,
            layout3: 0,
        })
    }
    onChange3() {
        this.setState({
            layout1: 0,
            layout2: 0,
            layout3: 1,
        })
    }

    render() {
        const { size } = this.state;

        console.log(this.state)
        return (
            <Layout>
                <div className="main-clinic">
                    <div className="clinic-left">
                        <div className="abc">

                        </div>
                        <div className="logo-clinic">
                            <CardImg className="logo-clinic-image" variant="top" src={"https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/61161283_2321475054806859_331553702676529152_n.jpg?_nc_cat=100&_nc_oc=AQmBqpb1drO4571bAv--cTorIP66LzZsIePccs_31_sohEG2SFx4Iyrg89-ZLCShm1w&_nc_ht=scontent.fsgn2-2.fna&oh=48e8c12558670da5f74940b239caad1f&oe=5E19B8E4"} />
                        </div>

                        <div className="logo-clinic-name">
                            <CardText className="name-clinic">
                                Phòng khám Vietlife MRI Trần Bình Trọng
                            </CardText>

                        </div>

                        <div className="address-clinic">
                            <div className="icon-address">
                                <Icon style={{ color: '#08c' }} className="icon-address" type="environment" />
                            </div>
                            <CardText className="text-address">
                                Xã Bình Tú huyện Thăng Bình tỉnh Quảng Nam
                            </CardText>
                        </div>

                        <div className="menu-clinic">
                            <Radio.Group value={size} onChange={this.handleSizeChange}>
                                <Radio.Button className="btn-left" onClick={this.onChange1} value="large">Bác sỹ  </Radio.Button>
                                <br />
                                <Radio.Button className="btn-left" onClick={this.onChange2} value="default">Default</Radio.Button>
                                <br />
                                <Radio.Button className="btn-left" onClick={this.onChange3} value="small">Small</Radio.Button>
                            </Radio.Group>
                        </div>
                        {/* <div className="menu-clinic-hori">
                            <Menu
                                mode="horizontal"
                            >
                                <Menu.Item key="/all-doctor-clinic">
                                    <Link style={{ 'textDecoration': 'none' }} to="/all-doctor-clinic"> BÁC SỸ</Link>
                                </Menu.Item>
                                <Menu.Item key="/introlduce-clinic">
                                    <Link style={{ 'textDecoration': 'none' }} to="/introlduce-clinic"> THÔNG TIN PHÒNG KHÁM </Link>
                                </Menu.Item>
                                <Menu.Item key="/equitment-clinic">
                                    <Link style={{ 'textDecoration': 'none' }} to="/equitment-clinic"> TRANG THIẾT BỊ </Link>
                                </Menu.Item>
                                <Menu.Item key="/cost-clinic">
                                    <Link style={{ 'textDecoration': 'none' }} to="/cost-clinic"> GIÁ KHÁM </Link>
                                </Menu.Item>
                            </Menu>
                        </div> */}
                    </div>
                    <Content>
                        <div className="clinic-right">
                            <div className="clinic-image">
                                <Carousel autoplay>
                                    <div>
                                        <CardImg className="img-clinic" variant="top" src={"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/72230486_2385505438432891_7454734594902851584_n.jpg?_nc_cat=105&_nc_oc=AQm8sWtHaE-l8FAHErimAlRcJnNjJFIQd7WOh1qnoaCUOrk-num3OR6Vhg3W9GF5WRo&_nc_ht=scontent.fsgn2-1.fna&oh=5061e82249b540db611e9e5f8bc9ab59&oe=5E57A337"} />
                                    </div>
                                    <div>
                                        <CardImg className="img-clinic" variant="top" src={"https://scontent.fdad3-3.fna.fbcdn.net/v/t31.0-8/s960x960/17990664_681772418696789_4416410583673689846_o.jpg?_nc_cat=111&cachebreaker=hd&_nc_oc=AQlyR8oCMSZARHCovGxWHqddVyJ8KTtqD2b0WKL82dLuaIFhlK_SUG04eTCjX-61VP8&_nc_ht=scontent.fdad3-3.fna&oh=885aaa53e8c5edd91bd6e110b65e278a&oe=5E55C500"} />
                                    </div>
                                    <div>
                                        <CardImg className="img-clinic" variant="top" src={"https://scontent.fdad3-3.fna.fbcdn.net/v/t31.0-8/s960x960/17990664_681772418696789_4416410583673689846_o.jpg?_nc_cat=111&cachebreaker=hd&_nc_oc=AQlyR8oCMSZARHCovGxWHqddVyJ8KTtqD2b0WKL82dLuaIFhlK_SUG04eTCjX-61VP8&_nc_ht=scontent.fdad3-3.fna&oh=885aaa53e8c5edd91bd6e110b65e278a&oe=5E55C500"} />
                                    </div>
                                    <div>
                                        <CardImg className="img-clinic" variant="top" src={"https://scontent.fdad3-1.fna.fbcdn.net/v/t1.0-9/54521655_2228808513807990_3782795482493878272_n.jpg?_nc_cat=103&cachebreaker=hd&_nc_oc=AQk8_EkMOSe40SWgcVXgbvn4mTnaBPZnC4AqwWImYOD46VcEcaysm1xDDYGhYnniENM&_nc_ht=scontent.fdad3-1.fna&oh=87966523031a32b9837d6508f9081f8e&oe=5E5B5CCC"} />
                                    </div>
                                </Carousel>
                            </div>
                            <div className="main-content">
                                {
                                    this.showContent()
                                }
                            </div>
                        </div>
                    </Content>
                </div>
            </Layout>
        )
    }
}

export default withRouter(Clinic);