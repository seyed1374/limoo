import REST_CONSTANT from "../../constant/REST_CONSTANT"
import axios from "axios"

function getOtpCode({phone})
{
    return axios.post(`${REST_CONSTANT.baseUrl}/otp/get`, {phone})
}

const userActions = {
    getOtpCode,
}

export default userActions