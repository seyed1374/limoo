import ComeBack from "../component/ComeBack"
import color from "../../media/Ellipse 2.png"
import Button from "../component/Button"
import {useContext, useState} from "react"
import {useNavigate} from "react-router-dom"
import packActions from "../../context/pack/packActions"
import {PackContext} from "../../context/pack/packReducer"
import URLS from "../../constant/URLS"

function AddPack()
{
    let navigate = useNavigate()
    const {dispatch} = useContext(PackContext)

    const [name,setName]=useState("")
    const isBtnDisable = name.length < 3

    function onNameChange(e){
       setName(e.target.value)
    }

    function onKeyDown(e){
        if (e.keyCode === 13)
        {
            onSubmit()
        }
    }

    function onSubmit() {
        packActions.makePack({data: {name}, dispatch})
            .then(res =>
            {
                navigate(URLS.pack(res.data.data._id))
            })
            .catch(() =>
            {
                console.log("NOK")
            })
    }

    return (
        <div className="add-package">
            <div className="add-package-header">
                <div className="add-package-header-detail">
                    <ComeBack/>
                    <div className="add-package-header-title">افزودن بسته ی جدید</div>
                    <div className="add-package-header-empty"/>
                </div>
                <div className="add-package-border"/>
            </div>
            <div className="add-package-body">
                <div className="add-package-body-name">نام بسته</div>
                <input className="add-package-body-name-input" placeholder="نام بسته خود را وارد کنید" onChange={onNameChange} onKeyDown={onKeyDown}/>
                <div className="add-package-body-color">
                    <div className="add-package-body-color-title">رنگ</div>
                    <div className="add-package-body-color-img">
                        <img className="add-package-body-color-img-detail" src={color} alt="آبی"/>
                        <img className="add-package-body-color-img-detail" src={color} alt="آبی"/>
                        <img className="add-package-body-color-img-detail" src={color} alt="آبی"/>
                        <img className="add-package-body-color-img-detail" src={color} alt="آبی"/>
                        <img className="add-package-body-color-img-detail" src={color} alt="آبی"/>
                        <img className="add-package-body-color-img-detail" src={color} alt="آبی"/>
                        <img className="add-package-body-color-img-detail" src={color} alt="آبی"/>
                        <img className="add-package-body-color-img-detail" src={color} alt="آبی"/>
                    </div>
                </div>
            </div>
            <div className="add-package-button">
                    <Button value="افزودن" isDisable={isBtnDisable} onClick={onSubmit}/>
            </div>
        </div>
    )
}

export default AddPack