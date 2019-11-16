import React, { Component } from 'react'
import './Clinic.css';
import { CardText, CardImg } from 'reactstrap';
import moment from 'moment';
import NotFound from '../../common/NotFound';
import ServerError from '../../common/ServerError';
import LoadingIndicator from '../../common/LoadingIndicator';
import { notification, Icon, Modal, Button, Carousel, Layout, Tabs, Radio, Select } from 'antd';
import { connect } from "react-redux";
import { getDoctorOfClinicList } from "../../actions/doctorsOfClinic.list.action";
import { getUser } from "../../actions/get.user.action";
import { addRateForDoctor } from './../../util/api/call-api';
import { getDoctorsOfClinicApi } from './../../util/api/call-api';
import { addPostForClinic } from './../../util/api/call-api';
import { getListPostTypeApi } from './../../util/api/call-api';
import { getDoctorList } from "../../actions/doctor.list.action";
import { getPostType } from "../../actions/post.type.list.action";
import { getPostClinicList } from "../../actions/post.list.action";

import { getPostProcessClinicList } from "../../actions/post.process.list.action";
import { getPostInforClinicList } from "../../actions/post.infor.list.action";
import { getPostDeviceClinicList } from "../../actions/post.device.list.action";
import { Spin } from 'antd';
import DoctorClinic from './Doctor';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css'
import LoadingIsEmpty from '../../common/LoadingIsEmpty';
const { Content } = Layout;
const { TabPane } = Tabs;
const { Option } = Select;

class Clinic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: BraftEditor.createEditorState(null),
            editorStateValue: "",
            contentCommnet: {
                value: ""
            },
            idTypePost: "",
            clinics: {},
            userResponceClinics: [],
            currentRates: [],
            rateValue: 0,
            visiblecontentCommnet: false,
            stateViewLayout: 0,
            visibleCommnet: false,
            visibleCreateSecheduce: false,
            isLoading: false,
            visiblePost: false,
        };
        this.loadClinicDoctors = this.loadClinicDoctors.bind(this);
        this.handleChangeRate = this.handleChangeRate.bind(this);
    }

    handleChangeRate(value, doctor, key) {

        if (this.props.user.user && this.props.user.user.status !== 401) {
            let numberStar = "";

            if (value === 1) {
                numberStar = "ONE"
            } else if (value === 2) {
                numberStar = "TWO"
            } else if (value === 3) {
                numberStar = "THREE"
            } else if (value === 4) {
                numberStar = "FOUR"
            } else if (value === 5) {
                numberStar = "FIVE"
            }

            const currentRates = this.state.currentRates.slice();
            currentRates[key] = value;

            this.setState({
                currentRates: currentRates
            });

            let rate = {
                numberStar: numberStar,
                clinic: {
                    id: this.state.clinics.id
                },
                expert: {
                    id: doctor.id
                }
            }

            addRateForDoctor(rate).then(Response => {
                this.props.getDoctorOfClinicList(this.state.paramsClininc);
                this.props.getDoctorList()
            })
        } else {
            notification.error({
                message: 'Booking Clinic',
                description: 'Xin lỗi bạn ! Bạn chưa đăng nhập !'
            });
        }

    }

    loadClinicDoctors(paramsClininc) {
        this.props.getDoctorOfClinicList(paramsClininc);

        const currentRates = this.state.currentRates.slice();

        getDoctorsOfClinicApi(paramsClininc).then(Response => {
            this.setState({
                clinics: Response.object,
                currentRates: currentRates.concat(Array(Response.object.userResponceClinics.length).fill(null)),
                paramsClininc: paramsClininc
            })
        })

        getListPostTypeApi().then(response => {
            let postTypesViews = [];
            let postTypeInfor = {};
            let postTypeProcess = {};
            let postTypeDevice = {};
            response.object.forEach(x => {
                if (x.name !== "NORMAR") {
                    postTypesViews.push(x)
                }
                if (x.name === "THÔNG TIN PHÒNG KHÁM") {
                    postTypeInfor = x;
                }
                if (x.name === "QUY TRÌNH KHÁM BỆNH") {
                    postTypeProcess = x;
                }
                if (x.name === "TRANG THIẾT BỊ") {
                    postTypeDevice = x;
                }
            })
            this.setState({
                postTypes: postTypesViews,
                postTypeInfor: postTypeInfor,
                postTypeProcess: postTypeProcess,
                postTypeDevice: postTypeDevice,
            })
            let paramsProcess = {
                id_clinic: paramsClininc.idClinic,
                id_post_type: postTypeProcess.id
            }
            this.state.postTypeProcess && this.props.getPostProcessClinicList(paramsProcess);

            let paramsInfor = {
                id_clinic: paramsClininc.idClinic,
                id_post_type: postTypeInfor.id
            }
            this.state.postTypeInfor && this.props.getPostInforClinicList(paramsInfor);


            let paramsDevices = {
                id_clinic: paramsClininc.idClinic,
                id_post_type: postTypeDevice.id
            }
            this.state.postTypeDevice && this.props.getPostDeviceClinicList(paramsDevices);

        })

    }

    componentDidMount() {
        const idClininc = this.props.match.params.id_clinic;
        const idDoctor = this.props.match.params.id_doctor;
        let dateQurrey = moment(moment().format('YYYY-MM-DD'))._i;
        let paramsClininc = {
            idClinic: idClininc,
            idDoctor: idDoctor,
            dateQurrey: dateQurrey,
            dateCurrent: dateQurrey,
        }
        this.loadClinicDoctors(paramsClininc);

        this.props.getUser();

    }

    handleChangeEditorPost = (editorState) => {
        this.setState({ editorState: editorState.toHTML() })
    }

    showModalCreatePost = async () => {

        this.setState({
            visiblePost: true,

        });
    };

    handleCancelPost = () => {
        this.setState({
            visiblePost: false,
            editorState: BraftEditor.createEditorState(null),
        });
    }

    onChangeSelectPostType = (value) => {
        this.setState({
            idTypePost: value
        })
    }

    handleOkPost = () => {
        if (this.state.idTypePost === "" || this.state.editorState.length < 1000) {
            if (this.state.idTypePost === "") {
                notification.error({
                    message: 'Booking Clinic',
                    description: 'Xin lỗi bạn! Bạn chưa chọn kiểu bài viêt'
                });
            } else {
                notification.error({
                    message: 'Booking Clinic',
                    description: 'Xin lỗi bạn! Nội dung bài viêt quá ít!'
                });
            }

        } else {
            let param = {
                content: this.state.editorState,
                idClinic: this.props.match.params.id_clinic,
                idTypePost: this.state.idTypePost
            }
            addPostForClinic(param).then(response => {
                if (response.data.data.status === 200) {
                    notification.success({
                        message: 'Booking Clinic',
                        description: "Tạo thành công !",
                    });

                    this.setState({
                        editorState: BraftEditor.createEditorState(null),
                    })

                    let typeString = "";
                    this.state.postTypes.forEach(x => {
                        if (x.id === param.idTypePost) {
                            typeString = x.name
                        }
                    })

                    let paramsInfor = {
                        id_clinic: param.idClinic,
                        id_post_type: param.idTypePost
                    }

                    if (typeString === "THÔNG TIN PHÒNG KHÁM") {
                        this.state.postTypeInfor && this.props.getPostInforClinicList(paramsInfor);
                    }
                    if (typeString === "TRANG THIẾT BỊ") {
                        
                        this.state.postTypeDevice && this.props.getPostDeviceClinicList(paramsInfor);
                    }

                    if (typeString === "QUY TRÌNH KHÁM BỆNH") {
                        this.state.postTypeProcess && this.props.getPostProcessClinicList(paramsInfor);
                    }
                } else {
                    notification.error({
                        message: 'Booking Clinic',
                        description: response.data.data.message
                    });
                }
            })
        }
    }

    render() {
        console.log(this.state)

        const postInfors = this.props.postInfors.postInfors.object;

        const postProcess = this.props.postProcess.postProcess.object;

        const postDevices = this.props.postDevices.postDevices.object;

        const { object } = this.props.clinic.clinic;
        const { clinics } = this.state;


        if (this.state.isLoading) {
            return <LoadingIndicator />;
        }

        if (this.state.notFound) {
            return <NotFound />;
        }

        if (this.state.serverError) {
            return <ServerError />;
        }
        const doctorViews = [];

        object && object.userResponceClinics.forEach((doctor, key) => {
            doctorViews.push(
                <DoctorClinic
                    key={key}
                    paramsClininc={this.state.paramsClininc}
                    doctor={object.userResponceClinics[key]}
                    clinics={this.state.clinics}
                    currentRate={this.state.currentRates[key]}
                    onChangeRate={(value) => this.handleChangeRate(value, doctor, key)}
                />
            )
        });

        return (
            <Layout>
                {
                    clinics ? (
                        <div className="main-clinic">

                            <div className="commnet-modal">
                                <Modal
                                    style={{ top: 0 }}
                                    width={920}
                                    visible={this.state.visiblePost}
                                    onOk={this.handleOkPost}
                                    onCancel={this.handleCancelPost}
                                >
                                    <span className="title-booking">ĐĂNG THÔNG TIN PHÒNG KHÁM</span>
                                    <hr className="line-line-post"></hr>
                                    <div className="line-line-post-type">
                                        <strong>LOẠI BÀI VIẾT :</strong>
                                        <Select
                                            style={{ width: '30%' }}
                                            placeholder="Hảy Chọn Kiểu Đăng Bài Viết"
                                            onChange={this.onChangeSelectPostType}
                                        >
                                            {
                                                this.state.postTypes ? this.state.postTypes.map((value, key) =>
                                                    <Option key={key} value={this.state.postTypes[key].id}>{value.name}</Option>
                                                ) : null
                                            }
                                        </Select>
                                    </div>

                                    <hr className="line-line-post"></hr>
                                    <BraftEditor contentStyle={{ height: 400, boxShadow: 'inset 0 1px 3px rgba(0,0,0,.1)' }} language="en" placeholder="Nhập thông tin phòng khám ...." value={this.state.editorState} onChange={this.handleChangeEditorPost} />
                                </Modal>
                            </div>

                            <div className="clinic-left">
                                <div className="logo-clinic">
                                    <CardImg className="logo-clinic-image" variant="top" src={"https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/61161283_2321475054806859_331553702676529152_n.jpg?_nc_cat=100&_nc_oc=AQmBqpb1drO4571bAv--cTorIP66LzZsIePccs_31_sohEG2SFx4Iyrg89-ZLCShm1w&_nc_ht=scontent.fsgn2-2.fna&oh=48e8c12558670da5f74940b239caad1f&oe=5E19B8E4"} />
                                </div>

                                <div className="logo-clinic-name">
                                    <CardText className="name-clinic">
                                        {
                                            clinics.name
                                        }
                                    </CardText>

                                </div>

                                <div className="address-clinic">
                                    <div className="icon-address">
                                        <Icon style={{ color: '#08c' }} className="icon-address" type="environment" />
                                    </div>
                                    <CardText className="text-address">
                                        {
                                            clinics.address
                                        }
                                    </CardText>
                                </div>

                                <div className="menu-clinic">

                                    <Radio.Group >
                                        <Button type="primary" onClick={this.showModalCreatePost} shape="round" size="default">
                                            THÊM THÔNG TIN PHÒNG KHÁM
                                        </Button>
                                        <br />

                                    </Radio.Group>
                                </div>
                            </div>
                            <Content>
                                <div className="clinic-right">
                                    <div className="clinic-image">
                                        <Carousel autoplay>
                                            {
                                                clinics.photoClinics && clinics.photoClinics.map((value, key) => (
                                                    <div key={key}>
                                                        <CardImg className="img-clinic" variant="top" src={"data:image/jpeg;base64," + value.data} />
                                                    </div>
                                                ))
                                            }
                                        </Carousel>
                                    </div>

                                    <div className="main-content">

                                        <Tabs defaultActiveKey="1" tabPosition="top" style={{ height: 'auto' }}>
                                            <TabPane tab="BÁC SỸ" key="1">
                                                {doctorViews}
                                            </TabPane>
                                            <TabPane tab="THÔNG TIN PHÒNG KHÁM" key="2">
                                                {
                                                    postInfors ? postInfors.map((value, key) => (
                                                        <div key = {key} className="posts-infor" dangerouslySetInnerHTML={{ __html: value.content }}>
                                                        </div>
                                                    )) : <LoadingIsEmpty></LoadingIsEmpty>
                                                }
                                            </TabPane>
                                            <TabPane tab="TRANG THIẾT BỊ" key="3">
                                                {
                                                    postDevices ? postDevices.map((value, key) => (
                                                        <div key = {key} className="posts-infor" dangerouslySetInnerHTML={{ __html: value.content }}>
                                                        </div>
                                                    )) : <LoadingIsEmpty/>
                                                }
                                            </TabPane>
                                            <TabPane tab="CHI TIẾT GIÁ" key="4">
                                                GIÁ
                                            </TabPane>
                                            <TabPane tab="QUY TRÌNH KHÁM BỆNH" key="5">
                                                {
                                                    postProcess ? postProcess.map((value, key) => (
                                                        <div key = {key} className="posts-infor" dangerouslySetInnerHTML={{ __html: value.content }}>
                                                        </div>
                                                    )) : <LoadingIsEmpty/>
                                                }
                                            </TabPane>

                                            <TabPane tab="XEM LỊCH HẸN" key="6">

                                            </TabPane>
                                        </Tabs>

                                    </div>
                                </div>
                            </Content>
                        </div>
                    ) : <LoadingIndicator />
                }
            </Layout>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        clinic: state.clinic,
        user: state.user,
        postTypes: state.postTypes,
        postInfors: state.postInfors,
        postProcess: state.postProcess,
        postDevices: state.postDevices,
    }
}

export default connect(
    mapStateToProps,
    {
        getDoctorOfClinicList,
        getUser,
        getDoctorList,
        getPostType,
        getPostProcessClinicList,
        getPostInforClinicList,
        getPostDeviceClinicList
    }
)(Clinic);