import request from "../../helpers/request"
import {ADD_CART, DELETE_CART, GET_CART, UPDATE_CART} from "./cartTypes"


function makeCart({data, dispatch})
{
    return request.post({url: "cart", data})
        .then(res =>
        {
            dispatch({
                type: ADD_CART,
                payload: {cart: res.data.data},
            })
        })
}

function getCart({dispatch, pack_id})
{
    return request.get({url: "cart" + "/" + pack_id})
        .then(res =>
        {
            dispatch({
                type: GET_CART,
                payload: {cart: res.data.data, packId: pack_id},
            })
        })
}

function updateCart({data, dispatch})
{
    return request.patch({url: "cart", data})
        .then(res =>
        {
            dispatch({
                type: UPDATE_CART,
                payload: {cart: res.data.data},
            })
        })
}

function deleteCart({pack_id, cart_id, dispatch})
{
    return request.del({url: "cart", data: {cart_id}})
        .then(() =>
        {
            dispatch({
                type: DELETE_CART,
                payload: {pack_id, cart_id},
            })
        })
}

const cartActions = {
    makeCart,
    getCart,
    updateCart,
    deleteCart,
}

export default cartActions