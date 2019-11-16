import React, { Component } from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';
import { Result, Button } from 'antd';

class NotFound extends Component {
    render() {
        return (
            <div className="page-not-found">
                <Result
                    style={{height : 400},{border: '-15px'}}
                    status="404"
                    title="404"
                    subTitle="Xin lỗi !!! Trang Không Tồn Tại !!"
                    extra={<Link to="/"><Button className="go-back-btn" type="primary" size="large">Trở Lại Trang chủ</Button>   </Link>}
                />,
                
            </div>
        );
    }
}

export default NotFound;