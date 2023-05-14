import {useContext, useState} from "react"
import ComeBack from "../component/ComeBack"
import {UserContext} from "../../context/user/userReducer"
import Input from "../component/input/Input"
import Button from "../component/Button"
import userActions from "../../context/user/userActions"
import {useNavigate} from "react-router-dom"
import URLS from "../../constant/URLS"
import {toast} from "react-toastify"

function EditInformation()
{
    let navigate = useNavigate()
    const {state: user} = useContext(UserContext)
    const {dispatch} = useContext(UserContext)
    const [phone, setPhone] = useState(user.phone)
    const [firstName, setFirstName] = useState(user.first_name)
    const [lastName, setLastName] = useState("")


    function onPhoneChange({value})
    {
        setPhone(value)
    }

    function onKeyDown(e)
    {
        if (e.keyCode === 13)
        {
            onSubmit()
        }
    }

    function onFirstNameChange({value})
    {
        setFirstName(value)
    }

    function onLastNameChange({value})
    {
        setLastName(value)
    }

    function onSubmit()
    {
        userActions.updateUser({data:{first_name: firstName, last_name: lastName, phone}, dispatch})
            .then(() =>
            {
                navigate(URLS.profile)
                toast.success(" با موفقیت ثبت شد")
            })
            .catch(() =>
            {
                toast.error("با خطا مواجه شد")
            })
    }

    return (
        <div className="edit-information">
            <div>
                <div className="edit-information-header">
                    <div className="edit-information-header-comeback">
                        <ComeBack/>
                    </div>
                    <div className="edit-information-header-title">ویرایش مشخصات من</div>
                </div>
                <div className="homepage-header-border"/>
                <div className="edit-information-inputs">
                    <Input
                        className="edit-information-inputs-detail"
                        label="شماره موبایل"
                        maxLength={11}
                        onChange={onPhoneChange}
                        defaultValue={user.phone}
                        name="phone"
                        focusOnMount
                        showClear
                        disabled={false}
                        disableSubmit={() => console.log("fuck")}
                        onSubmit={() => console.log("ok")}
                    />
                    <Input
                        className="edit-information-inputs-detail"
                        label="نام"
                        onChange={onFirstNameChange}
                        defaultValue={user.first_name}
                        name="name"
                        focusOnMount
                        showClear
                        disabled={false}
                        disableSubmit={() => console.log("fuck")}
                        onSubmit={() => console.log("ok")}
                    />
                    <Input
                        className="edit-information-inputs-detail"
                        label="نام خانوادگی"
                        onChange={onLastNameChange}
                        defaultValue={user.last_name}
                        name="last-name"
                        focusOnMount
                        showClear
                        disabled={false}
                        disableSubmit={() => console.log("fuck")}
                        onSubmit={() => console.log("ok")}
                    />
                </div>
            </div>
            <div className="add-package-button">
                <Button value="ثبت" onClick={onSubmit}/>
            </div>
        </div>
    )
}

export default EditInformation