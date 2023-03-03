import {useParams, useNavigate} from "react-router-dom"
import Button from "../component/Button"
import {useEffect, useState} from "react"
import flash from "../../media/Vector 2.svg"
import ComeBack from "../component/ComeBack"
import userActions from "../../context/user/userActions"

function Otp()
{
    let navigate = useNavigate()
    const {phone} = useParams()
    const [otpCode, setOtpCode] = useState("")
    const isBtnDisable = otpCode.length < 4

    useEffect(() =>
    {
        userActions.getOtpCode({phone})
            .then(() =>
            {
                console.log("OK")
            })
            .catch(() =>
            {
                console.log("NOK")
            })
    }, [])

    function onOtpCodeChange(e)
    {
        setOtpCode(e.target.value)
    }

    function goBack()
    {
        window.history.back()
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
        navigate(`/login/Otp/09${phone}/Register`)

    }

    return (
        <div className="otp">
            <ComeBack/>
            <div className="otp-child">
                <div className="otp-title">کد تایید را وارد کنید</div>
                <div className="otp-desc">کد تایید 4 رقمی ارسال شده به شماره همراه {phone} را وارد کنید.</div>
                <div className="otp-edit" onClick={goBack}>ویرایش شماره</div>
                <input className="otp-input" maxLength={4} type="tel" onChange={onOtpCodeChange} onKeyDown={onKeyDown}/>
            </div>
            <Button isDisable={isBtnDisable} onClick={onSubmit} value="ادامه"/>
        </div>
    )
}

export default Otp