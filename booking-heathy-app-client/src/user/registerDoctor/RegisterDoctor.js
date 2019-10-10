import React, { Component } from 'react'
import './RegisterDoctor.css';
import { Form, Input,Row, Button, Select, Col, notification } from 'antd';
import { 
    NAME_MIN_LENGTH, NAME_MAX_LENGTH, 
    EMAIL_MAX_LENGTH,ADDRESS_MAX_LENGTH,
    MOBILE_MIN_LENGTH,MOBILE_MAX_LENGTH
} from '../../constants';
import { DatePicker } from 'antd';
import moment from 'moment';
import { connect } from "react-redux";
import {getFaculty} from  "../../actions/faculty.list.action";
import { getFaculties } from "./../../util/APIUtils";
import { getDegrees } from "./../../util/APIUtils";
const Option = Select.Option;
const FormItem = Form.Item;
const { TextArea } = Input
const dateFormat = 'DD/MM/YYYY';
const genderData = [
    {   
        VN : "NAM",
        EN : 'MALE'
    },
    {   
        VN : "NŨ",
        EN : 'FAMALE'
    },
    {   
        VN : "KHÁC",
        EN : "OTHER"
    }
] 

class RegisterDoctor extends Component {
    constructor(props){
        super(props);
        this.state = {
            idFacultyFist : "",
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
                value: 'MALE'
            },
            tokenCode: {
                value: ''
            },
            about : {
                value : ''
            },
            degrees: [
               
            ],
            faculties: [

            ],
            facultiesResponse: [

            ],
            degreesResponse : [

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
        if(fullName.length < NAME_MIN_LENGTH){
            return {
                validationStatus: 'error',
                errorMsg: `Họ và tên quá nhỏ !. Bạn cần nhập lớn hơn ( ${NAME_MIN_LENGTH} )  ký tự!!`
            }
        } else if (fullName.length > NAME_MAX_LENGTH) {
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

    // disabledStartDate = birthday => {
    //     const { value } = this.state.birthday;
    //     if (!value) {
    //       return false;
    //     }
    //     return value.valueOf() <= value.valueOf();
    // };
    
    onChangeforDate = (field, value) => {
        this.setState({
          [field]: {
            value: value
          }
        });
    };

    handleTokenChange = (event) =>{
        const target = event.target;
        const inputName = target.name;        
        const inputValue = target.value;
        this.setState({
            [inputName] : {
                value: inputValue
            }
        });
    }

    onChangeDate = (value) =>{
        // console.log(" sfasd " + value._i);
        this.onChangeforDate('birthday', value);
    }

    handleGender = (value) =>{
        const gender = Object.assign(this.state.gender, {value: value});
        this.setState({
            gender: gender
        });
    }

    getDegreesAll(){
        getDegrees().then(response =>{
            const degreess = this.state.degreesResponse;

            this.setState({
                degreesResponse : degreess.concat(response.data.object),
            })
        })

    }

    getFacultiesAll (){
        getFaculties().then(response =>{
            const facultiess = this.state.facultiesResponse;
            let idFirst = "";
            response.data.object.map((value,key) =>{
                if(key === 0){
                    idFirst = value.id;
                }
            })

            this.setState({
                facultiesResponse : facultiess.concat(response.data.object),
                idFacultyFist : idFirst
            })
        })
    }

    handleChangeFaculty = async (value) =>{
        let arrayFaculty = [];

        value.forEach(x =>{
            arrayFaculty.push({"id" : x})
        })
        
        await this.setState({
            faculties :[]
        })

        const facultiess =  this.state.faculties.slice();

        this.setState({
            faculties :facultiess.concat(arrayFaculty)
        })
        
    }
    handleChangeDegrees = async (value) =>{
        let arrayDegrees = [];

        value.forEach(x =>{
            arrayDegrees.push({"id" : x})
        })
        
        await this.setState({
            degrees :[]
        })

        const degreess =  this.state.degrees.slice();

        this.setState({
            degrees :degreess.concat(arrayDegrees)
        })
        
    }

    componentDidMount = () => {
        this.getFacultiesAll();

        this.getDegreesAll();
    }

    render() {
        const {facultiesResponse} =  this.state;

        const {degreesResponse} =  this.state;
        console.log(this.state)

        return (
            <div className="new-doctor-container">
                <h1 className="page-title">Đăng Ký Trở Thành Bác Sỹ</h1>
                <div className="new-poll-content">
                    <Form onSubmit={this.handleSubmit} className="create-doctor-form">
                        <FormItem  className = "row-file"
                            label="Họ Và Tên :"
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

                        <Row>
                            <Col span={12}>
                                <FormItem className = "row-file"  label="Ngày sinh">
                                    <DatePicker 
                                        // disabledDate={this.disabledStartDate}
                                        format={dateFormat}
                                        value={ this.state.birthday.value ? this.state.birthday.value : moment( moment().format(dateFormat)._i)}
                                        onChange={this.onChangeDate}
                                    />
                                </FormItem>
                            </Col>
                            <Col span={12}>
                                <FormItem  className = "row-file" label="Giới tính">
                                    <Select 
                                        name="gender"
                                        defaultValue="MALE" 
                                        onChange={this.handleGender}
                                        value={this.state.gender.value ? this.state.gender.value : ""}
                                        >
                                        {
                                            genderData.map(value =>
                                                <Option key={value.EN}>{value.VN}</Option>
                                            )
                                        }
                                    </Select>
                                </FormItem>
                            </Col>
                        </Row>

                        <FormItem  className = "row-file"
                            label=" Mã code để được xác nhân :"
                            >
                            <Input 
                                size="large"
                                name="tokenCode"
                                autoComplete="off"
                                placeholder="Hãy nhập mã code do admin cung cấp cho bạn !"
                                value={this.state.tokenCode.value} 
                                onChange={(event) => this.handleTokenChange(event)} />    
                        </FormItem>

                        <FormItem  className = "row-file"
                            label="Bằng cấp :"
                        >
                            <Select
                                mode="multiple"
                                style={{ width: '100%' }}
                                placeholder="Chọn Bằng cấp !"
                                onChange={this.handleChangeFaculty}
                                onDeselect = {this.handleDeselect}
                                optionLabelProp="label"
                            >
                                {
                                    facultiesResponse.map((value,key) =>
                                        <Option key = {key} value = {value.id} label= {value.name}>
                                            {value.name} 
                                        </Option>
                                    )
                                }
                            </Select>
                        </FormItem>

                        <FormItem  className = "row-file"
                            label="Học Hàm - Học vị :"
                            // validateStatus={this.state.fullName.validateStatus}
                            // help={this.state.fullName.errorMsg}
                        >
                            <Select
                                mode="multiple"
                                style={{ width: '100%' }}
                                placeholder="Hãy Chọn !"
                                // defaultValue={['usa']}
                                onChange={this.handleChangeDegrees}
                                optionLabelProp="label"
                            >
                                {
                                    degreesResponse.map((value,key) =>
                                        <Option key = {key} value = {value.id} label= {value.name}>
                                            {value.name} 
                                        </Option>
                                    )
                                }
                            </Select>
                        </FormItem>

                        <FormItem  className = "row-file"
                            label="Địa chỉ :"
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

                        <FormItem  className = "row-file"
                            label="Số điện thoại :"
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

                        <FormItem className = "row-file"
                            label="Email :"
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
                        
                        <FormItem  label="About :">
                            <TextArea 
                                placeholder="Nhập thông tin của bạn !"
                                style = {{ fontSize: '16px' }} 
                                autosize={{ minRows: 3, maxRows: 6 }} 
                                name = "about"
                                value = {this.state.about.value}
                                onChange = {this.handleTokenChange} />
                        </FormItem>

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

export default connect(
    state => ({
        facultyList: state.facultyList
    }),
    {
        getFaculty,
    }
)(RegisterDoctor);