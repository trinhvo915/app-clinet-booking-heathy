import React, { Component } from 'react'
import { List,Icon ,Rate} from 'antd';
import { Link } from 'react-router-dom';
import { Card, CardText, CardImg, CardBody} from 'reactstrap';
import './ClinicList.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { connect } from "react-redux";
import { getDoctorList } from "../../actions/doctor.list.action";

function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
}

class ClinicList extends Component {
    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
    }

    play() {
        this.slider.slickPlay();
    }

    getDoctorList = async () =>{
        await this.props.getDoctorList();
    }

    componentDidMount = async () => {
        await this.getDoctorList();
    };

    render() {
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
        const {doctors} = this.props.doctors;

        return (
            <div className = "container-clinic">
                <div className = "search-top">
                   
                </div>

                <div className = "clinic-all">
                    <CardText className = "title-title">
                        Bác sĩ nổi bật
                    </CardText>
                    <Slider  className = "slider-slider" ref={slider => (this.slider = slider)} {...settings}>
                        <List.Item className = "item-slider">
                           <Card >
                                <CardImg variant="top" src={"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/72230486_2385505438432891_7454734594902851584_n.jpg?_nc_cat=105&_nc_oc=AQm8sWtHaE-l8FAHErimAlRcJnNjJFIQd7WOh1qnoaCUOrk-num3OR6Vhg3W9GF5WRo&_nc_ht=scontent.fsgn2-1.fna&oh=5061e82249b540db611e9e5f8bc9ab59&oe=5E57A337"} />
                                <CardBody>
                                    <div className = "text-doctor">
                                        <CardText className = "text-name-doctor">
                                            PGs.Ts. Nguyễn Thị Hoài An  Thị Hoài An 
                                        </CardText>
                                        <CardText className = "text-faculty">
                                            TAI MŨI HỌNG - NHI - TAI MŨI HỌNG - NHI -TAI MŨI HỌNG - NHI
                                        </CardText>
                                    </div>
                                    <hr className = "line-line"></hr>
                                    <div className = "text-clinic">
                                        <CardText className = "text-name-clinic">
                                            Phòng khám Vietlife MRI Trần Bình Trọng 
                                        </CardText>
                                        <div>
                                            <div className = "icon-address">
                                                <Icon style={{color: '#08c' }} className = "icon-address" type="environment" />
                                            </div>
                                            <CardText className = "text-address">
                                                Xã Bình Tú huyện Thăng Bình tỉnh Quảng Nam
                                            </CardText>
                                        </div>
                                    </div>
                                   
                                </CardBody>
                                <div className = "show-revew">
                                    <div className = "show-revew-border">
                                        <CardText>Lượt Bình Luận</CardText>
                                        <CardText className = "show-count" >1024</CardText>
                                    </div>
                                    <div className = "show-revew-border">
                                        <CardText>Lượt Đặt Khám</CardText>
                                        <CardText className = "show-count" >1024</CardText>
                                    </div>
                                    <div className = "show-revew-border">
                                        <span>Đánh giá</span>
                                        <Rate  disabled className = "show-rate" allowHalf defaultValue={2.5} />
                                    </div>
                                </div>
                            </Card>
                        </List.Item>
                    
                        <List.Item className = "item-slider">
                           <Card >
                                <CardImg variant="top" src={"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/72230486_2385505438432891_7454734594902851584_n.jpg?_nc_cat=105&_nc_oc=AQm8sWtHaE-l8FAHErimAlRcJnNjJFIQd7WOh1qnoaCUOrk-num3OR6Vhg3W9GF5WRo&_nc_ht=scontent.fsgn2-1.fna&oh=5061e82249b540db611e9e5f8bc9ab59&oe=5E57A337"} />
                                <CardBody>
                                    <div className = "text-doctor">
                                        <CardText className = "text-name-doctor">
                                            PGs.Ts. Nguyễn Thị Hoài An  Thị Hoài An 
                                        </CardText>
                                        <CardText className = "text-faculty">
                                            TAI MŨI HỌNG - NHI - TAI MŨI HỌNG - NHI -TAI MŨI HỌNG - NHI
                                        </CardText>
                                    </div>
                                    <hr className = "line-line"></hr>
                                    <div className = "text-clinic">
                                        <CardText className = "text-name-clinic">
                                            Phòng khám Vietlife MRI Trần Bình Trọng 
                                        </CardText>
                                        <div>
                                            <div className = "icon-address">
                                                <Icon style={{color: '#08c' }} className = "icon-address" type="environment" />
                                            </div>
                                            <CardText className = "text-address">
                                                Xã Bình Tú huyện Thăng Bình tỉnh Quảng Nam
                                            </CardText>
                                        </div>
                                    </div>
                                   
                                </CardBody>
                                <div className = "show-revew">
                                    <div className = "show-revew-border">
                                        <CardText>Lượt Bình Luận</CardText>
                                        <CardText className = "show-count" >1024</CardText>
                                    </div>
                                    <div className = "show-revew-border">
                                        <CardText>Lượt Đặt Khám</CardText>
                                        <CardText className = "show-count" >1024</CardText>
                                    </div>
                                    <div className = "show-revew-border">
                                        <span>Đánh giá</span>
                                        <Rate  disabled className = "show-rate" allowHalf defaultValue={2.5} />
                                    </div>
                                </div>
                            </Card>
                        </List.Item>
                    
                        <List.Item className = "item-slider">
                           <Card >
                                <CardImg variant="top" src={"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/72230486_2385505438432891_7454734594902851584_n.jpg?_nc_cat=105&_nc_oc=AQm8sWtHaE-l8FAHErimAlRcJnNjJFIQd7WOh1qnoaCUOrk-num3OR6Vhg3W9GF5WRo&_nc_ht=scontent.fsgn2-1.fna&oh=5061e82249b540db611e9e5f8bc9ab59&oe=5E57A337"} />
                                <CardBody>
                                    <div className = "text-doctor">
                                        <CardText className = "text-name-doctor">
                                            PGs.Ts. Nguyễn Thị Hoài An  Thị Hoài An 
                                        </CardText>
                                        <CardText className = "text-faculty">
                                            TAI MŨI HỌNG - NHI - TAI MŨI HỌNG - NHI -TAI MŨI HỌNG - NHI
                                        </CardText>
                                    </div>
                                    <hr className = "line-line"></hr>
                                    <div className = "text-clinic">
                                        <CardText className = "text-name-clinic">
                                            Phòng khám Vietlife MRI Trần Bình Trọng 
                                        </CardText>
                                        <div>
                                            <div className = "icon-address">
                                                <Icon style={{color: '#08c' }} className = "icon-address" type="environment" />
                                            </div>
                                            <CardText className = "text-address">
                                                Xã Bình Tú huyện Thăng Bình tỉnh Quảng Nam
                                            </CardText>
                                        </div>
                                    </div>
                                   
                                </CardBody>
                                <div className = "show-revew">
                                    <div className = "show-revew-border">
                                        <CardText>Lượt Bình Luận</CardText>
                                        <CardText className = "show-count" >1024</CardText>
                                    </div>
                                    <div className = "show-revew-border">
                                        <CardText>Lượt Đặt Khám</CardText>
                                        <CardText className = "show-count" >1024</CardText>
                                    </div>
                                    <div className = "show-revew-border">
                                        <span>Đánh giá</span>
                                        <Rate  disabled className = "show-rate" allowHalf defaultValue={2.5} />
                                    </div>
                                </div>
                            </Card>
                        </List.Item>
                    
                        <List.Item className = "item-slider">
                           <Card >
                                <CardImg variant="top" src={"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/72230486_2385505438432891_7454734594902851584_n.jpg?_nc_cat=105&_nc_oc=AQm8sWtHaE-l8FAHErimAlRcJnNjJFIQd7WOh1qnoaCUOrk-num3OR6Vhg3W9GF5WRo&_nc_ht=scontent.fsgn2-1.fna&oh=5061e82249b540db611e9e5f8bc9ab59&oe=5E57A337"} />
                                <CardBody>
                                    <div className = "text-doctor">
                                        <CardText className = "text-name-doctor">
                                            PGs.Ts. Nguyễn Thị Hoài An  Thị Hoài An 
                                        </CardText>
                                        <CardText className = "text-faculty">
                                            TAI MŨI HỌNG - NHI - TAI MŨI HỌNG - NHI -TAI MŨI HỌNG - NHI
                                        </CardText>
                                    </div>
                                    <hr className = "line-line"></hr>
                                    <div className = "text-clinic">
                                        <CardText className = "text-name-clinic">
                                            Phòng khám Vietlife MRI Trần Bình Trọng 
                                        </CardText>
                                        <div>
                                            <div className = "icon-address">
                                                <Icon style={{color: '#08c' }} className = "icon-address" type="environment" />
                                            </div>
                                            <CardText className = "text-address">
                                                Xã Bình Tú huyện Thăng Bình tỉnh Quảng Nam
                                            </CardText>
                                        </div>
                                    </div>
                                   
                                </CardBody>
                                <div className = "show-revew">
                                    <div className = "show-revew-border">
                                        <CardText>Lượt Bình Luận</CardText>
                                        <CardText className = "show-count" >1024</CardText>
                                    </div>
                                    <div className = "show-revew-border">
                                        <CardText>Lượt Đặt Khám</CardText>
                                        <CardText className = "show-count" >1024</CardText>
                                    </div>
                                    <div className = "show-revew-border">
                                        <span>Đánh giá</span>
                                        <Rate  disabled className = "show-rate" allowHalf defaultValue={2.5} />
                                    </div>
                                </div>
                            </Card>
                        </List.Item>
                    
                        <List.Item className = "item-slider">
                           <Card >
                                <CardImg variant="top" src={"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/72230486_2385505438432891_7454734594902851584_n.jpg?_nc_cat=105&_nc_oc=AQm8sWtHaE-l8FAHErimAlRcJnNjJFIQd7WOh1qnoaCUOrk-num3OR6Vhg3W9GF5WRo&_nc_ht=scontent.fsgn2-1.fna&oh=5061e82249b540db611e9e5f8bc9ab59&oe=5E57A337"} />
                                <CardBody>
                                    <div className = "text-doctor">
                                        <CardText className = "text-name-doctor">
                                            PGs.Ts. Nguyễn Thị Hoài An  Thị Hoài An 
                                        </CardText>
                                        <CardText className = "text-faculty">
                                            TAI MŨI HỌNG - NHI - TAI MŨI HỌNG - NHI -TAI MŨI HỌNG - NHI
                                        </CardText>
                                    </div>
                                    <hr className = "line-line"></hr>
                                    <div className = "text-clinic">
                                        <CardText className = "text-name-clinic">
                                            Phòng khám Vietlife MRI Trần Bình Trọng 
                                        </CardText>
                                        <div>
                                            <div className = "icon-address">
                                                <Icon style={{color: '#08c' }} className = "icon-address" type="environment" />
                                            </div>
                                            <CardText className = "text-address">
                                                Xã Bình Tú huyện Thăng Bình tỉnh Quảng Nam
                                            </CardText>
                                        </div>
                                    </div>
                                   
                                </CardBody>
                                <div className = "show-revew">
                                    <div className = "show-revew-border">
                                        <CardText>Lượt Bình Luận</CardText>
                                        <CardText className = "show-count" >1024</CardText>
                                    </div>
                                    <div className = "show-revew-border">
                                        <CardText>Lượt Đặt Khám</CardText>
                                        <CardText className = "show-count" >1024</CardText>
                                    </div>
                                    <div className = "show-revew-border">
                                        <span>Đánh giá</span>
                                        <Rate  disabled className = "show-rate" allowHalf defaultValue={2.5} />
                                    </div>
                                </div>
                            </Card>
                        </List.Item>
                    
                        <List.Item className = "item-slider">
                           <Card >
                                <CardImg variant="top" src={"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/72230486_2385505438432891_7454734594902851584_n.jpg?_nc_cat=105&_nc_oc=AQm8sWtHaE-l8FAHErimAlRcJnNjJFIQd7WOh1qnoaCUOrk-num3OR6Vhg3W9GF5WRo&_nc_ht=scontent.fsgn2-1.fna&oh=5061e82249b540db611e9e5f8bc9ab59&oe=5E57A337"} />
                                <CardBody>
                                    <div className = "text-doctor">
                                        <CardText className = "text-name-doctor">
                                            PGs.Ts. Nguyễn Thị Hoài An  Thị Hoài An 
                                        </CardText>
                                        <CardText className = "text-faculty">
                                            TAI MŨI HỌNG - NHI - TAI MŨI HỌNG - NHI -TAI MŨI HỌNG - NHI
                                        </CardText>
                                    </div>
                                    <hr className = "line-line"></hr>
                                    <div className = "text-clinic">
                                        <CardText className = "text-name-clinic">
                                            Phòng khám Vietlife MRI Trần Bình Trọng 
                                        </CardText>
                                        <div>
                                            <div className = "icon-address">
                                                <Icon style={{color: '#08c' }} className = "icon-address" type="environment" />
                                            </div>
                                            <CardText className = "text-address">
                                                Xã Bình Tú huyện Thăng Bình tỉnh Quảng Nam
                                            </CardText>
                                        </div>
                                    </div>
                                   
                                </CardBody>
                                <div className = "show-revew">
                                    <div className = "show-revew-border">
                                        <CardText>Lượt Bình Luận</CardText>
                                        <CardText className = "show-count" >1024</CardText>
                                    </div>
                                    <div className = "show-revew-border">
                                        <CardText>Lượt Đặt Khám</CardText>
                                        <CardText className = "show-count" >1024</CardText>
                                    </div>
                                    <div className = "show-revew-border">
                                        <span>Đánh giá</span>
                                        <Rate  disabled className = "show-rate" allowHalf defaultValue={2.5} />
                                    </div>
                                </div>
                            </Card>
                        </List.Item>
                    </Slider>
                </div>
                
                <div className = "clinic-all">
                    <CardText className = "title-title">
                        Tất cả các Bác sĩ
                    </CardText>
                     <List
                        grid={{ gutter: 8, xs: 4}}
                        dataSource={doctors.object}
                        pagination={{
                            onChange: page => {
                            //   console.log(page);
                            },
                            pageSize: 8,
                            defaultCurrent : 1
                        }}
                        renderItem={item => (
                        <List.Item>
                            <Link className = "link-a" style = {{textDecoration: 'none'}}  to="/poll/new">
                                <Card >
                                    <CardImg variant="top" src={"data:image/jpeg;base64,"+item.attachment.data} />
                                    <CardBody>
                                        <div className = "text-doctor">
                                            <CardText className = "text-name-doctor">
                                                {
                                                    item.degrees.map(value =>
                                                        value.name +" "
                                                    )
                                                }
                                                {item.fullName}
                                            </CardText>
                                            <CardText className = "text-faculty">
                                                {
                                                    item.faculties.map(value =>
                                                        value.name + " - "
                                                    )
                                                }
                                            </CardText>
                                        </div>
                                        <hr className = "line-line"></hr>
                                        <div className = "text-clinic">
                                            <CardText className = "text-name-clinic">
                                               {
                                                   item.clinicResponse.name
                                               }
                                            </CardText>
                                            <div>
                                                <div className = "icon-address">
                                                    <Icon style={{color: '#08c' }} className = "icon-address" type="environment" />
                                                </div>
                                                <CardText className = "text-address">
                                                    {
                                                        item.clinicResponse.address
                                                    }
                                                </CardText>
                                            </div>
                                        </div>
                                    
                                    </CardBody>
                                    <div className = "show-revew">
                                        <div className = "show-revew-border">
                                            <CardText>Lượt Bình Luận</CardText>
                                            <CardText className = "show-count" >{item.countComment}</CardText>
                                        </div>
                                        <div className = "show-revew-border">
                                            <CardText>Lượt Đặt Khám</CardText>
                                            <CardText className = "show-count" >{item.countBooking}</CardText>
                                        </div>
                                        <div className = "show-revew-border">
                                            <span>Lượt Đánh giá</span>
                                            <Rate  disabled className = "show-rate" allowHalf defaultValue={item.countRate} />
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        </List.Item>
                        )}
                    />
                </div>

                <div className = "clinic-book">
                    <CardText className = "title-title">
                        Bác sĩ bạn đã đặt lịch
                    </CardText>
                    <Slider  className = "slider-slider" ref={slider => (this.slider = slider)} {...settings}>
                        <List.Item className = "item-slider">
                           <Card >
                                <CardImg variant="top" src={"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/72230486_2385505438432891_7454734594902851584_n.jpg?_nc_cat=105&_nc_oc=AQm8sWtHaE-l8FAHErimAlRcJnNjJFIQd7WOh1qnoaCUOrk-num3OR6Vhg3W9GF5WRo&_nc_ht=scontent.fsgn2-1.fna&oh=5061e82249b540db611e9e5f8bc9ab59&oe=5E57A337"} />
                                <CardBody>
                                    <div className = "text-doctor">
                                        <CardText className = "text-name-doctor">
                                            PGs.Ts. Nguyễn Thị Hoài An  Thị Hoài An 
                                        </CardText>
                                        <CardText className = "text-faculty">
                                            TAI MŨI HỌNG - NHI - TAI MŨI HỌNG - NHI -TAI MŨI HỌNG - NHI
                                        </CardText>
                                    </div>
                                    <hr className = "line-line"></hr>
                                    <div className = "text-clinic">
                                        <CardText className = "text-name-clinic">
                                            Phòng khám Vietlife MRI Trần Bình Trọng 
                                        </CardText>
                                        <div>
                                            <div className = "icon-address">
                                                <Icon style={{color: '#08c' }} className = "icon-address" type="environment" />
                                            </div>
                                            <CardText className = "text-address">
                                                Xã Bình Tú huyện Thăng Bình tỉnh Quảng Nam
                                            </CardText>
                                        </div>
                                    </div>
                                   
                                </CardBody>
                                <div className = "show-revew">
                                    <div className = "show-revew-border">
                                        <CardText>Lượt Bình Luận</CardText>
                                        <CardText className = "show-count" >1024</CardText>
                                    </div>
                                    <div className = "show-revew-border">
                                        <CardText>Lượt Đặt Khám</CardText>
                                        <CardText className = "show-count" >1024</CardText>
                                    </div>
                                    <div className = "show-revew-border">
                                        <span>Đánh giá</span>
                                        <Rate  disabled className = "show-rate" allowHalf defaultValue={2.5} />
                                    </div>
                                </div>
                            </Card>
                        </List.Item>
                    
                        <List.Item className = "item-slider">
                           <Card >
                                <CardImg variant="top" src={"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/72230486_2385505438432891_7454734594902851584_n.jpg?_nc_cat=105&_nc_oc=AQm8sWtHaE-l8FAHErimAlRcJnNjJFIQd7WOh1qnoaCUOrk-num3OR6Vhg3W9GF5WRo&_nc_ht=scontent.fsgn2-1.fna&oh=5061e82249b540db611e9e5f8bc9ab59&oe=5E57A337"} />
                                <CardBody>
                                    <div className = "text-doctor">
                                        <CardText className = "text-name-doctor">
                                            PGs.Ts. Nguyễn Thị Hoài An  Thị Hoài An 
                                        </CardText>
                                        <CardText className = "text-faculty">
                                            TAI MŨI HỌNG - NHI - TAI MŨI HỌNG - NHI -TAI MŨI HỌNG - NHI
                                        </CardText>
                                    </div>
                                    <hr className = "line-line"></hr>
                                    <div className = "text-clinic">
                                        <CardText className = "text-name-clinic">
                                            Phòng khám Vietlife MRI Trần Bình Trọng 
                                        </CardText>
                                        <div>
                                            <div className = "icon-address">
                                                <Icon style={{color: '#08c' }} className = "icon-address" type="environment" />
                                            </div>
                                            <CardText className = "text-address">
                                                Xã Bình Tú huyện Thăng Bình tỉnh Quảng Nam
                                            </CardText>
                                        </div>
                                    </div>
                                   
                                </CardBody>
                                <div className = "show-revew">
                                    <div className = "show-revew-border">
                                        <CardText>Lượt Bình Luận</CardText>
                                        <CardText className = "show-count" >1024</CardText>
                                    </div>
                                    <div className = "show-revew-border">
                                        <CardText>Lượt Đặt Khám</CardText>
                                        <CardText className = "show-count" >1024</CardText>
                                    </div>
                                    <div className = "show-revew-border">
                                        <span>Đánh giá</span>
                                        <Rate  disabled className = "show-rate" allowHalf defaultValue={2.5} />
                                    </div>
                                </div>
                            </Card>
                        </List.Item>
                    
                        <List.Item className = "item-slider">
                           <Card >
                                <CardImg variant="top" src={"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/72230486_2385505438432891_7454734594902851584_n.jpg?_nc_cat=105&_nc_oc=AQm8sWtHaE-l8FAHErimAlRcJnNjJFIQd7WOh1qnoaCUOrk-num3OR6Vhg3W9GF5WRo&_nc_ht=scontent.fsgn2-1.fna&oh=5061e82249b540db611e9e5f8bc9ab59&oe=5E57A337"} />
                                <CardBody>
                                    <div className = "text-doctor">
                                        <CardText className = "text-name-doctor">
                                            PGs.Ts. Nguyễn Thị Hoài An  Thị Hoài An 
                                        </CardText>
                                        <CardText className = "text-faculty">
                                            TAI MŨI HỌNG - NHI - TAI MŨI HỌNG - NHI -TAI MŨI HỌNG - NHI
                                        </CardText>
                                    </div>
                                    <hr className = "line-line"></hr>
                                    <div className = "text-clinic">
                                        <CardText className = "text-name-clinic">
                                            Phòng khám Vietlife MRI Trần Bình Trọng 
                                        </CardText>
                                        <div>
                                            <div className = "icon-address">
                                                <Icon style={{color: '#08c' }} className = "icon-address" type="environment" />
                                            </div>
                                            <CardText className = "text-address">
                                                Xã Bình Tú huyện Thăng Bình tỉnh Quảng Nam
                                            </CardText>
                                        </div>
                                    </div>
                                   
                                </CardBody>
                                <div className = "show-revew">
                                    <div className = "show-revew-border">
                                        <CardText>Lượt Bình Luận</CardText>
                                        <CardText className = "show-count" >1024</CardText>
                                    </div>
                                    <div className = "show-revew-border">
                                        <CardText>Lượt Đặt Khám</CardText>
                                        <CardText className = "show-count" >1024</CardText>
                                    </div>
                                    <div className = "show-revew-border">
                                        <span>Đánh giá</span>
                                        <Rate  disabled className = "show-rate" allowHalf defaultValue={2.5} />
                                    </div>
                                </div>
                            </Card>
                        </List.Item>
                    
                        <List.Item className = "item-slider">
                           <Card >
                                <CardImg variant="top" src={"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/72230486_2385505438432891_7454734594902851584_n.jpg?_nc_cat=105&_nc_oc=AQm8sWtHaE-l8FAHErimAlRcJnNjJFIQd7WOh1qnoaCUOrk-num3OR6Vhg3W9GF5WRo&_nc_ht=scontent.fsgn2-1.fna&oh=5061e82249b540db611e9e5f8bc9ab59&oe=5E57A337"} />
                                <CardBody>
                                    <div className = "text-doctor">
                                        <CardText className = "text-name-doctor">
                                            PGs.Ts. Nguyễn Thị Hoài An  Thị Hoài An 
                                        </CardText>
                                        <CardText className = "text-faculty">
                                            TAI MŨI HỌNG - NHI - TAI MŨI HỌNG - NHI -TAI MŨI HỌNG - NHI
                                        </CardText>
                                    </div>
                                    <hr className = "line-line"></hr>
                                    <div className = "text-clinic">
                                        <CardText className = "text-name-clinic">
                                            Phòng khám Vietlife MRI Trần Bình Trọng 
                                        </CardText>
                                        <div>
                                            <div className = "icon-address">
                                                <Icon style={{color: '#08c' }} className = "icon-address" type="environment" />
                                            </div>
                                            <CardText className = "text-address">
                                                Xã Bình Tú huyện Thăng Bình tỉnh Quảng Nam
                                            </CardText>
                                        </div>
                                    </div>
                                   
                                </CardBody>
                                <div className = "show-revew">
                                    <div className = "show-revew-border">
                                        <CardText>Lượt Bình Luận</CardText>
                                        <CardText className = "show-count" >1024</CardText>
                                    </div>
                                    <div className = "show-revew-border">
                                        <CardText>Lượt Đặt Khám</CardText>
                                        <CardText className = "show-count" >1024</CardText>
                                    </div>
                                    <div className = "show-revew-border">
                                        <span>Đánh giá</span>
                                        <Rate  disabled className = "show-rate" allowHalf defaultValue={2.5} />
                                    </div>
                                </div>
                            </Card>
                        </List.Item>
                    
                        <List.Item className = "item-slider">
                           <Card >
                                <CardImg variant="top" src={"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/72230486_2385505438432891_7454734594902851584_n.jpg?_nc_cat=105&_nc_oc=AQm8sWtHaE-l8FAHErimAlRcJnNjJFIQd7WOh1qnoaCUOrk-num3OR6Vhg3W9GF5WRo&_nc_ht=scontent.fsgn2-1.fna&oh=5061e82249b540db611e9e5f8bc9ab59&oe=5E57A337"} />
                                <CardBody>
                                    <div className = "text-doctor">
                                        <CardText className = "text-name-doctor">
                                            PGs.Ts. Nguyễn Thị Hoài An  Thị Hoài An 
                                        </CardText>
                                        <CardText className = "text-faculty">
                                            TAI MŨI HỌNG - NHI - TAI MŨI HỌNG - NHI -TAI MŨI HỌNG - NHI
                                        </CardText>
                                    </div>
                                    <hr className = "line-line"></hr>
                                    <div className = "text-clinic">
                                        <CardText className = "text-name-clinic">
                                            Phòng khám Vietlife MRI Trần Bình Trọng 
                                        </CardText>
                                        <div>
                                            <div className = "icon-address">
                                                <Icon style={{color: '#08c' }} className = "icon-address" type="environment" />
                                            </div>
                                            <CardText className = "text-address">
                                                Xã Bình Tú huyện Thăng Bình tỉnh Quảng Nam
                                            </CardText>
                                        </div>
                                    </div>
                                   
                                </CardBody>
                                <div className = "show-revew">
                                    <div className = "show-revew-border">
                                        <CardText>Lượt Bình Luận</CardText>
                                        <CardText className = "show-count" >1024</CardText>
                                    </div>
                                    <div className = "show-revew-border">
                                        <CardText>Lượt Đặt Khám</CardText>
                                        <CardText className = "show-count" >1024</CardText>
                                    </div>
                                    <div className = "show-revew-border">
                                        <span>Đánh giá</span>
                                        <Rate  disabled className = "show-rate" allowHalf defaultValue={2.5} />
                                    </div>
                                </div>
                            </Card>
                        </List.Item>
                    
                        <List.Item className = "item-slider">
                           <Card >
                                <CardImg variant="top" src={"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/72230486_2385505438432891_7454734594902851584_n.jpg?_nc_cat=105&_nc_oc=AQm8sWtHaE-l8FAHErimAlRcJnNjJFIQd7WOh1qnoaCUOrk-num3OR6Vhg3W9GF5WRo&_nc_ht=scontent.fsgn2-1.fna&oh=5061e82249b540db611e9e5f8bc9ab59&oe=5E57A337"} />
                                <CardBody>
                                    <div className = "text-doctor">
                                        <CardText className = "text-name-doctor">
                                            PGs.Ts. Nguyễn Thị Hoài An  Thị Hoài An 
                                        </CardText>
                                        <CardText className = "text-faculty">
                                            TAI MŨI HỌNG - NHI - TAI MŨI HỌNG - NHI -TAI MŨI HỌNG - NHI
                                        </CardText>
                                    </div>
                                    <hr className = "line-line"></hr>
                                    <div className = "text-clinic">
                                        <CardText className = "text-name-clinic">
                                            Phòng khám Vietlife MRI Trần Bình Trọng 
                                        </CardText>
                                        <div>
                                            <div className = "icon-address">
                                                <Icon style={{color: '#08c' }} className = "icon-address" type="environment" />
                                            </div>
                                            <CardText className = "text-address">
                                                Xã Bình Tú huyện Thăng Bình tỉnh Quảng Nam
                                            </CardText>
                                        </div>
                                    </div>
                                   
                                </CardBody>
                                <div className = "show-revew">
                                    <div className = "show-revew-border">
                                        <CardText>Lượt Bình Luận</CardText>
                                        <CardText className = "show-count" >1024</CardText>
                                    </div>
                                    <div className = "show-revew-border">
                                        <CardText>Lượt Đặt Khám</CardText>
                                        <CardText className = "show-count" >1024</CardText>
                                    </div>
                                    <div className = "show-revew-border">
                                        <span>Đánh giá</span>
                                        <Rate  disabled className = "show-rate" allowHalf defaultValue={2.5} />
                                    </div>
                                </div>
                            </Card>
                        </List.Item>
                    </Slider>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        doctors: state.doctors,
    }
  }
  
export default connect(
    mapStateToProps,
    {
        getDoctorList
    }
  )(ClinicList);