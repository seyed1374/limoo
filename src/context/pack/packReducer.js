import {createContext, useReducer} from "react"
import {GET_PACK, ADD_PACK, UPDATE_PACK} from "./packTypes"

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
                const {pack,pack_id} = payload
                let selectedPack = pack?.filter?.(item => item._id === pack_id)?.[0] ?? {}
                return{
                    ...state,
                    selectedPack
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
