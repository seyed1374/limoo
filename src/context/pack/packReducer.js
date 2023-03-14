import {createContext, useReducer} from "react"
import {GET_PACK, ADD_PACK} from "./packTypes"

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
                console.log(pack)
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
