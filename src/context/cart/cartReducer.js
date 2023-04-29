import {createContext, useReducer} from "react"
import {ADD_CART, DELETE_CART, GET_CART, UPDATE_CART} from "./cartTypes"


export const CartContext = createContext(null)

function CartProvider({children})
{
    const initialState = {}
    const init = () => initialState
    const [state, dispatch] = useReducer(reducer, initialState, init)

    function reducer(state, action)
    {
        const {type, payload} = action
        switch (type)
        {
            case GET_CART:
            {
                const {cart, packId} = payload
                return {
                    ...state,
                    [packId]: cart,
                }
            }
            case ADD_CART:
            {
                const {cart} = payload
                return {
                    ...state,
                    [cart.pack_id]: [
                        ...state[cart.pack_id] ?? [],
                        cart,
                    ],
                }
            }
            case UPDATE_CART:
            {
                const {cart} = payload
                let selectedPack = state[cart.pack_id]
                let selectedCart = selectedPack?.filter(item => item._id === cart._id)?.[0] ?? {}
                selectedCart = {...selectedCart, ...cart}
                return {
                    ...state,
                    [cart.pack_id]: selectedPack,
                }
            }
            case DELETE_CART:
            {
                const {pack_id, cart_id} = payload
                let selectedPack = state[pack_id]
                let selectedCartIndex = selectedPack.findIndex(item => item._id === cart_id)
                selectedPack.splice(selectedCartIndex, 1)
                return {
                    ...state,
                    [pack_id]: selectedPack,
                }
            }
            default:
                return state
        }
    }

    return (
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider