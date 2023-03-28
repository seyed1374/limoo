import {ADD_PACK, GET_PACK} from "./packTypes"
import request from "../../helpers/request"

function makePack({data: {name}, dispatch})
{
    return request.post({url: "pack", data: {name}})
        .then(res =>
        {
            dispatch({
                type: ADD_PACK,
                payload: {pack: res.data.data}
            })

            return res
        })
}

function getPack({dispatch})
{
    return request.get({url: "pack"})
        .then(res =>
        {
            dispatch({
                type: GET_PACK,
                payload: {pack: res.data.data}
            })
        })
}

const packActions = {
    makePack,
    getPack
}

export default packActions
