import Button from "../component/Button"
import {useContext, useId, useState} from "react"
import {useNavigate} from "react-router-dom"
import userActions from "../../context/user/userActions"
import {UserContext} from "../../context/user/userReducer"
import Input from "../component/input/Input"
import {toast} from "react-toastify"

function Register()
{
    let navigate = useNavigate()
    const {dispatch} = useContext(UserContext)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const registerToast = useId()


    const isBtnDisable = lastName.length < 3

    function onFirstNameChange({value})
    {
        setFirstName(value)
    }

    function onLastNameChange({value})
    {
        setLastName(value)
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
                toast.success(" با موفقیت ذخیره شد")
            })
            .catch(() =>
            {
                toast.error("با خطا مواجه شد", {
                    toastId: registerToast,
                })
            })
    }


    return (
        <div className="register">
            <div className="register-empty"/>
            <div className="register-child">
                <div className="register-title">خودتون رو معرفی کنید</div>
                <div className="register-name">
                    <Input
                        className="making-flash-cards-body-name"
                        label="نام"
                        placeholder="نام"
                        onChange={onFirstNameChange}
                        name="name"
                        focusOnMount
                        showClear
                        disabled={false}
                    />
                </div>
                <div className="register-last-name">
                    <Input
                        className="making-flash-cards-body-name"
                        label="نام خانوادگی"
                        placeholder="نام خانوادگی"
                        onChange={onLastNameChange}
                        onKeyDown={onKeyDown}
                        name="name"
                        focusOnMount
                        showClear
                        disabled={false}
                    />
                </div>
            </div>
            <Button isDisable={isBtnDisable} value="ثبت نام" onClick={onSubmit}/>
        </div>
    )
}

export default Register