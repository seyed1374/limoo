import axios from "axios"
import REST_CONSTANT from "../constant/REST_CONSTANT"

function getToken()
{
    return localStorage.getItem("token")
}

function get({url})
{
    const token = getToken()
    return axios.get(`${REST_CONSTANT.baseUrl}/${url}`,
        {headers: {Authorization: token}},
    )
}

function post({url, data})
{
    const token = getToken()
    return axios.post(`${REST_CONSTANT.baseUrl}/${url}`,
        data,
        {headers: {Authorization: token}},
    )
}


function patch({url, data})
{
    const token = getToken()
    return axios.patch(`${REST_CONSTANT.baseUrl}/${url}`,
        data,
        {headers: {Authorization: token}},
    )
}

function del({url, data})
{
    const token = getToken()
    return axios.delete(`${REST_CONSTANT.baseUrl}/${url}`,
        data,
        {headers: {Authorization: token}},
    )
}

const request = {
    get,
    post,
    patch,
    del
}

export default request