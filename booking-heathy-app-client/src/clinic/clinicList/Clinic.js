import React, { Component } from 'react'
import './Clinic.css';
import {
    withRouter,
    Switch
} from 'react-router-dom';
import { Carousel } from 'antd';
import { CardImg } from 'reactstrap';

class Clinic extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className="main-clinic">
                <div className="clinic-left">
                    sdfsadfsadf
               </div>
                <div className="clinic-right">
                    <div className="clinic-image">
                        <Carousel autoplay>
                            <div>
                                <CardImg className = "img-clinic" variant="top" src={"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/72230486_2385505438432891_7454734594902851584_n.jpg?_nc_cat=105&_nc_oc=AQm8sWtHaE-l8FAHErimAlRcJnNjJFIQd7WOh1qnoaCUOrk-num3OR6Vhg3W9GF5WRo&_nc_ht=scontent.fsgn2-1.fna&oh=5061e82249b540db611e9e5f8bc9ab59&oe=5E57A337"} />
                            </div>
                            <div>
                                <CardImg className = "img-clinic" variant="top" src={"https://scontent.fdad3-3.fna.fbcdn.net/v/t31.0-8/s960x960/17990664_681772418696789_4416410583673689846_o.jpg?_nc_cat=111&cachebreaker=hd&_nc_oc=AQlyR8oCMSZARHCovGxWHqddVyJ8KTtqD2b0WKL82dLuaIFhlK_SUG04eTCjX-61VP8&_nc_ht=scontent.fdad3-3.fna&oh=885aaa53e8c5edd91bd6e110b65e278a&oe=5E55C500"} />
                            </div>
                            <div>
                                <CardImg className = "img-clinic" variant="top" src={"https://scontent.fdad3-3.fna.fbcdn.net/v/t31.0-8/s960x960/17990664_681772418696789_4416410583673689846_o.jpg?_nc_cat=111&cachebreaker=hd&_nc_oc=AQlyR8oCMSZARHCovGxWHqddVyJ8KTtqD2b0WKL82dLuaIFhlK_SUG04eTCjX-61VP8&_nc_ht=scontent.fdad3-3.fna&oh=885aaa53e8c5edd91bd6e110b65e278a&oe=5E55C500"} />
                            </div>
                            <div>
                                <CardImg className = "img-clinic" variant="top" src={"https://scontent.fdad3-1.fna.fbcdn.net/v/t1.0-9/54521655_2228808513807990_3782795482493878272_n.jpg?_nc_cat=103&cachebreaker=hd&_nc_oc=AQk8_EkMOSe40SWgcVXgbvn4mTnaBPZnC4AqwWImYOD46VcEcaysm1xDDYGhYnniENM&_nc_ht=scontent.fdad3-1.fna&oh=87966523031a32b9837d6508f9081f8e&oe=5E5B5CCC"} />
                            </div>
                        </Carousel>
                    </div>
                    <Switch>

                    </Switch>
                </div>
            </div>
        )
    }
}

export default withRouter(Clinic);