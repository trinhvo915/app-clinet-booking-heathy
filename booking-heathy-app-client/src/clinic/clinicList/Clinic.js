import React, { Component } from 'react'
import './Clinic.css';
import {
    Link,
    withRouter,
} from 'react-router-dom';
import { Carousel } from 'antd';
import { Card, CardText, CardImg, CardBody } from 'reactstrap';
import { Icon, Menu } from 'antd';
import { Layout } from 'antd';
import { Button } from 'antd';
import { Rate } from 'antd';
import DoctorsClinic from './DoctorsClinic';
import { Radio } from 'antd';
import { List } from 'antd';
import { Select } from 'antd';
import { Modal } from 'antd';
import { Tabs } from 'antd';
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
            visibleCommnet: false,
            visibleCreateSecheduce: false,
        };
        this.showContent = this.showContent.bind(this);
        this.onChange1 = this.onChange1.bind(this);
        this.onChange2 = this.onChange2.bind(this);
        this.onChange3 = this.onChange3.bind(this);

    }

    handleSizeChange = e => {
        this.setState({ size: e.target.value });
    };

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
        });
    };

    showCommentModal = () => {
        if (this.state.layoutComment1 === 1 && this.state.layoutComment2 === 0 && this.state.onChangeComment3 === 0) {
            return (
                <div>
                    coment 1
                </div>
            )
        } else if (this.state.layoutComment1 === 0 && this.state.layoutComment2 === 1 && this.state.onChangeComment3 === 0) {
            return (
                <div>
                    coment 2
                </div>
            )
        } else if (this.state.layoutComment1 === 0 && this.state.layoutComment2 === 0 && this.state.onChangeComment3 === 1) {
            return (
                <div>
                    coment 3
                </div>
            )
        }
    }

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
                                            Content of Tab Pane 1
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
                            visible={this.state.visibleCreateSecheduce}
                            onCancel={this.handleCancelCreateSecheduce}
                        >
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
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
                                <Radio.Button className = "btn-left" onClick={this.onChange1} value="large">Bác sỹ  </Radio.Button>
                                <br />
                                <Radio.Button  className = "btn-left" onClick={this.onChange2} value="default">Default</Radio.Button>
                                <br />
                                <Radio.Button className = "btn-left" onClick={this.onChange3} value="small">Small</Radio.Button>
                            </Radio.Group>
                        </div>
                        <div className="menu-clinic-hori">
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
                        </div>
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