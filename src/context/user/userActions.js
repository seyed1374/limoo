import {GET_USER} from "./userTypes"
import request from "../../helpers/request"

function getOtpCode({phone})
{
    return request.post({url: "otp/get", data: {phone}})
}

function verifyOtpCode({data: {phone, code}, dispatch})
{
    return request.post({url: "otp/verify", data: {phone, code}})
        .then(res =>
        {
            const {data: {is_sign_up, token, user}} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setUser({dispatch, user})
            return is_sign_up
        })
}

function getUser({dispatch})
{
    return request.get({url: "user"})
        .then(res =>
        {
            setUser({dispatch, user: res.data.data})
        })
}

function setUser({user, dispatch})
{
    dispatch({
        type: GET_USER,
        payload: {user},
    })
}

function updateUser({data, dispatch})
{
    return request.patch({url: "user", data})
        .then(res =>
        {
            setUser({dispatch, user: res.data.data})
        })
}



const userActions = {
    getOtpCode,
    verifyOtpCode,
    setUser,
    getUser,
    updateUser,
}

export default userActions