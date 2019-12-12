import { API_BASE_URL} from '../../constants';
import axios from 'axios';
import { ACCESS_TOKEN } from '../../constants';

const callAPI = async (endpoint, method = "GET", data) => {
	let token ;
    if(localStorage.getItem(ACCESS_TOKEN)) {
        token = localStorage.getItem(ACCESS_TOKEN);
    }

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    let dataAPI = null;
	try {
		dataAPI = await axios({
			method,
			url: `${API_BASE_URL}/${endpoint}`,
            data,
		});
	} catch (e) {
		dataAPI = e.response
	} finally {
		return dataAPI;
	}
}

export async function  getUserApi() {
	
	if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
	}

	let user = {};
	await callAPI("user/role",'GET',null)
		.then(response =>{
			user = Object.assign({}, user);
			user =  response.data;
		})

	return user;
}

export async function  getDoctorsOfClinicApi(params) {
	
	let data = {params};
	await callAPI("doctor/all-clinic/"+params.idDoctor+"/"+params.idClinic+"/"+params.dateQurrey+"/"+params.dateCurrent,'GET',null)
		.then(response =>{
			data = Object.assign({}, data);
			data =  response.data.data;
		})
	return data;
}

export async function  getListCommentDoctorApi(params) {
	let data = {};
	await callAPI("comments/doctor/"+params.idDoctor+"/"+params.idClinic,'GET',null)
		.then(response =>{
			data = Object.assign({}, data);
			data =  response.data.data;
		})
	return data;
}

export async function  getProvincesApi() {
	let data = {};
	await callAPI("doctor/provinces",'GET',null)
		.then(response =>{
			data = Object.assign({}, data);
			data =  response.data.data;
		})
	return data;
}

export async function  getDistritsApi(id) {
	let data = {};
	await callAPI("doctor/district/"+id,'GET',null)
		.then(response =>{
			data = Object.assign({}, data);
			data =  response.data.data;
		})
	return data;
}

export async function  getListDayBookingDoctorApi(params) {
	let data = {};
	await callAPI("doctor/dates-booking/"+params.idDoctor+"/"+params.idClinic,'GET',null)
		.then(response =>{
			data = Object.assign({}, data);
			data =  response.data.data;
		})
	return data;
}

export async function  getRateDoctorApi(params) {
	let data = {};
	await callAPI("rates/doctor/"+params.idDoctor+"/"+params.idClinic,'GET',null)
		.then(response =>{
			data = Object.assign({}, data);
			data =  response.data.data;
		})
	return data;
}

export async function  getDoctorListApi() {
	let data = {};
	
	await callAPI("doctor/all",'GET',null)
		.then(response =>{
			data = Object.assign({}, data);
			data =  response.data.data;
		})
	return data;
}

export async function  getSearchDoctorListApi(address) {
	let data = {};
	
	await callAPI("doctor/search/"+address,'GET',null)
		.then(response =>{
			data = Object.assign({}, data);
			data =  response.data.data;
		})
	return data;
}

export async function  getListPostTypeApi() {
	let data = {};
	await callAPI("post-types",'GET',null)
		.then(response =>{
			data = Object.assign({}, data);
			data =  response.data.data;
		})
	return data;
}

export async function  postImagePerson(image) {
	
	let formdata= new FormData();
	formdata.append("file",image);
	formdata.append("attachmentType","DAIDIEN")
	
	await callAPI("user/uploadFile",'POST',formdata)
}

export async function  postImageLogoClinic(image) {
	
	let formdata= new FormData();
	formdata.append("file",image);
	formdata.append("attachmentType","DAIDIENCLINIC")
	
	await callAPI("user/uploadFile",'POST',formdata)
}

export async function  postImageClinic(image) {
	
	let formdata= new FormData();
	formdata.append("file",image);
	formdata.append("attachmentType","CLINIC")
	
	await callAPI("user/uploadFile",'POST',formdata)
}

export async function  addCommnetForDoctor(commnet) {
	let data = {};
	await callAPI("comments",'POST',commnet)
		.then(response =>{
			data = Object.assign({}, data);
			data =  response.data.data.object;
		})
	return data;
}

export async function  addPrices(idClinic, prices) {
	let data = {};
	await callAPI("price/"+idClinic,'POST',prices)
		.then(response =>{
			data = Object.assign({}, data);
			data =  response.data.data;
		})
	return data;
}

export async function  addDoctorInClinic(params) {
	let data = {};
	await callAPI("clinic/"+params.idClinic+"/"+params.emailOrUsername,'PUT')
		.then(response =>{
			data = Object.assign({}, data);
			data =  response.data.data.object;
		})
	return data;
}


export async function  addPostForClinic(post) {
	let data = {};
	await callAPI("posts",'POST',post)
		.then(response =>{
			data = Object.assign({}, data);
			data =  response;
		})
	return data;
}

export async function  getPostTypeApi(params) {
	let data = {};

	await callAPI("doctor/posts/"+params.id_clinic+"/"+params.id_post_type,'GET')
		.then(response =>{
			data = Object.assign({}, data);
			data =  response.data.data;
		})
	return data;
}

export async function  getPricesApi(params) {
	let data = {};
	await callAPI("doctor/prices/"+params.id_clinic,'GET')
		.then(response =>{
			data = Object.assign({}, data);
			data =  response.data.data;
		})
	return data;
}

export async function  getBookedsForDoctorApi(params) {
	let data = {};
	await callAPI("booking/bookeds/"+params.id_clinic,'GET')
		.then(response =>{
			data = Object.assign({}, data);
			data =  response.data.data;
		})
	return data;
}

export async function  getHistoryBookedDoctorApi() {
	let data = {};
	await callAPI("booking/bookeds/user",'GET')
		.then(response =>{
			data = Object.assign({}, data);
			data =  response.data.data;
		})
	return data;
}

export async function  getUserProfileApi() {
	let data = {};
	await callAPI("user/profiles",'GET')
		.then(response =>{
			data = Object.assign({}, data);
			data =  response.data.data;
		})
	return data;
}

export async function  reportUserForDoctorApi(params) {
	let data = {};
	await callAPI("user/report/"+params.id_user+"/"+params.id_expert+"/"+params.id_booked,'GET')
		.then(response =>{
			data = Object.assign({}, data);
			data =  response.data.data;
		})
	return data;
}

export async function  sendEmailBooking(booking) {
	let data = {};
	await callAPI("booking/send-email",'POST',booking)
		.then(response =>{
			
		})
	return data;
}

export async function  sendEmailBookedBusyy(id_booked) {
	let data = {};
	await callAPI("send-email/busyy/"+id_booked,'GET')
		.then(response =>{
			data = Object.assign({}, data);
			data =  response
		})
	return data;
}

export async function  boookingForDoctor(booking) {
	let data = {};
	await callAPI("booking/update",'PUT',booking)
		.then(response =>{
			data = Object.assign({}, data);
			data =  response.data;
		})
	return data;
}

export async function  addRateForDoctor(rate) {
	let data = {};
	await callAPI("rates",'POST',rate)
		.then(response =>{
			data = Object.assign({}, data);
			data =  response.data;
		})
	return data;
}

export async function  updateProfileUser(user) {
	let data = {};
	await callAPI("user/update",'POST',user)
		.then(response =>{
			data = Object.assign({}, data);
			data =  response.data;
		})
	return data;
}

export async function  addLichForDoctor(lich) {
	let data = {};
	await callAPI("booking/create",'POST',lich)
		.then(response =>{
			data = Object.assign({}, data);
			data =  response.data;
		})
	return data;
}