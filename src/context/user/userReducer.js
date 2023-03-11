import {createContext, useEffect, useReducer, useState} from "react"
import {GET_USER} from "./userTypes"
import userActions from "./userActions"

export const UserContext = createContext(null)

function UserProvider({children})
{
    const initialState = null
    const init = () => initialState
    const [state, dispatch] = useReducer(reducer, initialState, init)
    const [loginChecking, setLoginChecking] = useState(true)

    useEffect(() =>
    {
        const user = localStorage.getItem("user")
        const token = localStorage.getItem("token")
        if (user && token)
        {
            userActions.setUser({user: JSON.parse(user), dispatch})
            userActions.getUser({dispatch})
            setTimeout(() => setLoginChecking(false), 10)
        }
        else setLoginChecking(false)
    }, [])

    function reducer(state, action)
    {
        const {type, payload} = action

        switch (type)
        {
            case GET_USER:
            {
                const {user} = payload
                return {
                    ...state,
                    ...user,
                }
            }
            default:
                return state
        }
    }

    return (
        <UserContext.Provider value={{state, dispatch}}>
            {loginChecking ? null : children}
        </UserContext.Provider>
    )
}

export default UserProvider