import React, { Component } from 'react'
import './RegisterDoctor.css';
import { Form, Input,Row, Button, Icon, Select, Col, notification } from 'antd';
import { 
    NAME_MIN_LENGTH, NAME_MAX_LENGTH, 
    USERNAME_MIN_LENGTH, USERNAME_MAX_LENGTH,
    EMAIL_MAX_LENGTH,ADDRESS_MAX_LENGTH,
    PASSWORD_MIN_LENGTH, PASSWORD_MAX_LENGTH,
    MOBILE_MIN_LENGTH,MOBILE_MAX_LENGTH
} from '../../constants';
import { DatePicker } from 'antd';
import moment from 'moment';

const Option = Select.Option;
const FormItem = Form.Item;
const { TextArea } = Input
const dateFormat = 'DD/MM/YYYY';

export default class RegisterDoctor extends Component {
    constructor(props){
        super(props);
        this.state = {
            fullName: {
                value: ''
            },
            address: {
                value: ''
            },
            birthday: {
                value: ''
            },
            email: {
                value: ''
            },
            mobile: {
                value: ''
            },
            gender: {
                value: ''
            },
            tokenCode: {
                value: ''
            },
            birthday: {
                value: ''
            },
            degrees: [
                {
                    id : ''
                }
            ],
            faculties: [
                {
                    id : ''
                }
            ]
        }
    }

    handleSubmit(event) {
        // event.preventDefault();
    }

    handleInputChange(event, validationFun) {
        const target = event.target;
        const inputName = target.name;        
        const inputValue = target.value;

        this.setState({
            [inputName] : {
                value: inputValue,
                ...validationFun(inputValue)
            }
        });
    }

    validateFullName = (fullName) =>{
        if (fullName.length > ADDRESS_MAX_LENGTH) {
            return {
                validationStatus: 'error',
                errorMsg: `Họ và tên quá lớn !. Bạn cần nhập nhỏ hơn ( ${NAME_MAX_LENGTH} )  ký tự!!`
            }
        } else {
            return {
                validateStatus: 'success',
                errorMsg: null,
              };            
        }
    }

    validateMobile = (mobile) =>{
        if(mobile.length < MOBILE_MIN_LENGTH) {
            return {
                validateStatus: 'error',
                errorMsg: `"Số điện thoại quá nhỏ !. Bạn cần nhập lớn hơn ( "${MOBILE_MIN_LENGTH}" ) ký tự!"`
            }
        } else if (mobile.length > MOBILE_MAX_LENGTH) {
            return {
                validationStatus: 'error',
                errorMsg: `Số điện thoại quá lớn !. Bạn cần nhập nhỏ hơn ( ${MOBILE_MAX_LENGTH} )  ký tự!!`
            }
        } else {
            return {
                validateStatus: 'success',
                errorMsg: null,
              };            
        }
    }

    validateAddress = (address) =>{
        if (address.length > ADDRESS_MAX_LENGTH) {
            return {
                validationStatus: 'error',
                errorMsg: `Địa chỉ quá lớn !. Bạn cần nhập nhỏ hơn ( ${ADDRESS_MAX_LENGTH} )  ký tự!!`
            }
        } else {
            return {
                validateStatus: 'success',
                errorMsg: null,
              };            
        }
    }

    validateEmail = (email) => {
        if(!email) {
            return {
                validateStatus: 'error',
                errorMsg: 'Hãy nhập E-mail !'                
            }
        }

        const EMAIL_REGEX = RegExp('[^@ ]+@[^@ ]+\\.[^@ ]+');
        if(!EMAIL_REGEX.test(email)) {
            return {
                validateStatus: 'error',
                errorMsg: 'Lỗi định dạng E-mail !'
            }
        }

        if(email.length > EMAIL_MAX_LENGTH) {
            return {
                validateStatus: 'error',
                errorMsg: `Email quá lớn !. Bạn cần nhập nhỏ hơn( ${EMAIL_MAX_LENGTH} ) ký tự! !`
            }
        }

        return {
            validateStatus: null,
            errorMsg: null
        }
    }

    disabledStartDate = birthday => {
        const { value } = this.state.birthday;
        if (!value) {
          return false;
        }
        return value.valueOf() <= value.valueOf();
    };
    
    onChangeforDate = (field, value) => {
        console.log(field + " sfasd " + value);
        this.setState({
          [field]: {
            value: value
          }
        });
    };

    onChangeDate = (value) =>{
        console.log(" sfasd " + value);
        this.onChangeforDate('birthday', value);
    }

    render() {
        return (
            <div className="new-doctor-container">
                <h1 className="page-title">Đăng Ký Trở Thành Bác Sỹ</h1>
                <div className="new-poll-content">
                    <Form onSubmit={this.handleSubmit} className="create-doctor-form">
                        <FormItem 
                            label="Full Name"
                            validateStatus={this.state.fullName.validateStatus}
                            help={this.state.fullName.errorMsg}>
                            <Input 
                                size="large"
                                name="fullName"
                                autoComplete="off"
                                placeholder="Hãy nhập tên đầy đủ của bạn !"
                                value={this.state.fullName.value} 
                                onChange={(event) => this.handleInputChange(event, this.validateFullName)} />    
                        </FormItem>

                        <FormItem 
                            label="Địa chỉ"
                            validateStatus={this.state.address.validateStatus}
                            help={this.state.address.errorMsg}>
                            <Input 
                                size="large"
                                name="address"
                                autoComplete="off"
                                placeholder="Hãy nhập địa chỉ của bạn !"
                                value={this.state.address.value} 
                                onChange={(event) => this.handleInputChange(event, this.validateAddress)} />    
                        </FormItem>

                        <FormItem 
                            label="Số điện thoại"
                            validateStatus={this.state.mobile.validateStatus}
                            help={this.state.mobile.errorMsg}>
                            <Input 
                                size="large"
                                name="mobile"
                                autoComplete="off"
                                placeholder="Hãy nhập số điện thoại của bạn !"
                                value={this.state.mobile.value} 
                                onChange={(event) => this.handleInputChange(event, this.validateMobile)} />    
                        </FormItem>

                        <FormItem 
                            label="Email"
                            hasFeedback
                            validateStatus={this.state.email.validateStatus}
                            help={this.state.email.errorMsg}>
                            <Input 
                                size="large"
                                name="email" 
                                type="email" 
                                autoComplete="off"
                                placeholder="Hãy nhập email của bạn !"
                                value={this.state.email.value} 
                                onChange={(event) => this.handleInputChange(event, this.validateEmail)} />    
                        </FormItem>
                        <Row>
                            <Col span={12}>
                                <FormItem  label="Ngày sinh">
                                    <DatePicker 
                                        // disabledDate={this.disabledStartDate}
                                        format={dateFormat}
                                        value={ this.state.birthday.value ? this.state.birthday.value : moment( moment().format(dateFormat))}
                                        onChange={this.onChangeDate}
                                    />
                                </FormItem>
                            </Col>
                            <Col span={12}>
                                col-12
                            </Col>
                        </Row>
                        <FormItem>
                            <Button type="primary" 
                                htmlType="submit" 
                                size="large" 
                                className="signup-form-button">Đăng ký</Button>
                        </FormItem>
                    </Form>
                </div>    
            </div>
        )
    }
}
