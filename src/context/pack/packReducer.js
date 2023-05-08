import {createContext, useReducer} from "react"
import {GET_PACK, ADD_PACK, UPDATE_PACK, DELETE_PACK} from "./packTypes"
import {DELETE_CART} from "../cart/cartTypes"

export const PackContext = createContext([])

function PackProvider({children})
{
    const initialState = []
    const init = () => initialState
    const [state, dispatch] = useReducer(reducer, initialState, init)

    function reducer(state, action)
    {
        const {type, payload} = action
        switch (type)
        {
            case GET_PACK:
            {
                const {pack} = payload
                return pack
            }
            case ADD_PACK:
            {
                const {pack} = payload
                return [
                    ...state,
                    pack,
                ]
            }
            case UPDATE_PACK:
            {
                const {pack} = payload
                return{
                    ...state,
                    [pack._id]: pack,
                }
            }
            case DELETE_PACK:
            {
                const {pack_id} = payload
                let selectedPack = state[pack_id]
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
        <PackContext.Provider value={{state, dispatch}}>
            {children}
        </PackContext.Provider>
    )
}

export default PackProvider
