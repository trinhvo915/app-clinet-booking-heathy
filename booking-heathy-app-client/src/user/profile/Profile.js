import React, { Component } from 'react';
import './Profile.css';
import { Upload, message, Layout, DatePicker, Row, notification, Col, Form, Input, Button, Icon, Tabs, Modal, Avatar } from 'antd';
import FooterLayout from '../../common/FooterLayout';
import LoadingIsEmpty from '../../common/LoadingIsEmpty';
import { getHistoryBookedDoctorList } from "../../actions/historyBookedDoctor.list.action";
import { getUser } from "../../actions/get.user.action";
import { connect } from "react-redux";
import DoctorHistory from './DoctorHistory';
import { getProfile } from "../../actions/profile.action";
import moment from 'moment';
import { CardText } from 'reactstrap';
import {
    NAME_MIN_LENGTH, NAME_MAX_LENGTH,
    ADDRESS_MAX_LENGTH,
    MOBILE_MIN_LENGTH, MOBILE_MAX_LENGTH,
    EMAIL_MAX_LENGTH
} from '../../constants';
import { postImagePerson } from '../../util/api/call-api';
import { updateProfileUser } from '../../util/api/call-api';
const { Content } = Layout;
const { TabPane } = Tabs;
const FormItem = Form.Item;
const { TextArea } = Input;
const dateFormat = 'DD/MM/YYYY';

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visibleUpdateProfile: false,
            fullName: {
                value: ''
            },
            address: {
                value: ''
            },
            about: {
                value: ''
            },
            mobile: {
                value: ''
            },
            facebook: {
                value: ''
            },
            birthday: {
                value:  moment( moment().format(dateFormat)._i)
            },
            loading: false,
        }
        this.handleOpenUpdateProfile = this.handleOpenUpdateProfile.bind(this);
        this.handleCancelUpdateProfile = this.handleCancelUpdateProfile.bind(this);
        this.handleInputChangeProfile = this.handleInputChangeProfile.bind(this);
        this.handleChangeImgeProfile = this.handleChangeImgeProfile.bind(this);
        this.onChangeDateProfile = this.onChangeDateProfile.bind(this);
        this.isFormInvalidProfile = this.isFormInvalidProfile.bind(this);
        this.updateProfile = this.updateProfile.bind(this);
    }

    updateProfile (){
        
        const dataprofile = this.props.profile.profile.object;
        let idUser = dataprofile.id;
        let user = {
            id : idUser,
            about : this.state.about.value,
            address : this.state.address.value,
            birthday : this.state.birthday.value,
            facebook : this.state.facebook.value,
            fullName : this.state.fullName.value,
            mobile : this.state.mobile.value,
        }
        
        updateProfileUser(user).then(responser =>{
            if(responser.success === true){
                postImagePerson(this.state.image);
                notification.success({
                    message: 'Booking Clinic',
                    description: responser.message,
                }); 
                this.setState({
                    visibleUpdateProfile: false,
                   
                })
                this.props.getProfile();
            }else {
                notification.error({
                    message: 'Booking Clinic',
                    description: responser.message,
                });
            }
           
        })
        
    }

    validateFacebook = (email) => {
        if (!email) {
            return {
                validateStatus: 'error',
                errorMsg: 'Hãy nhập E-mail !'
            }
        }

        if (email.length > EMAIL_MAX_LENGTH) {
            return {
                validateStatus: 'error',
                errorMsg: `Email quá lớn !. Bạn cần nhập nhỏ hơn( ${EMAIL_MAX_LENGTH} ) ký tự! !`
            }
        }

        return {
            validateStatus: 'success',
            errorMsg: null,
        };
    }

    validateMobile = (mobile) => {
        if (mobile.length < MOBILE_MIN_LENGTH) {
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

    validateAddress = (address) => {
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

    validateAbout = (about) => {
        if (about.length === 0) {
            return {
                validationStatus: 'error',
                errorMsg: `Bạn cần nhập thông tin cơ bản !!`
            }
        } else {
            return {
                validateStatus: 'success',
                errorMsg: null,
            };
        }
    }

    validateFullName = (fullName) => {
        if (fullName.length < NAME_MIN_LENGTH) {
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

    isFormInvalidProfile = () => {

        return !(
            this.state.fullName.validateStatus === 'success' &&
            this.state.address.validateStatus === 'success' &&
            this.state.mobile.validateStatus === 'success' &&
            this.state.about.validateStatus === 'success' &&
            this.state.facebook.validateStatus === 'success' &&
            this.state.imageUrl
        );
    }

    onChangeforDate = (field, value) => {
        this.setState({
          [field]: {
            value: value
          }
        });
    };


    onChangeDateProfile = (value) => {
        this.onChangeforDate('birthday', value);
    }

    handleChangeImgeProfile = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            if (info.file.status === 'done') {
                // Get this url from response in real world.
                getBase64(info.file.originFileObj, imageUrl =>
                    this.setState({
                        imageUrl,
                        loading: false,
                    }),
                );
            }
            this.setState({
                image: info.file.originFileObj,
                loading: false,
            });
        }
    };

    handleInputChangeProfile(event, validationFun) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        this.setState({
            [inputName]: {
                value: inputValue,
                ...validationFun(inputValue)
            }
        });
    }

    loadHistoryBookedDoctors() {
        this.props.getHistoryBookedDoctorList();
        this.props.getProfile();
    }

    handleCancelUpdateProfile() {
        this.setState({
            visibleUpdateProfile: false,
            fullName: {
                value: ''
            },
            address: {
                value: ''
            },
            about: {
                value: ''
            },
            mobile: {
                value: ''
            },
            facebook: {
                value: ''
            },
            birthday: {
                value: ''
            },
            loading: false,
        })
    }

    handleOpenUpdateProfile() {
        this.setState({
            visibleUpdateProfile: true
        })
    }

    componentDidMount() {
        this.loadHistoryBookedDoctors();

    }

    render() {
        const { object } = this.props.historyBookedDoctor.historyBookedDoctor;

        const dataprofile = this.props.profile.profile.object;

        const doctorBooked = [];
        object && object.forEach((doctor, key) => {
            doctorBooked.push(
                <DoctorHistory
                    key={key}
                    doctor={object[key]}
                />
            )
        });
        const { imageUrl } = this.state;
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );

        return (
            <Layout>
                <div className="commnet-modal">
                    <Modal
                        style={{ top: 10 }}
                        footer={null}
                        visible={this.state.visibleUpdateProfile}
                        onCancel={this.handleCancelUpdateProfile}
                    >
                        <span className="title-booking">CẬP NHẬT THÔNG TIN NGƯỜI DÙNG</span>
                        <FormItem className="row-file"
                            label="Họ Và Tên :"
                            validateStatus={this.state.fullName.validateStatus}
                            help={this.state.fullName.errorMsg}>
                            <Input
                                size="large"
                                name="fullName"
                                autoComplete="off"
                                placeholder="Hãy nhập tên đầy đủ của bạn !"
                                value={this.state.fullName.value}
                                onChange={(event) => this.handleInputChangeProfile(event, this.validateFullName)} />
                        </FormItem>

                        <Row>
                            <Col span={12} className="row-birthday">
                                <FormItem
                                    label="Ngày sinh">
                                    <DatePicker
                                        defaultValue={moment(moment().format(dateFormat)._i)}
                                        format={dateFormat}
                                        value={this.state.birthday.value ? this.state.birthday.value : moment(moment().format(dateFormat)._i)}
                                        onChange={this.onChangeDateProfile}
                                    />
                                </FormItem>
                            </Col>
                            <Col span={12} className="row-sex">
                                <div className="image-upload">
                                    <CardText>Ảnh đại diện</CardText>
                                    <Upload
                                        name="avatar"
                                        listType="picture-card"
                                        className="avatar-uploader"
                                        showUploadList={false}
                                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                        beforeUpload={beforeUpload}
                                        onChange={this.handleChangeImgeProfile}
                                    >
                                        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                                    </Upload>
                                </div>
                            </Col>
                        </Row>

                        <FormItem className="row-file"
                            label="Địa chỉ :"
                            validateStatus={this.state.address.validateStatus}
                            help={this.state.address.errorMsg}>
                            <Input
                                size="large"
                                name="address"
                                autoComplete="off"
                                placeholder="Hãy nhập địa chỉ của bạn !"
                                value={this.state.address.value}
                                onChange={(event) => this.handleInputChangeProfile(event, this.validateAddress)} />
                        </FormItem>

                        <FormItem className="row-file"
                            label="Số điện thoại :"
                            validateStatus={this.state.mobile.validateStatus}
                            help={this.state.mobile.errorMsg}>
                            <Input
                                size="large"
                                name="mobile"
                                autoComplete="off"
                                placeholder="Hãy nhập số điện thoại của bạn !"
                                value={this.state.mobile.value}
                                onChange={(event) => this.handleInputChangeProfile(event, this.validateMobile)} />
                        </FormItem>

                        <FormItem className="row-file"
                            label="Facebook :"
                            validateStatus={this.state.facebook.validateStatus}
                            help={this.state.facebook.errorMsg}>
                            <Input
                                size="large"
                                name="facebook"
                                autoComplete="off"
                                placeholder="Hãy nhập facebook của bạn !"
                                value={this.state.facebook.value}
                                onChange={(event) => this.handleInputChangeProfile(event, this.validateFacebook)} />
                        </FormItem>

                        <FormItem label="About :">
                            <TextArea
                                placeholder="Nhập thông tin của bạn !"
                                style={{ fontSize: '16px' }}
                                autosize={{ minRows: 3, maxRows: 6 }}
                                name="about"
                                value={this.state.about.value}
                                onChange={(event) => this.handleInputChangeProfile(event, this.validateAbout)} />
                        </FormItem>

                        <hr />
                        <FormItem>
                            <Button type="primary"
                                onClick={() => this.updateProfile()} 
                                size="large"
                                className="btn-register-doctor"
                                disabled={this.isFormInvalidProfile()}
                                className="signup-form-button">Cập Nhật</Button>
                        </FormItem>

                    </Modal>
                </div>

                <div className="main-clinic-profile">
                    <div className="clinic-left-profile">
                        <div className="avatar-user">
                            <div className="avatar-user-center">
                                <Avatar
                                    src={dataprofile ? "data:image/jpeg;base64," + dataprofile.attachment.data : "https://www.aamc.org/sites/default/files/risking-everything-to-become-a-doctor-jirayut-new-latthivongskorn.jpg"}
                                    size={115} icon="user" />
                            </div>
                            <span className="profile-center">{dataprofile ? dataprofile.fullName : ""}</span>
                        </div>
                        <hr className="profile-hr" />
                        <div className="infor-profile">
                            <div className="detail-profile">
                                <div className="icon-profile">
                                    <Icon style={{ fontSize: '20px', color: '#08c' }} type="schedule" />
                                </div>
                                <div className="icon-innn bvvfor-profile">{dataprofile  || dataprofile === null ? dataprofile.birthday : ""}</div>
                            </div>

                            <div className="detail-profile">
                                <div className="icon-profile">
                                    <Icon style={{ fontSize: '20px', color: '#08c' }} type="cluster" />
                                </div>
                                <div className="icon-infor-profile">{dataprofile ? dataprofile.about : ""}</div>
                            </div>

                            <div className="detail-profile">
                                <div className="icon-profile">
                                    <Icon style={{ fontSize: '20px', color: '#08c' }} type="environment" />
                                </div>
                                <div className="icon-infor-profile">{dataprofile ? dataprofile.address : ""}</div>
                            </div>
                            <div className="detail-profile">
                                <div className="icon-profile">
                                    <Icon style={{ fontSize: '20px', color: '#08c' }} type="phone" />
                                </div>
                                <div className="icon-infor-profile">{dataprofile ? dataprofile.phone : ""}</div>
                            </div>
                            <br />
                            <div className="detail-profile">
                                <div className="icon-profile">
                                    <Icon style={{ fontSize: '20px', color: '#08c' }} type="facebook" />
                                </div>
                                <div className="icon-infor-profile">{dataprofile ? dataprofile.facebook : ""}</div>
                            </div>
                        </div>

                        <div className="profile-btn">
                            <Button onClick={() => this.handleOpenUpdateProfile()} type="primary">Cập Nhật</Button>
                        </div>
                    </div>
                    <Content>
                        <div className="clinic-right-profile">
                            <div className="main-content">
                                <Tabs defaultActiveKey="1" tabPosition="top" style={{ height: 'auto' }}>
                                    <TabPane tab="LỊCH SỬ ĐẶT LỊCH" key="1">
                                        {console.log(doctorBooked)}
                                        {
                                            doctorBooked !== 0 ? doctorBooked : <LoadingIsEmpty />
                                        }
                                    </TabPane>
                                </Tabs>
                            </div>
                            <hr />
                            <FooterLayout />
                        </div>

                    </Content>
                </div>
            </Layout>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        historyBookedDoctor: state.historyBookedDoctor,
        user: state.user,
        profile: state.profile
    }
}

export default connect(
    mapStateToProps,
    {
        getHistoryBookedDoctorList,
        getUser,
        getProfile
    }
)(Profile);