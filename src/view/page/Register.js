import Button from "../component/Button"
import {useContext, useState} from "react"
import {useNavigate} from "react-router-dom"
import userActions from "../../context/user/userActions"
import {UserContext} from "../../context/user/userReducer"

function Register()
{
    let navigate = useNavigate()
    const {dispatch} = useContext(UserContext)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const isBtnDisable = lastName.length < 3

    function onFirstNameChange(e)
    {
        setFirstName(e.target.value)
    }

    function onLastNameChange(e)
    {
        setLastName(e.target.value)
    }

    function onKeyDown(e)
    {
        if (e.keyCode === 13)
        {
            onSubmit()
        }
    }

    function onSubmit()
    {
        userActions.updateUser({data: {first_name: firstName, last_name: lastName}, dispatch})
            .then(() =>
            {
                navigate(`/Suggest`)
                console.log("OK")
            })
            .catch(() =>
            {
                console.log("NOK")
            })
    }


    return (
        <div className="register">
            <div className="register-empty"/>
            <div className="register-child">
                <div className="register-title">خودتون رو معرفی کنید</div>
                <div className="register-name">
                    <input className="register-name-input" placeholder="نام" onChange={onFirstNameChange}/>
                </div>
                <div className="register-last-name">
                    <input className="register-last-name-input" placeholder="نام خانوادگی" onChange={onLastNameChange}
                           onKeyDown={onKeyDown}/>
                </div>
            </div>
            <Button isDisable={isBtnDisable} value="ثبت نام" onClick={onSubmit}/>
        </div>
    )
}

export default Register