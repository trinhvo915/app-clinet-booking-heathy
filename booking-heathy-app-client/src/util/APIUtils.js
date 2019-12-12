import { API_BASE_URL, POLL_LIST_SIZE, ACCESS_TOKEN } from '../constants';

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })
    
    if(localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
        .then(response => response.json()
        .then(data => {
                if(!response.ok) {
                    return Promise.reject(data);
                }
                return data;
            })
        );
};

export function getAllPolls(page, size) {
    page = page || 0;
    size = size || POLL_LIST_SIZE;

    return request({
        url: API_BASE_URL + "/polls?page=" + page + "&size=" + size,
        method: 'GET'
    });
}

export function createPoll(pollData) {
    return request({
        url: API_BASE_URL + "/polls",
        method: 'POST',
        body: JSON.stringify(pollData)         
    });
}

export function castVote(voteData) {
    return request({
        url: API_BASE_URL + "/polls/" + voteData.pollId + "/votes",
        method: 'POST',
        body: JSON.stringify(voteData)
    });
}

export function login(loginRequest) {
    return request({
        url: API_BASE_URL + "/auth/signin",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

export function signup(signupRequest) {
    return request({
        url: API_BASE_URL + "/auth/signup",
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });
}

export function checkUsernameAvailability(username) {
    return request({
        url: API_BASE_URL + "/user/checkUsernameAvailability?username=" + username,
        method: 'GET'
    });
}

export function checkEmailAvailability(email) {
    return request({
        url: API_BASE_URL + "/user/checkEmailAvailability?email=" + email,
        method: 'GET'
    });
}


export function getCurrentUser() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/user/me",
        method: 'GET'
    });
}

export function getUserProfile(username) {
    return request({
        url: API_BASE_URL + "/users/" + username,
        method: 'GET'
    });
}

export  function getFaculties() {
    return request({
        url: API_BASE_URL + "/faculties",
        method: 'GET'
    });
}

export  function getDegrees() {
    return request({
        url: API_BASE_URL + "/degrees",
        method: 'GET'
    });
}

export function registerDoctor(registerRequest) {
    return request({
        url: API_BASE_URL + "/user/doctor",
        method: 'PUT',
        body: JSON.stringify(registerRequest)
    });
}

export  function getUserByRoleName(id_User) {
    return request({
        url: API_BASE_URL + "/user/role/" + id_User,
        method: 'GET'
    });
}

export function registerClinic(clinic) {
    return request({
        url: API_BASE_URL + "/clinic",
        method: 'POST',
        body: JSON.stringify(clinic)
    });
}

export function getUserApi(id) {
    return request({
        url: API_BASE_URL + "/user/" + id,
        method: 'GET'
    });
}