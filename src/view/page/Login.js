import logo from "../../media/Frame 1.svg"
import Button from "../component/Button"
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import URLS from "../../constant/URLS"

function Login()
{
    let navigate = useNavigate()
    const [phone, setPhone] = useState("")

    const isBtnDisable = phone.length < 9

    function onPhoneChange(e)
    {
        setPhone(e.target.value)
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
        navigate(URLS.otp("09"+phone))
    }

    return (
        <div className="login">
            <div className="login-button empty"/>
            <div className="login-child">
                <img className="login-logo" src={logo} alt="لوگو"/>
                <div className="login-title">ورود به لیمو</div>
                <div className="login-desc">شماره موبایل خود را وارد کنید.</div>
                <div className="login-input">
                    <input className="login-input-detail" maxLength={9} type="tel" onChange={onPhoneChange}
                           onKeyDown={onKeyDown}/>
                    <div className="login-input-detail-number">09</div>
                </div>
            </div>
            <Button isDisable={isBtnDisable} onClick={onSubmit} value="ادامه"/>
        </div>
    )
}

export default Login