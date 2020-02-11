import React, { Component } from 'react'
import { List, Icon, Rate, Button } from 'antd';
import { Link } from 'react-router-dom';
import { Card, CardText, CardImg, CardBody } from 'reactstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { connect } from "react-redux";
import { getDoctorSearchList } from "../../actions/search.doctor.list.action";
import { getUser } from "../../actions/get.user.action";
import FooterLayout from './../../common/FooterLayout';
import { getHistoryBookedDoctorList } from "../../actions/historyBookedDoctor.list.action";
import LoadingIsEmpty from '../../common/LoadingIsEmpty';
import ANH1 from './../../image/ANH1.png';
import ANH2 from './../../image/img_clinic.PNG';
class SearchClinicAddress extends Component {
    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
    }

    play() {
        this.slider.slickPlay();
    }

    getDoctorList = async (nameAddress) => {
        await this.props.getDoctorSearchList(nameAddress);
        this.props.getHistoryBookedDoctorList();
    }

    componentDidMount = async () => {
        const nameAddress = this.props.match.params.nameAddress;
        await this.getDoctorList(nameAddress);
        this.props.getUser();
    };

    render() {
        const historyBookedDoctor = this.props.historyBookedDoctor.historyBookedDoctor;
        var settings = {
            dots: true,
            // className: "center",
            // centerMode: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        const doctors = this.props.searchdoctors.searchdoctors;

        return (
            <div className="container-clinic">
                <div >
                    <CardImg className="search-top" style={{ height: 250 }} variant="top" src={ANH1} />
                </div>

                <div className="dangnhap-show">
                    <div className="img-show">
                        <CardImg variant="top" src={ANH2} />
                    </div>
                    <div className="sign-show">
                        <CardText className="sign-title">Đăng nhập để đặt lịch khám !</CardText>
                        <Link to={"/login"}>
                            <Button style={{ width: "200px" }} type="primary" >
                                Đăng nhập ngay
                            </Button>
                        </Link>

                        <Link to={"/signup"}>
                            <Button type="link">Đăng ký tài khoản</Button>
                        </Link>
                    </div>
                </div>

                <div className="clinic-all">
                    <CardText className="title-title">
                        Bác sĩ cần tìm
                    </CardText>
                    <List
                        grid={{ gutter: 8, xs: 4 }}
                        dataSource={doctors.object}
                        pagination={{
                            onChange: page => {
                                //   console.log(page);
                            },
                            pageSize: 8,
                            defaultCurrent: 1
                        }}
                        renderItem={item => (
                            <List.Item>
                                <Link className="link-a" style={{ textDecoration: 'none' }} to={`/clinic/${item.id}/${item.clinicResponse.id}`}>
                                    <Card >
                                        <CardImg variant="top" src={"data:image/jpeg;base64," + item.attachment.data} />
                                        <CardBody>
                                            <div className="text-doctor">
                                                <CardText className="text-name-doctor">
                                                    {
                                                        item.degrees.map(value =>
                                                            value.name + " "
                                                        )
                                                    }
                                                    {item.fullName}
                                                </CardText>
                                                <CardText className="text-faculty">
                                                    {
                                                        item.faculties.map(value =>
                                                            value.name + " - "
                                                        )
                                                    }
                                                </CardText>
                                            </div>
                                            <hr className="line-line"></hr>
                                            <div className="text-clinic">
                                                <CardText className="text-name-clinic">
                                                    {
                                                        item.clinicResponse.name
                                                    }
                                                </CardText>
                                                <div>
                                                    <div className="icon-address">
                                                        <Icon style={{ color: '#08c' }} className="icon-address" type="environment" />
                                                    </div>
                                                    <CardText className="text-address">
                                                        {
                                                            item.clinicResponse.address
                                                        }
                                                    </CardText>
                                                </div>
                                            </div>

                                        </CardBody>
                                        <div className="show-revew">
                                            <div className="show-revew-border">
                                                <CardText>Lượt Bình Luận</CardText>
                                                <CardText className="show-count" >{item.countComment}</CardText>
                                            </div>
                                            <div className="show-revew-border">
                                                <CardText>Lượt Đặt Khám</CardText>
                                                <CardText className="show-count" >{item.countBooking}</CardText>
                                            </div>
                                            <div className="show-revew-border">
                                                <span>Lượt Đánh giá</span>
                                                <Rate disabled className="show-rate" allowHalf defaultValue={item.countRate} />
                                            </div>
                                        </div>
                                    </Card>
                                </Link>
                            </List.Item>
                        )}
                    />
                </div>


                {
                    !this.props.user.failed ? (
                        <div className="clinic-book">
                            {
                                historyBookedDoctor && historyBookedDoctor.object ? (
                                    <div>
                                        {
                                            historyBookedDoctor.object > 0 ? (
                                                <CardText className="title-title">
                                                    Bác sĩ bạn đã đặt lịch
                                            </CardText>
                                            ) : ""
                                        }

                                        <Slider className="slider-slider" ref={slider => (this.slider = slider)} {...settings}>

                                            {
                                                historyBookedDoctor.object ? historyBookedDoctor.object.map((value, key) => (
                                                    <List.Item key={key} className="item-slider">
                                                        <Link className="link-a" style={{ textDecoration: 'none' }} to={`/clinic/${value.id}/${value.clinicResponse.id}`}>
                                                            <Card >
                                                                <CardImg variant="top" src={"data:image/jpeg;base64," + value.attachment.data} />
                                                                <CardBody>
                                                                    <div className="text-doctor">
                                                                        <CardText className="text-name-doctor">
                                                                            {
                                                                                value.degrees.map(value =>
                                                                                    value.name + " "
                                                                                )
                                                                            }
                                                                            {value.fullName}
                                                                        </CardText>
                                                                        <CardText className="text-faculty">
                                                                            {
                                                                                value.faculties.map(value =>
                                                                                    value.name + " - "
                                                                                )
                                                                            }
                                                                        </CardText>
                                                                    </div>
                                                                    <hr className="line-line"></hr>
                                                                    <div className="text-clinic">
                                                                        <CardText className="text-name-clinic">
                                                                            {
                                                                                value.clinicResponse.name
                                                                            }
                                                                        </CardText>
                                                                        <div>
                                                                            <div className="icon-address">
                                                                                <Icon style={{ color: '#08c' }} className="icon-address" type="environment" />
                                                                            </div>
                                                                            <CardText className="text-address">
                                                                                {
                                                                                    value.clinicResponse.address
                                                                                }
                                                                            </CardText>
                                                                        </div>
                                                                    </div>

                                                                </CardBody>
                                                                <div className="show-revew">
                                                                    <div className="show-revew-border">
                                                                        <CardText>Lượt Bình Luận</CardText>
                                                                        <CardText className="show-count" >{value.countComment}</CardText>
                                                                    </div>
                                                                    <div className="show-revew-border">
                                                                        <CardText>Lượt Đặt Khám</CardText>
                                                                        <CardText className="show-count" >{value.countBooking}</CardText>
                                                                    </div>
                                                                    <div className="show-revew-border">
                                                                        <span>Đánh giá</span>
                                                                        <Rate disabled className="show-rate" allowHalf defaultValue={value.countRate} />
                                                                    </div>
                                                                </div>
                                                            </Card>
                                                        </Link>
                                                    </List.Item>
                                                )) : <LoadingIsEmpty />
                                            }

                                        </Slider>
                                    </div>
                                ) : <LoadingIsEmpty />
                            }
                        </div>
                    )
                        : ""
                }

                <FooterLayout />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        searchdoctors: state.searchdoctors,
        historyBookedDoctor: state.historyBookedDoctor,
    }
}

export default connect(
    mapStateToProps,
    {
        getDoctorSearchList,
        getHistoryBookedDoctorList,
        getUser,
    }
)(SearchClinicAddress);


