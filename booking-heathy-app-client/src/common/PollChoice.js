import React, { Component } from 'react'
import { Icon, Form, Row, Col ,Input} from 'antd';
const FormItem = Form.Item;
export default class PollChoice extends Component {
    render() {
        return (
            <div>
                <FormItem className="poll-form-row">
                    <Row>
                        <Col span={12}>
                            <Input
                                placeholder={"Nhập nội dung giá !"}
                                size="large"
                                value={this.props.choice.description}
                                className={"optional-choice"}
                                onChange={this.props.handleChangeName} />
                        </Col>
                        <Col span={10}>
                            <Input
                                placeholder={"Nhập số tiền  VND!"}
                                size="large"
                                value={this.props.choice.totalPrice}
                                className={"optional-choice"}
                                onChange={this.props.handleChangePrice} />
                        </Col>
                        <Col span={2}>
                            {
                                this.props.choiceNumber > 1 ? (
                                    <Icon
                                        className="dynamic-delete-button"
                                        type="close"
                                        disabled={this.props.choiceNumber <= 1}
                                        onClick={this.props.removeChoice}
                                    />) : null
                            }
                        </Col>

                    </Row>

                </FormItem>
            </div>
        )
    }
}
