import React, { Component } from 'react'
import './NewClinic.css';
import { Form, Input,Row, Button, Select, Col, notification } from 'antd';
import { 
    NAME_MIN_LENGTH, NAME_MAX_LENGTH, 
    ADDRESS_MAX_LENGTH,
} from '../../constants';
import { getFaculties } from "./../../util/APIUtils";
import { registerClinic } from "./../../util/APIUtils";
const Option = Select.Option;
const FormItem = Form.Item;

export default class NewClinic extends Component {
    constructor(props){
        super(props);
        this.state = {
            idFacultyFist : "",
            name: {
                value: ''
            },
            address: {
                value: ''
            },
            faculties: [

            ],
            facultiesResponse: [

            ],
            latitude : "",
            longitude : "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        
        const clinic = {
            address: this.state.address.value,
            faculties : this.state.faculties,
            fullName : this.state.name.value,
            latitude : '108.3842789,14z',
            longitude : '15.6976317'
        };

        console.log(clinic)

        registerClinic(clinic)
        .then(response =>{
           if(response.success === true){
                notification.success({
                    message: 'Booking Clinic',
                    description: "Thank you! Bạn đã đăng ký thành công.",
                });  

                this.props.history.push("/");
           }
        }).catch(error =>{
            console.log(error);
            notification.error({
                message: 'Booking Clinic',
                description: error.message || 'Xin lỗi bạn ! Đăng ký thất bại !'
            });
        })
    }

    validatename = (name) =>{
        if(name.length < NAME_MIN_LENGTH){
            return {
                validationStatus: 'error',
                errorMsg: `Họ và tên quá nhỏ !. Bạn cần nhập lớn hơn ( ${NAME_MIN_LENGTH} )  ký tự!!`
            }
        } else if (name.length > NAME_MAX_LENGTH) {
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

        console.log(this.state)
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

    componentDidMount = async ()  => {
        this.getFacultiesAll();
    }

    isFormInvalid = ()=> {
        var checkArray = false;
        if(this.state.faculties.length !==0){
            checkArray = true;
        }
        return !(
            this.state.name.validateStatus === 'success'&&
            this.state.address.validateStatus === 'success'&&
            checkArray
        );
    }

    render() {
        const {facultiesResponse} =  this.state;
        console.log(this.state)
        return (
            
            <div className="new-doctor-container">
                <h1 className="page-title">Đăng Ký Phòng Khám Bệnh</h1>
                <div className="new-poll-content">
                    <Form onSubmit={this.handleSubmit} className="create-doctor-form">
                        <FormItem  className = "row-file"
                            label="Tên phòng khám :"
                            validateStatus={this.state.name.validateStatus}
                            help={this.state.name.errorMsg}>
                            <Input 
                                size="large"
                                name="name"
                                autoComplete="off"
                                placeholder="Hãy nhập tên đầy đủ của bạn !"
                                value={this.state.name.value} 
                                onChange={(event) => this.handleInputChange(event, this.validatename)} />    
                        </FormItem>


                        <FormItem  className = "row-file"
                            label="Khoa khám Bệnh :"
                        >
                            <Select
                                mode="multiple"
                                style={{ width: '100%' }}
                                placeholder="Chọn khoa của phòng khám !"
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
                            label="Địa chỉ của phòng khám :"
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

                        <FormItem>
                            <Button type="primary" 
                                htmlType="submit" 
                                size="large" 
                                disabled={this.isFormInvalid()}
                                className="signup-form-button">Đăng ký</Button>
                        </FormItem>
                    </Form>
                </div>    
            </div>
        )
    }
}
