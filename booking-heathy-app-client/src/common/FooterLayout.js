import React, { Component } from 'react'
import './footerr.css'
import { Row, Col, Icon } from 'antd'
import { Layout } from 'antd';
const { Footer} = Layout;

export default class FooterLayout extends Component {
    render() {
        return (
            <Footer>
                <div className="footer" id="footer">
                    <Row className="wrapped-footer container">
                        <Row className="row-footer">
                            <Col span={6} lg={{ span: 6 }} md={{ span: 12 }} sm={{ span: 12 }} className="footer-item">
                                <div className="line-item">
                                    <span className="item-title">Liên kết</span>
                                </div>
                                <a className="line-item" href="https://www.facebook.com/">
                                    <Icon type="facebook" theme="filled" className="item-icon" /> <span className="item-text">Facebook</span>
                                </a>
                                <a className="line-item" href="https://www.youtube.com/">
                                    <Icon type="youtube" theme="filled" className="item-icon" /> <span className="item-text">Youtube</span>
                                </a>
                                <a className="line-item" href="https://www.youtube.com/">
                                    <Icon type="google-plus-square" theme="filled" className="item-icon" /> <span className="item-text">Google+</span>
                                </a>
                            </Col>
                            <Col span={6} lg={{ span: 6 }} md={{ span: 12 }} sm={{ span: 12 }} className="footer-item">
                                <div className="line-item">
                                    <span className="item-title">Bản di động</span>
                                </div>
                                <a href="/"><img alt="" className="pb-2" width="100px" src={'https://static.chotot.com/storage/marketplace/ios-logo.svg'}></img></a><br />
                                <a href="/"><img alt="" width="100px" src={'https://static.chotot.com/storage/marketplace/gg-play.svg'}></img></a>
                            </Col>
                            <Col span={6} lg={{ span: 6 }} md={{ span: 12 }} sm={{ span: 12 }} className="footer-item">
                                <div className="line-item">
                                    <span className="item-title">Hỗ trợ khách hàng</span>
                                </div>
                                <a className="line-item" href="https://www.facebook.com/">
                                    <span className="item-text">Trung tâm trợ giúp</span>
                                </a>
                                <a className="line-item" href="https://www.youtube.com/">
                                    <span className="item-text">An toàn mua bán</span>
                                </a>
                                <a className="line-item" href="https://www.youtube.com/">
                                    <span className="item-text">Quy định cần biết</span>
                                </a>
                                <a className="line-item" href="https://www.youtube.com/">
                                    <span className="item-text">Liên hệ hỗ trợ</span>
                                </a>
                            </Col>
                            <Col span={6} lg={{ span: 6 }} md={{ span: 12 }} sm={{ span: 12 }} className="footer-item">
                                <div className="line-item">
                                    <span className="item-title">Chứng nhận</span>
                                </div>
                                <a href="/"><img alt="" width="100px" src={'https://static.chotot.com/storage/marketplace/cerfiticate.png'}></img></a>
                            </Col>
                        </Row>
                        <Row className="footer-address">
                            <span>
                                CÔNG TY TNHH BOOKING CLINIC - Địa chỉ: Phòng 1808, Tầng 18, Mê Linh Point Tower, 02 Ngô Đức Kế, Phường Bến Nghé, Quận 1, TP Hồ Chí Minh<br />
                                Giấy chứng nhận đăng ký doanh nghiệp số 0312120782 do Sở Kế Hoạch và Đầu Tư TPHCM cấp ngày 11/01/2013<br />
                                Email: trogiup@chotot.vn - Đường dây nóng: (028)38664041
                        </span>
                        </Row>
                    </Row>
                </div>
            </Footer>

        )
    }
}
