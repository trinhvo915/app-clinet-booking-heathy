import React, { Component } from 'react';
import { createPoll } from '../util/APIUtils';
import { MAX_CHOICES } from '../constants';
import './NewPoll.css';
import { Form, Input, Button, Icon, Row, Select, Col, notification } from 'antd';
const Option = Select.Option;
const FormItem = Form.Item;

class NewPoll extends Component {
    constructor(props) {
        super(props);
        this.state = {

            choices: [
                {
                    name : "",
                    price : ""
                },
                {
                    name : "",
                    price : ""
                },
            ],

        };
        this.addChoice = this.addChoice.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePrice = this.handleChangePrice.bind(this);
        this.removeChoice = this.removeChoice.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChangeName(event, index) {
        const choices = this.state.choices.slice();
        const value = event.target.value;

        const choiceCopy = choices[index];
        choices[index] = {
            name: value,
            price : choiceCopy.price
        }

        this.setState({
            choices: choices
        });
    }
    
    handleChangePrice(event, index) {
        const choices = this.state.choices.slice();
        const value = event.target.value;
        const choiceCopy = choices[index];

        choices[index] = {
            name : choiceCopy.name,
            price: value,
        }

        this.setState({
            choices: choices
        });
    }

    addChoice(event) {
        const choices = this.state.choices.slice();
        this.setState({
            choices: choices.concat([{
                name : "",
                price : ""
            }])
        });
    }

    removeChoice(choiceNumber) {
        const choices = this.state.choices.slice();
        this.setState({
            choices: [...choices.slice(0, choiceNumber), ...choices.slice(choiceNumber + 1)]
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const pollData = {
            choices: this.state.choices.map(choice => {
                return { text: choice.text }
            }),
        };

        createPoll(pollData)
            .then(response => {
                notification.success({
                    message: 'Booking Clinic',
                    description: "Bạn đăng nhập thành công !",
                });
                this.props.history.push("/login");
            }).catch(error => {
                if (error.status === 401) {
                    this.props.handleLogout('/login', 'error', 'You have been logged out. Please login create poll.');
                } else {
                    notification.error({
                        message: 'Polling App',
                        description: error.message || 'Sorry! Something went wrong. Please try again!'
                    });
                }
            });
    }

    render() {
        const choiceViews = [];
        console.log(this.state.choices)
        this.state.choices.forEach((choice, index) => {
            choiceViews.push(<PollChoice key={index} choice={choice} choiceNumber={index} removeChoice={this.removeChoice} handleChangeName={this.handleChangeName} handleChangePrice ={this.handleChangePrice}/>);
        });

        return (
            <div className="new-poll-container">
                <div className="new-poll-content">
                    <Form onSubmit={this.handleSubmit} className="create-poll-form">

                        {choiceViews}

                        <FormItem className="poll-form-row">
                            <Button type="dashed" onClick={this.addChoice} disabled={this.state.choices.length === MAX_CHOICES}>
                                <Icon type="plus" /> Thêm Gía
                            </Button>
                        </FormItem>

                        <FormItem className="poll-form-row">
                            <Button type="primary"
                                htmlType="submit"
                                size="large"
                                className="create-poll-form-button">Tạo Gía</Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }
}

function PollChoice(props) {
    return (
        <FormItem className="poll-form-row">
            <Row>
                <Col span={12}>
                    <Input
                        placeholder={"Nhập nội dung giá !"}
                        size="large"
                        value={props.choice.name}
                        className={"optional-choice" }
                        onChange={(event) => props.handleChangeName(event, props.choiceNumber)} />
                </Col>
                <Col span={10}>
                    <Input
                        placeholder={"Nhập số tiền !"}
                        size="large"
                        value={props.choice.price}
                        className={"optional-choice"}
                        onChange={(event) => props.handleChangePrice(event, props.choiceNumber)} />
                </Col>
                <Col span={2}>
                    {
                        props.choiceNumber > 1 ? (
                            <Icon
                                className="dynamic-delete-button"
                                type="close"
                                disabled={props.choiceNumber <= 1}
                                onClick={() => props.removeChoice(props.choiceNumber)}
                            />) : null
                    }
                </Col>

            </Row>

        </FormItem>
    );
}


export default NewPoll;