import Button from "../component/Button"
import {useState} from "react"
import {useNavigate} from "react-router-dom"

function Register()
{
    let navigate = useNavigate()

    const [name, setName] = useState("")

    const isBtnDisable = name.length < 3

    function onNameChange(e)
    {
        setName(e.target.value)
    }

    function onKeyDown(e) {
        if (e.keyCode === 13)
        {
            onSubmit()
        }
    }

    function onSubmit(){
        navigate(`/Suggest`)
    }


    return (
        <div className="register">
            <div className="register-empty"/>
            <div className="register-child">
                <div className="register-title">خودتون رو معرفی کنید</div>
                <div className="register-name">
                    <input className="register-name-input" placeholder="نام"/>
                </div>
                <div className="register-last-name">
                    <input className="register-last-name-input" placeholder="نام خانوادگی" onChange={onNameChange} onKeyDown={onKeyDown}/>
                </div>
            </div>
            <Button isDisable={isBtnDisable} value="ثبت نام" onClick={onSubmit}/>
        </div>
    )
}

export default Register