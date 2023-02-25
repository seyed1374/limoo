import {useParams, useNavigate, Link} from "react-router-dom"
import Button from "../component/Button"
import {useState} from "react"

function Otp()
{
    const {phone} = useParams()

    const [otpCode, setOtpCode] = useState("")

    const isBtnDisable = otpCode.length < 4

    function onOtpCodeChange(e)
    {
        setOtpCode(e.target.value)
    }

    function goBack()
    {
        window.history.back()
    }

    function onSubmit()
    {
        navigate(`/login/Otp/Register`)
    }

    return (
        <div className="otp">
            <div className="otp-empty"/>
            <div className="otp-child">
                <div className="otp-title">کد تایید را وارد کنید</div>
                <div className="otp-desc">کد تایید 4 رقمی ارسال شده به شماره همراه {phone} را وارد کنید.</div>
                <div className="otp-edit" onClick={goBack}>ویرایش شماره</div>
                <input className="otp-input" maxLength={4} type="tel" onChange={onOtpCodeChange}/>
            </div>
                <Button isDisable={isBtnDisable} onClick={onSubmit}/>
        </div>
    )
}

export default Otp