import {createContext, useReducer} from "react"
import {ADD_CART, GET_CART} from "./cartTypes"


export const CartContext = createContext([])

function CartProvider({children})
{
    const initialState = []
    const init = () => initialState
    const [state, dispatch] = useReducer(reducer, initialState, init)


    function reducer(state, action)
    {
        const {type, payload} = action
        switch (type)
        {
            case GET_CART:
            {
                const {cart} = payload
                return cart
            }
            case ADD_CART:
            {
                const {cart} = payload
                return [
                    ...state,
                    cart,
                ]
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