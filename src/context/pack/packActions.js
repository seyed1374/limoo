import {GET_PACK} from "./packTypes"
import request from "../../helpers/request"

function setPack({pack, dispatch})
{
    dispatch({
        type: GET_PACK,
        payload: {pack},
    })
}

function makePack({data: {name}, dispatch})
{
    return request.post({url: "pack", data: {name}})
        .then(res =>
        {
            setPack({dispatch, pack: res.data.data})
        })
}

function getPack({dispatch})
{
    return request.get({url: "pack"})
        .then(res =>
        {
            setPack({dispatch, pack: res.data.data})
            console.log(res.data.data)
        })
}

const packActions = {
    setPack,
    makePack,
    getPack
}
export default packActions
