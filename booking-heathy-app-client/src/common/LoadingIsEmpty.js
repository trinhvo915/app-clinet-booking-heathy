import React, { Component } from 'react'
import { Spin, Empty,Button,  } from 'antd';
import './LoadingIsEmpty.css';
export default class LoadingIsEmpty extends Component {
    render() {
        return (
            <div className="spin-isempty">
                <Spin className="spin-1" size="small" />
                <Spin className="spin-1" />
                <Spin className="spin-1" size="large" />
                <br />
                <Empty
                    image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
                    imageStyle={{
                        height: 60,
                    }}
                    description={
                        <span>
                            Hiện tại chưa có thông tin !!!
                         </span>
                    }
                >
                    {this.props.user ? <Button type="primary">Tạo Thông Tin</Button> : null }
                </Empty>,
            </div>
        )
    }
}
