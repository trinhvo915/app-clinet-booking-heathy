import React, { Component } from 'react';
import { signup } from '../../util/APIUtils';
import './Signup.css';
import { Link } from 'react-router-dom';
import { 
    NAME_MIN_LENGTH, NAME_MAX_LENGTH, 
    USERNAME_MIN_LENGTH, USERNAME_MAX_LENGTH,
    EMAIL_MAX_LENGTH,
    PASSWORD_MIN_LENGTH, PASSWORD_MAX_LENGTH,
    MOBILE_MIN_LENGTH,MOBILE_MAX_LENGTH
} from '../../constants';

import { Form, Input, Button, notification } from 'antd';
const FormItem = Form.Item;

class Signup extends Component {
    render() {
        const AntWrappedSignupForm = Form.create()(SignupForm)
        return (
            <AntWrappedSignupForm history = {this.props.history}/>
        );
    }
}

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmDirty: false,
            value : ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
    
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const signupRequest = Object.assign({}, values);
                signup(signupRequest)
                .then(response =>{
                    
                    if(response.success === true){
                        notification.success({
                            message: 'Booking Clinic',
                            description: "Bạn đăng ký tài khoản thành công!",
                        });
                        
                        this.props.history.push("/login");
                    }else{
                        notification.error({
                            message: 'Booking Clinic',
                            description: response.message || 'Xin lỗi bạn ! Đăng ký thất bại !'
                        });
                    }
                })
            }
        });
    }

    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
          form.validateFields(['confirm_password'], { force: true });
        }
        callback();
    };

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
          callback('Mật khẩu mà bạn nhập không trùng khớp!');
        } else {
          callback();
        }
    };

    validateName = (rule, fullName, callback ) => {
        if(fullName.length < NAME_MIN_LENGTH) {
            callback("Họ và tên quá nhỏ !. Bạn cần nhập lớn hơn ( "+NAME_MIN_LENGTH+ " ) ký tự!");
        } else if (fullName.length > NAME_MAX_LENGTH) {
            callback("Họ và tên quá lớn !. Bạn cần nhập nhỏ hơn(  "+NAME_MAX_LENGTH+ " )  ký tự!!");
        }else {
            callback();
        }
    }

    validateEmail = (rule, email, callback) => {
        const EMAIL_REGEX = RegExp('[^@ ]+@[^@ ]+\\.[^@ ]+');
        if(!email) {
            callback("Email không được trống !");
        }

        if(!EMAIL_REGEX.test(email)) {
            callback("Email không đúng định dạng !");
        }

        if(email.length > EMAIL_MAX_LENGTH) {
            callback("Email quá lớn !. Bạn cần nhập nhỏ hơn( "+EMAIL_MAX_LENGTH+ " ) ký tự! !");
        } else {
            callback();
        }
    }

    validateMobile = (rule, mobile,callback) => {
        if(mobile.length < MOBILE_MIN_LENGTH) {
            callback("Số điện thoại quá nhỏ !. Bạn cần nhập lớn hơn ( "+MOBILE_MIN_LENGTH+ " ) ký tự !");
        
        } else if (mobile.length > MOBILE_MAX_LENGTH) {
            callback("Số điện thoại quá lớn !. Bạn cần nhập nhỏ hơn ( "+MOBILE_MAX_LENGTH+ " ) ký tự !");
        } else {
            callback();
        }
    }

    validateUsername = (rule, username,callback) => {
        if(username.length < USERNAME_MIN_LENGTH) {
            callback("uername quá nhỏ !. Bạn cần nhập lớn hơn ( "+USERNAME_MIN_LENGTH+ " ) ký tự !");
            
        } else if (username.length > USERNAME_MAX_LENGTH) {
            callback("uername quá lớn !. Bạn cần nhập nhỏ hơn ( "+USERNAME_MAX_LENGTH+ " ) ký tự !");
        } else {
            callback();
        }
    }

    validatePassword = (rule, password,callback) => {
        if(password.length < PASSWORD_MIN_LENGTH) {
            callback("Password quá nhỏ !. Bạn cần nhập lớn hơn ( "+PASSWORD_MIN_LENGTH+ " ) ký tự !");
        } else if (password.length > PASSWORD_MAX_LENGTH) {
            callback("Password quá lớn !. Bạn cần nhập nhỏ hơn ( "+PASSWORD_MAX_LENGTH+ " ) ký tự !");
        } else {
            callback();
        }
    }

    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
      };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="signup-container">
                <h1 className="page-title">Sign Up</h1>
                <div className="signup-content">
                    <Form onSubmit={this.handleSubmit} className="signup-form">
                        <FormItem className = "row-file"
                            label={
                                <span><strong>Họ và Tên</strong></span>
                            }>
                            {getFieldDecorator('fullName', {
                                rules: [
                                    { 
                                        required: true, message: 'Hãy nhập tên đầy đủ của bạn !'
                                    },
                                    {
                                        validator: this.validateName,
                                    }
                                ],
                            })(<Input 
                                size="large"
                                name="fullName"
                                autoComplete="off"
                                placeholder="Hãy nhập tên đầy đủ của bạn !"
                            />)}
                        </FormItem>
                        <FormItem className = "row-file"
                            label={
                                <span> <strong>Username</strong></span>
                            }>
                            {getFieldDecorator('username', {
                                rules: [
                                    { 
                                        required: true, message: 'Hãy nhập tài khoản đăng nhập của bạn!' 
                                    },
                                    {
                                        validator: this.validateUsername,
                                    }
                                ],
                            })(<Input 
                                size="large"
                                name="username"
                                autoComplete="off"
                                placeholder="Hãy nhập tài khoản đăng nhập của bạn!"
                            />)}
                        </FormItem>
                        <FormItem className = "row-file"
                            label={
                                <span> <strong>Số điện thoại</strong></span>
                            }>
                            {getFieldDecorator('mobile', {
                                rules: [
                                    { required: true, message: 'Hãy nhập số điện thoại của bạn!'},
                                    {
                                        validator: this.validateMobile,
                                    }
                                ],
                            })(<Input 
                                size="large"
                                name="mobile"
                                autoComplete="off"
                                placeholder="Hãy nhập số điện thoại của bạn!"
                            />)}
                        </FormItem>
                        <FormItem className = "row-file"
                             label={
                                <span> <strong>E-mail</strong></span>
                            }>
                            {getFieldDecorator('email', {
                                rules: [
                                    {
                                        type: 'email',
                                        message: 'Lỗi định dạng E-mail!',
                                    },
                                    {
                                        required: true,
                                        message: 'Hãy nhập E-mail!',
                                    },
                                    {
                                        validator: this.validateEmail,
                                    }
                                ],
                            })(<Input 
                                size="large"
                                name="email" 
                                autoComplete="off"
                                placeholder="Hãy nhập email của bạn !"
                            />)}
                        </FormItem>
                        <FormItem  className = "row-file"  label={
                                <span> <strong>Password</strong></span>
                            } hasFeedback>
                            {getFieldDecorator('password', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Hãy nhập mật khẩu của bạn !',
                                    },
                                    {
                                        validator: this.validateToNextPassword,
                                    },
                                    {
                                        validator: this.validatePassword,
                                    }
                                ],
                            })(<Input.Password 
                                size="large"
                                name="password" 
                                autoComplete="off"
                                placeholder="Hãy nhập mật khẩu của bạn !"
                            />)}
                        </FormItem>
                        <FormItem  className = "row-file" label={
                                <span> <strong>Confirm Password</strong></span>
                            } hasFeedback>
                            {getFieldDecorator('confirm_password', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Hãy nhập lại mật khẩu !',
                                    },
                                    {
                                        validator: this.compareToFirstPassword,
                                    },
                                ],
                            })(<Input.Password placeholder="Nhập lại mật khẩu !" size="large" onBlur={this.handleConfirmBlur} />)}
                        </FormItem>       
                        <FormItem>
                            <Button type="primary" 
                                htmlType="submit" 
                                size="large" 
                                className="signup-form-button">Đăng ký</Button>
                                Already registed? <Link to="/login"><strong>Đăng nhập!</strong></Link>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }

}

export default Signup;