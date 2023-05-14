import {createContext, useReducer} from "react"
import {GET_PACK, ADD_PACK, UPDATE_PACK, DELETE_PACK} from "./packTypes"

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
                const temp = [...state]
                const packIndex = temp.findIndex(item => item._id === pack._id)
                temp[packIndex] = pack
                return temp
            }
            case DELETE_PACK:
            {
                const {pack_id} = payload
                let newState = [...state]
                const packIndex = newState.findIndex(item => item._id === pack_id)
                newState.splice(packIndex, 1)
                return newState
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
