import {ADD_PACK, GET_PACK, UPDATE_PACK} from "./packTypes"
import request from "../../helpers/request"

function makePack({data: {name}, dispatch})
{
    return request.post({url: "pack", data: {name}})
        .then(res =>
        {
            dispatch({
                type: ADD_PACK,
                payload: {pack: res.data.data},
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
                payload: {pack: res.data.data},
            })
        })
}

function updatePack({pack_id, name, dispatch})
{
    return request.patch({url: "pack", data: {pack_id, name}})
        .then(res =>
        {
            dispatch({
                type: UPDATE_PACK,
                payload: {pack: res.data.data},
            })
        })
}

const packActions = {
    makePack,
    getPack,
    updatePack,
}

export default packActions
