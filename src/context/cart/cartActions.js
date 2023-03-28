import request from "../../helpers/request"
import {ADD_CART, GET_CART} from "./cartTypes"
import {GET_USER} from "../user/userTypes"


function makeCart({data , dispatch})
{
    return request.post({url: "cart", data})
        .then(res =>
        {
            dispatch({
                type: ADD_CART,
                payload: {cart: res.data.data}
            })

            return res
        })
}

function getCart({dispatch})
{
    return request.get({url: "cart"})
        .then(res =>
        {
            dispatch({
                type: GET_CART,
                payload: {cart: res.data.data}
            })
        })
}

function setCart({cart, dispatch})
{
    dispatch({
        type: GET_CART,
        payload: {cart},
    })
}

function updateCart({data, dispatch})
{
    return request.patch({url: "cart", data})
        .then(res =>
        {
            setCart({dispatch, cart: res.data.data})
        })
}

function deleteCart({data, dispatch})
{
    return request.del({url: "cart", data})
        .then(res =>
        {
            setCart({dispatch, cart: res.data.data})
        })
}

const cartActions = {
    makeCart,
    getCart,
    setCart,
    updateCart,
    deleteCart
}

export default cartActions