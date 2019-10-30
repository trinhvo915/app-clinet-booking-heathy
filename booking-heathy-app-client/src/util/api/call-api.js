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
	let user = {};
	
	 await callAPI("user/role",'GET',null)
		.then(response =>{
			user = Object.assign({}, user);
			user =  response.data;
		})

	return user;
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

export async function  postImagePerson(image) {
	
	let formdata= new FormData();
	formdata.append("file",image);
	formdata.append("attachmentType","ĐẠI DIỆN")
	
	await callAPI("user/uploadFile",'POST',formdata)
}

export async function  postImageClinic(image) {
	
	let formdata= new FormData();
	formdata.append("files",image);
	formdata.append("attachmentType","CLINIC")
	
	await callAPI("user/uploadMultipleFiles",'POST',formdata)
}